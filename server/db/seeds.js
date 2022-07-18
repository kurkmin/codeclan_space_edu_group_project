use solar_system;
db.dropDatabase();

db.users.insertMany([
    {
        "name": "Wee Jimmy",
        "age": 16,
        "mass": 70,
        "favourite_planets": [],
        "completed_quizzes": [],
        "favourite_images": []
    },
    {
        "name": "Wee Jilly",
        "age": 18,
        "mass": 74,
        "favourite_planets": [],
        "completed_quizzes": [],
        "favourite_images": []
    },
    {
        "name": "Bob",
        "age": 14,
        "mass": 68,
        "favourite_planets": [],
        "completed_quizzes": [],
        "favourite_images": []
    }
])
db.quizzes.insertMany([
    {
        "question": 'What is the gravity of '
    },
    {
        "question": "What is French name of "
    },
    {
        "question": "Are there any moons around the planet "
    },
    {
        "question": "what is the radius of "
    },
    {
        "question": "What is the density of "
    }
])