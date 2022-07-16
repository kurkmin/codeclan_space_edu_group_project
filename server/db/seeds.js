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
        "question": 'What is the gravity of Earth?',
        "answer": 9.8
    },
    {
        "question": "What is French name of Earth?",
        "answer": "La Terre",
    },
    {
        "question": "Does the Earth have any moons?",
        "answer": true,
    },
    {
        "question": "what is the radius of the earth",
        "answer": 6371.0084
    },
    {
        "question": "What is the density of Earth?",
        "answer": 5.51360
    }
])