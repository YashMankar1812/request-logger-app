
const app = require('./app'); // Import the app

// Start the server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhot:${PORT}`);
});
