var csvfile = "elements.csv";

Papa.parse(csvfile, {
	download: true,
	complete: processCsv
});

function processCsv(results) {
	var data = results.data
	console.log(data[0]);
	console.log(data[5]);
	console.log(data[10]);
}