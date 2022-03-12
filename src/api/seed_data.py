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
            "email": 'lencericardo@mail.com',
            "password": encryp_pass("12345"),
            "first_name": "Ricardo",
            "last_name": "loquesea",
            "phone": "123456789",
            "role_id": 1
            
        },
         {

            "email": 'batman@mail.com',
            "password": encryp_pass("12345"),
            "first_name": "Bruce",
            "last_name": "Wayne",
            "phone": "987654321",
            "role_id": 2
        },
        {
            "email": 'chan@mail.com',
            "password": encryp_pass("12345"),
            "first_name": "Jackie",
            "last_name": "Chan",
            "phone": "145628399",
            "role_id": 3
        }
    ]
}