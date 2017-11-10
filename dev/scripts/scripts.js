const thisApp = {};

thisApp.deathNamesArray = [];

thisApp.init = () => {
	console.log("connected!");

	const parseData = (deaths) => {
		deaths.map(function(death) {
			thisApp.deathNamesArray.push(death.name)
		});
		const deathAge = deaths.map(function (death) {
			return death.age
		});
		const deathRace = deaths.map(function (death) {
			return death.race
		});
	}

	axios.get('https://thecountedapi.com/api/counted')
		.then(function (response) {
			// console.log(response.data);
			const deaths = response.data;
			parseData(deaths);
			console.log(deaths);
		})

	var chart = c3.generate({
		data: {
			// iris data from R
			columns: [
				['data1', 30, 24, 12, 15],
				['data2', 120],
			],
			type: 'pie',
			onclick: function (d, i) { console.log("onclick", d, i); },
			onmouseover: function (d, i) { console.log("onmouseover", d, i); },
			onmouseout: function (d, i) { console.log("onmouseout", d, i); }
		}
	});

	setTimeout(function () {
		chart.load({
			columns: [
				["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
				["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
				["virginica", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
			]
		});
	}, 1500);

	setTimeout(function () {
		chart.unload({
			ids: 'data1'
		});
		chart.unload({
			ids: 'data2'
		});
	}, 2500);
	console.log(chart)

};

$(thisApp.init);