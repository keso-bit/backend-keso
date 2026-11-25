
const express = require('express');
const app = express();
const port = 3000;

// ლოგირების middleware (უნდა იყოს როუტების (routes) წინ)
app.use((req, res, next) => {
    const time = new Date().toISOString();
    console.log(`[${time}] Method: ${req.method} | URL: ${req.url}`);
    next();
});

// პირველი GET - მომხმარებლის ინფორმაცია
app.get('/user', (req, res) => {
    res.json({
        name: "keso",
        age: 14,
        position: "developer"
    });
});

// მეორე GET - პროექტების მასივი
app.get('/projects', (req, res) => {
    res.json([
        {
            id: 1,
            name: "My First Website"
        },
        {
            id: 2,
            name: "Portfolio Website"
        },
        {
            id: 3,
            name: "Todo List"
        }
    ]);
});

// მესამე GET - უნარები
app.get('/skills', (req, res) => {
    res.json([
        "HTML",
        "CSS",
        "JavaScript",
        "React"
    ]);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
