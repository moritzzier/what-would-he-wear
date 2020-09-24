import { Router } from "express";

export const weather = Router();

weather.get('/', (req, res) => {
    res.send('ITS HOT DUDE!')
})