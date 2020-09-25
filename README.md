# what-would-he-wear
It's all a question of temperature. Never take a guess again when heading out!

## Installation

### Requirements

* node.js
* npm

### Without Heroku

After cloning the project, use `npm` to install dependencies. The `package.json` includes all the scripts defined for developing and building.

```bash
npm install

npm run build # build the project
npm run watch # starts watching for changes in the public and src folders
```

Before you can start the server you need to create a `.env`-File with the key for the weather api and the port for running the server

```
WEATHER_API_KEY='your-api-key-here'
PORT='1337'
```

After that you can start the server with node

```bash
node ./dist/index.js
```

### With Heroku

If you are starting the app with the `Heroku local`-Command you dont need to specify a port in the `.env`-File.
And instead of using node to start the server you just use heroku local.

```bash
heroku local
```

## Contributing

If you want to add something, feel free in opening a pull-request!

## License

[GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)