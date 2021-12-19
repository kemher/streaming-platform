const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({

	title: {
		type: String,
		required: [true, 'title is required']
	},

	description: {
		type: String,
		required: [true, 'description is required']
	},

	isActive: {
		type: Boolean,
		default: true
	}
})

module.exports = mongoose.model('Movie', movieSchema);