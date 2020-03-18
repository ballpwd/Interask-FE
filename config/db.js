const mongoose = require('mongoose');
const URI = 'mongodb+srv://admin:admin@test-qlzr0.mongodb.net/test?retryWrites=true&w=majority'

const connectDB = async()=>{
    try {
		await mongoose.connect(URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true
        });

        console.log('MongoDB Connected...');
        
    } catch (err) {
		console.error(err.message);
		// Exit process with failure
		process.exit(1);
	}
}

module.exports = connectDB ;