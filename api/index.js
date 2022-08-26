const express = require('express');
const coordsRouter = require('./routes/coords.routes');
const cors = require('cors');

const PORT = process.env.PORT || 4000;

const app = express();

var corsOptions = {
  origin: process.env.CLIENT_ORIGIN || 'http://localhost:3000',
};
app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Hello express-postgres');
});

app.use(express.json());
app.use('/api', coordsRouter);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
