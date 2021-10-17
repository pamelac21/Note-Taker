const express = require('express');
const apiRoutes = require("./routes/apiRoutes.js");
const htmlRoutes = require("./routes/htmlRoutes.js");
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use('/api', apiRoutes);
app.use('*', htmlRoutes);


app.listen(PORT, function() {
    console.log(`App listening on PORT: ${PORT}`);
});

/*
Creating app... done, ⬢ salty-chamber-17307
https://salty-chamber-17307.herokuapp.com/ | https://git.heroku.com/salty-chamber-17307.git
*/