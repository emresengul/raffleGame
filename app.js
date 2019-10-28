const express = require("express");
const app = express();
const userRoutes = require("./routes/user");
const bodyParser = require("body-parser");
const path = require("path");



app.set("view engine","pug");
app.set("views","./views"); // Dosyaların nerede saklanacağına karar verir.

app.use(bodyParser.urlencoded( {extended:false} ));
app.use(express.static(path.join(__dirname,"public")));



app.use(userRoutes);




app.listen(8080,()=>{
    console.log(`App Starting on port`)
});
