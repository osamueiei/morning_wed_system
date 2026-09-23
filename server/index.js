const exp = require("express");
const crs = require("cors");
const app = exp();
const PORT = process.env.PORT || 5000;

app.use(crs());
app.use(exp.json());

const quotes = [
    { id: 1, text: "aaaaaaaaaaaaaa", author: "o" },
    { id: 2, text: "bbbbbbbbbbbbbb", author: "sa" },
    { id: 3, text: "cccccccccccccc", author: "mu" },
];

app.get("/api/quotes", (req, res) => {
    if (!quotes.length) {
        return res.status(404).json({ message: "No quotes available" });
    }

    const randomIndex = Math.floor(Math.random() * quotes.length);
    res.json(quotes[randomIndex]);
});

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});

