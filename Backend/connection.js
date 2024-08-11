const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://gagangkurup10:omen16@clusterinternship.zup2cqv.mongodb.net/userdb?retryWrites=true&w=majority&appName=Clusterinternship')
  .then(() => {
    console.log('Connected to DB');
  })
  .catch((error) => {
    console.error('Error connecting to DB:', error);
  });
