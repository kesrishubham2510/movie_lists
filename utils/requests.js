const API_KEY = process.env.API_KEY;

// we have a object here because we need to use it with keys and values,
//  in case of array we must have to remember the index of the title 

export default {
	fetchTrending : {
		title: 'Trending',
		url: `/trending/all/week?api_key=${API_KEY}&language=en-US`, 
	},
	fetchTopRated : {
		title: 'Top Rated',
		url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`, 
	},
	fetchComedyMovies : {
		title: 'Comedy',
		url: `/discover/movie?api_key=${API_KEY}&with_genre=35`, 
	},
	fetchHorrorMovies: {
		title: 'Horror',
		url: `/discover/movie?api_key=${API_KEY}&with_genre=27`, 
	},
	// fetchTrendingg : {
	// 	title: 'Trendingd',
	// 	url: `/trending/all/week?api_key=${API_KEY}&language=en-US`, 
	// },
	// fetchTopRatedd : {
	// 	title: 'Top Ratedd',
	// 	url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`, 
	// },
	// fetchComedyMoviess : {
	// 	title: 'Comedyd',
	// 	url: `/discover/movie?api_key=${API_KEY}&with_genre=35`, 
	// },
	// fetchHorrorMoviesss: {
	// 	title: 'Horrord',
	// 	url: `/discover/movie?api_key=${API_KEY}&with_genre=27`, 
	// },
};
