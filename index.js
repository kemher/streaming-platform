const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const port = process.env.PORT || 4000; 
const movieRoutes = require('./routers/movie');
const userRoutes = require('./routers/user');
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(cors());


mongoose.connect('mongodb+srv://admin:admin131@bootcamp.y9mz6.mongodb.net/movieHaus?retryWrites=true&w=majority', {

	useNewUrlParser: true,
	useUnifiedTopology: true
});

let db = mongoose.connection;

	db.on("error", console.error.bind(console, "Connection Error"))
	db.once('open', () => console.log('Now connected to MongoDB Atlas'));

app.use('/movie', movieRoutes);
app.use('/user', userRoutes);

app.listen(port, () => console.log(`Server is running at port: ${port}`))


