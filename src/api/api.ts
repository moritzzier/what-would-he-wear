import { Router } from "express";
import { weather } from "./weather";

const api = Router();

api.use('/weather', weather)

export default api;