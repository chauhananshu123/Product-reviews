require('dotenv').config()
const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.connect(process.env.MONGODB_URL, { useUnifiedTopology: true });
mongoose.connection.once('open', function() {
   // console.log('connection has been made');
}).on('error', function(error) {
    console.log('Database error is :', error);
});

module.exports = mongoose;