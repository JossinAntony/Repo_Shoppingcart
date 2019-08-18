const Express = require('Express');

var app = new Express();
app.set('view engine', 'ejs');
app.use(Express.static(__dirname+"/public"));

app.get('/',(req,res)=>{
    res.render('index');
});

app.listen( process.env.PORT || 3001, ()=>{
    console.log("Server running at http://localhost:3001");
});