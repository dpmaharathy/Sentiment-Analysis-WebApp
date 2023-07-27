const express = require('express');
const bodyParser = require('body-parser');
const Sentiment = require('sentiment');

const app = express();
const sentiment = new Sentiment();

// Set up middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (optional)
app.use(express.static('public'));

// Set up routes
app.post('/analyze', (req, res) => {
  const review = req.body.review;
  const result = sentiment.analyze(review);

  res.json(result);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
