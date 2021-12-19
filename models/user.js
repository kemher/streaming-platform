const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

	email: {
		type: String,
		required: [true, 'title is required']
	},

	password: {
		type: String,
		required: [true, 'description is required']
	},

	isAdmin: {
		type: Boolean,
		default: true
	}
})

module.exports = mongoose.model('User', userSchema);