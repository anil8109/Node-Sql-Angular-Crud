const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
const db = require('./models');
const User = require('./routes/userRoutes');

app.use(express.json());
db.sequelize.sync({
  // force: true
  // Force true destroy old data and creates new fresh tables again
})
  .then(() => {
    console.log('Synced db.');
  })
  .catch((err) => {
    console.log('Failed to sync db: ' + err.message);
  });

app.use(cors());
app.use('/api/users', User);

app.listen(3000, () => console.log('Server running'));
