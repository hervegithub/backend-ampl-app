const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());



app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.post('/api/teachers', (req, res, next) => {
    console.log(req.body);
    res.status(201).json({
        message: 'Objet créé !'
    });
});

app.use('/api/teachers', (req, res, next) => {
    const teachers = [
        {
            _id: '1',
            nom: 'Naruto Uzumaki',
            ville: "Douala",
            competences: [
                {
                    id: 1,
                    titre: "Maths",
                },
                {
                    id: 2,
                    titre: "Physique",
                },
                {
                    id: 3,
                    titre: "Chimie",
                }
            ],
            imageUrl: './108-80.png',
            recommandations: 2,
            notes: 2.5,
        },
        {
            _id: '1',
            nom: 'Naruto Uzumaki',
            ville: "Douala",
            competences: [
                {
                    id: 1,
                    titre: "Maths",
                },
                {
                    id: 1,
                    titre: "Physique",
                },
                {
                    id: 1,
                    titre: "Chimie",
                }
            ],
            imageUrl: './108-80.png',
            recommandations: 2,
            notes: 2.5,
        },
        {
            _id: '1',
            nom: 'Naruto Uzumaki',
            ville: "Douala",
            competences: [
                {
                    id: 1,
                    titre: "Maths",
                },
                {
                    id: 1,
                    titre: "Physique",
                },
                {
                    id: 1,
                    titre: "Chimie",
                }
            ],
            imageUrl: './108-80.png',
            recommandations: 2,
            notes: 2.5,
        },
        {
            _id: '1',
            nom: 'Naruto Uzumaki',
            ville: "Douala",
            competences: [
                {
                    id: 1,
                    titre: "Maths",
                },
                {
                    id: 1,
                    titre: "Physique",
                },
                {
                    id: 1,
                    titre: "Chimie",
                }
            ],
            imageUrl: './108-80.png',
            recommandations: 2,
            notes: 2.5,
        },
        {
            _id: '1',
            nom: 'Naruto Uzumaki',
            ville: "Douala",
            competences: [
                {
                    id: 1,
                    titre: "Maths",
                },
                {
                    id: 1,
                    titre: "Physique",
                },
                {
                    id: 1,
                    titre: "Chimie",
                }
            ],
            imageUrl: './108-80.png',
            recommandations: 2,
            notes: 2.5,
        },
        {
            _id: '1',
            nom: 'Naruto Uzumaki',
            ville: "Douala",
            competences: [
                {
                    id: 1,
                    titre: "Maths",
                },
                {
                    id: 1,
                    titre: "Physique",
                },
                {
                    id: 1,
                    titre: "Chimie",
                }
            ],
            imageUrl: './108-80.png',
            recommandations: 2,
            notes: 2.5,
        },
    ];
    res.status(200).json(teachers);
});

module.exports = app;