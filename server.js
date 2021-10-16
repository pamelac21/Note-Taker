const express = require('express');
const app = express();
app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(express.static("public"));

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

app.listen(PORT, function() {
    console.log(`App listening on PORT: ${PORT}`);
});