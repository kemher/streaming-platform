const Movie = require('../models/movie');

module.exports.addMovie = (reqBody) => {

	let newMovie = new Movie ({

		title: reqBody.title,
		description: reqBody.description,
		seats: reqBody.seats

	})

	return newMovie.save().then((movie, err) => {

		if(err) {
			console.log(err)
			return err
		} else {
			return true
		}
	})
}

// get all movies

module.exports.allMovies = () => {

	return Movie.find({}).then((result, err) => {

		if(err) {
			console.log(err)
			return false
		} else {
			return result
		}
	})
}

// get all active movies

module.exports.activeMovies = () => {

	return Movie.find({isActive: true}).then((result, err) => {

		if(err) {
			console.log(err)
			return false
		} else {
			return result
		}
	})
}

//update a movie

module.exports.movieUpdate = (movieId, reqbody) => {

	let updatedMovie = {
			title: reqbody.title,
			description: reqbody.description,
			seats: reqbody.seats

	}
	return Movie.findByIdAndUpdate(movieId, updatedMovie).then((result, err) => {

		if(err) {
			console.log(err)
			return false

		} else {
			return result
		}
		
	})

}

// archive a movie
module.exports.archivedMovie = (movieId) => {

	return Movie.findByIdAndUpdate(movieId, {$set: {isActive: false}}).then((result, err) => {

		if(err){
			console.log(err)
			return false
		} else {
			return result
		}
	
	})
}

// archive a movie
module.exports.deleteMovie = (movieId) => {

	return Movie.findByIdAndDelete(movieId).then((result, err) => {

		if(err){
			console.log(err)
			return false
		} else {
			return (`${result.title} is deleted`)
		}
	
	})
}