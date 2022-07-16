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
        "question": 'what is the diameter of the saturn?',
        "answer": '1km'
    },
    {
        "question": "how many planets in our solar system?",
        "answer": 1
    }
])