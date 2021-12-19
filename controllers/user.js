const User = require('../models/user');
const bcrypt = require('bcrypt');


module.exports.signUp = (reqBody) => {

	let newUser = new User({
		email: reqBody.email,
		password: bcrypt.hashSync(reqBody.password, 10)
	})
	return newUser.save().then((result, err) => {
		if(err){
			console.log(err)
			return false
		} else {
			return ('A user has been added')
		}
	})
}

module.exports.setupAdmin = (userId) => {
	return User.findByIdAndUpdate(userId, {$set: {isActive: true}}).then((result, err) => {
		if(err) {
			console.log(err)
			return false
		} else {
			return result
		}
	})
}