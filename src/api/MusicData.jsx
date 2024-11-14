export const getMusic = async() => {

    const url = 'https://deezerdevs-deezer.p.rapidapi.com/infos';
    const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '325f7d0c0cmsh4f7d10f1ed0f01ap16e847jsn612b75186dd3',
		'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
    return result;
} catch (error) {
	console.error(error);
}

}