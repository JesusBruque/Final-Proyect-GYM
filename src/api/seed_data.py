from api.shared.encrypte_pass import encryp_pass
data = {
    "Role":[
        {
            "id": 1,
            "role_name": "customer"
        },
        {
            "id": 2,
            "role_name": "trainer"
        },
        {
            "id": 3,
            "role_name": "physio"
        }
    ],
    "User":[
        {
            "id":1,
            "email": 'lencericardo@mail.com',
            "password": encryp_pass("12345"),
            "first_name": "Ricardo",
            "last_name": "loquesea",
            "phone": "123456789",
            "role_id": 1
            
        },
         {
            "id":2,
            "email": 'batman@mail.com',
            "password": encryp_pass("12345"),
            "first_name": "Bruce",
            "last_name": "Wayne",
            "phone": "987654321",
            "role_id": 2
        },
        {
            "id":3,
            "email": 'chan@mail.com',
            "password": encryp_pass("12345"),
            "first_name": "Jackie",
            "last_name": "Chan",
            "phone": "145628399",
            "avatar": "https://www.hollywoodreporter.com/wp-content/uploads/2012/07/chan_a.jpg?w=681&h=383&crop=1",
            "role_id": 3
        }
    ],
    "Info":[
        {
            "id": 3,
            "goals": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "medical_history": "Vestibulum at dolor at lacus placerat gravida.",
            "user_id": 3
        }
    ]
}