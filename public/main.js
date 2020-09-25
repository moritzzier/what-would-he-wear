var wasFetched = false;

async function showMe() {
	if (!wasFetched) {
		const weather = await fetchWeather();
		render(calculatePercent(weather));
	}
}

function calculatePercent(weather) {
	if (weather.daily[0].temp.min && weather.daily[0].temp.min) {
		const max = weather.daily[0].temp.max;
		const min = weather.daily[0].temp.min;

		/*
		 *  TODO: verify if values correspond to reality
		 */
		if (max >= 20) {
			if (max >= 27) {
				return 0;
			}
			return 20;
		} else {
			if (max <= 19) {
				if (max <= 15) {
					return 100;
				}
				return 80;
			}
		}
	}
}

/*
 *  visualises the given percentage
 */
function render(percent) {
	if (percent < 0 || percent > 100) {
		return;
	}

	const legHeight = 30 + 70 * (percent / 100);
	const armHeight = 30 + 60 * (percent / 100);

	const armLeft = document.getElementById('arm_left');
	const armRight = document.getElementById('arm_right');
	const legLeft = document.getElementById('leg_left');
	const legRight = document.getElementById('leg_right');

	/*
	 *  30 to 100 => Legs
	 *  30 to 90  => Arms
	 */
	legLeft.setAttribute('height', legHeight);
	legRight.setAttribute('height', legHeight);

	armRight.setAttribute('height', armHeight);
	armLeft.setAttribute('height', armHeight);

	console.log(legLeft);
	console.log(legRight);
}

async function fetchWeather() {
	const response = await fetch('/api/weather?lat=51.2&lon=7.2');
    wasFetched = true;
	return await response.json();
}
