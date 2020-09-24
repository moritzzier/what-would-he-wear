import express from 'express';

const app = express();

console.log(process.env.PORT)

app.listen(process.env.PORT, () => {
    console.log(`Server is listening to ${process.env.PORT}`)
})

app.get('*', (req, res) => {
    res.send('IT WORKS!')
})