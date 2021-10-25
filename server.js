const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

app.listen(PORT, function() {
    console.log(`App listening on PORT: ${PORT}`);
});

/*
Creating app... done, ⬢ salty-chamber-17307
https://salty-chamber-17307.herokuapp.com/ | https://git.heroku.com/salty-chamber-17307.git
http://localhost:3000
*/