const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

app.use(express.json());
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connect('mongodb://127.0.0.1:27017')
    .then((client) => {
        const db = client.db('solar_system');
        const planetsCollection = db.collection('planets');
        const planetsRouter = createRouter(planetsCollection);

        const usersCollection = db.collection('users');
        const usersRouter = createRouter(usersCollection);


        app.post('/api/planets', (req, res) => {
            const newData = req.body;
            if (newData.hasOwnProperty("englishName") && newData.hasOwnProperty("id")) {
                planetsCollection
                    .insertOne(newData)
                    .then((result) => {
                        res.json(result.ops[0]);
                    })
                    .catch((err) => {
                        console.error(err);
                        res.status(500);
                        res.json({ status: 500, error: err });
                    });
            } else {
                res.status(400);
                res.send("each planet should have its own name and id");
            }
        });

        app.use('/api/planets', planetsRouter)
        app.use('/api/users', usersRouter)
    });


app.listen(9000, function () { // NEW
    console.log('App running on port 9000');
});

