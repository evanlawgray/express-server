const express = require('express');

const app = express();
// Serve content from static root folder (useful for serving static webpages)

// app.use(express.static(__dirname));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
