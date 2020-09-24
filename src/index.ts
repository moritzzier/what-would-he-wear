import express from 'express';

const app = express();

app.listen(process.env.PORT, () => {
    `Server is listening to ${process.env.PORT}`
})

app.get('*', (req, res) => {
    res.send('IT WORKS!')
})