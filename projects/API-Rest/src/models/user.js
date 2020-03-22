const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		require: true,
	},
	email: {
		type: String,
		unique: true,
		require: true,
		lowercase: true,
	},
	password: {
		type: String,
		require: true,
		select: false,
	},
	CreatedAt: {
		type: Date,
		default: Date.now(),
	},
})

UserSchema.pre('save', async function crypt(next) {
	const hash = await bcrypt.hash(this.password, 10)
	this.password = hash

	next()
})

const User = mongoose.model('User', UserSchema)

module.exports = User
