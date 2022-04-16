from api.shared.encrypte_pass import encryp_pass, compare_pass
from api.models.index import db, User, Goal

def get_goals_by_user_id(user_id):
    goals = db.session.query(Goal).filter(Goal.user_id == user_id).all()
    list_goals = []
    for goal in goals:
        list_goals.append(goal.serialize())
    return list_goals

def add_goal(body, user_id):
    try:
        if body['goals'] is None:
            return False
     
        new_goal = Goal(goals=body['goals'], user_id=user_id)
        db.session.add(new_goal) 
        db.session.commit()
        return new_goal.serialize()

    except Exception as err:
        db.session.rollback()
        print('[ERROR ADD GOAL]: ', err)
        return None

def update_goal(body, user_id):
    try:
        goal = db.session.query(Goal).filter(Goal.id==body['id']).first()
        if goal.user_id == user_id and goal is not None:
            
            goal_json = goal.serialize()
            for key, value in body.items():
                goal_json[key] = value

            del goal_json["id"]
            Goal.query.filter(Goal.id ==body['id']).update(goal_json)  
            db.session.commit()
            return goal.serialize()
        else:
            return False

    except Exception as err:
        print('[ERROR UPDATE GOAL]: ', err)
        return None
    
def delete_goal(body, user_id):
    goal = db.session.query(Goal).filter(Goal.id==body['id']).first()
    if goal.user_id == user_id and goal is not None:
        db.session.delete(goal)
        db.session.commit()
        return True
    else:
        return False

