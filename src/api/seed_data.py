from api.shared.encrypte_pass import encryp_pass
data = {
    "Role":[
        {
            "role_name": "customer"
        },
        {
            "role_name": "trainer"
        },
        {
            "role_name": "physio"
        }
    ],
    "User":[
        {
            "id": 9000,
            "email": 'lencericardo@mail.com',
            "password": encryp_pass("12345"),
            "first_name": "Ricardo",
            "last_name": "loquesea",
            "phone": "123456789",
            "role_id": 1
            
        },
         {
            "id": 9001,
            "email": 'batman@mail.com',
            "password": encryp_pass("12345"),
            "first_name": "Bruce",
            "last_name": "Wayne",
            "phone": "987654321",
            "role_id": 2
        },
        {
            "id": 9002,
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
            "id": 7000,
            "goals": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "medical_history": "Vestibulum at dolor at lacus placerat gravida.",
            "user_id": 9002
        }
    ],
    "Message":[
        {
            "id": 5001,
            "text": "HOLA",
            "user_receive": 2,
            "user_sent": 1
        },
        {
            "id": 5002,
            "text": "Hola Chan?",
            "user_receive": 2,
            "user_sent": 3
        },
        {
            "id": 5003,
            "text": "CARACOLA",
            "user_receive": 1,
            "user_sent": 2
        },
        {
            "id": 5004,
            "text": "K ASE?",
            "user_receive": 2,
            "user_sent": 1
        },
        {
            "id": 5005,
            "text": "K DICE ER BATMAN?",
            "user_receive": 3,
            "user_sent": 2
        }
    ]
}