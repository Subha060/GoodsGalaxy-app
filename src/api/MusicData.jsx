export const getMusic = async(search) => {

    const url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${search}`;
    const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '325f7d0c0cmsh4f7d10f1ed0f01ap16e847jsn612b75186dd3',
		'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	// console.log(result.data)
    return result.data;
} catch (error) {
	console.error(error);
}

}