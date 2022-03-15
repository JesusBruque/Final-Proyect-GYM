from api.shared.encrypte_pass import encryp_pass
data = {
    "Role":[
        {
            "id":1,
            "role_name": "customer"
        },
        {
            "id":2,
            "role_name": "trainer"
        },
        {
            "id":3,
            "role_name": "physio"
        },
        {
            "id":4,
            "role_name": "admin"
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
        },
        {
            "id": 9003,
            "email": 'palomadera@gmail.com',
            "password": encryp_pass("12345"),
            "first_name": "Paloma",
            "last_name": "Dera",
            "phone": "123456789",
            "role_id": 4
        }
    ],
}