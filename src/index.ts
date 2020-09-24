import express from 'express';
import api from './api/api';

const app = express();

/*
 * crash if PORT is not defined
 */
if(process.env.PORT === undefined) {
    console.error('no port: ', process.env.PORT);
    process.exit();
}

/*
 * serve static files to the browser
 */
app.use(express.static('./public'))
app.use('/api', api)

app.listen(process.env.PORT, () => {
    console.log(`Server is listening to ${process.env.PORT}`)
})

app.get('*', (req, res) => {
    res.send('IT WORKS!')
})