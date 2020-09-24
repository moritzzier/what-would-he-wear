import { Router } from 'express';
import got from 'got/dist/source';

export const weather = Router();

weather.get('/', async (req, res) => {

    /*
     *  check if api key is present
     */
    if(!process.env.WEATHER_API_KEY) {
        console.log('api.openweathermap.org api-key is missing')
        return res.sendStatus(404);
    }

	try {
		if (typeof req.query['lat'] === 'string' && typeof req.query['lon'] === 'string') {
			const lat = parseInt(req.query['lat']);
			const lon = parseInt(req.query['lon']);

            /*
             *  query current weather data from api.openweathermap.org
             */
			return got(`http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&units=metric&appid=${process.env.WEATHER_API_KEY}`).then(result => {
                return res.send(result.body)
            }).catch(err => {
                console.log(err);
                return res.sendStatus(404)
            });
		}

        return res.sendStatus(404);
	} catch (err) {
		return res.sendStatus(404);
	}
});
