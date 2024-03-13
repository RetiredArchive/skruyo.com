const readFile = (filePath, callback, ignoreErr = true) => {
	fetch(filePath)
		.then(response => {
			if (!response.ok & !ignoreErr) {
				throw new Error('Network response was not ok');
			}
			return response.text();
		})
		.then(data => {
			callback(null, data);
		})
		.catch(error => {
			callback(error, null);
		});
}