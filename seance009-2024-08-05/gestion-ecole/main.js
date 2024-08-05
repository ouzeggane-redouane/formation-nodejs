const express = require("express");
const app = express();

require('dotenv').config();

//==================================
//Middlewares
//==================================
require('./middlewares/')(app)

app.set('view engine', 'ejs')
app.set('views', 'ui-html')
app.use( express.static( __dirname + '/public') )


//==================================
//Routing
//==================================
require('./routes/')(app)

const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
  console.log("==============================");
  console.log("Web server on port : " + PORT);
  console.log("==============================");
});
