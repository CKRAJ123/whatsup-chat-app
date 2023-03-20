const express=require('express');
const app=express();
const http = require('http').createServer(app)
const path=require('path');
const PORT=process.env.PORT || 3000;
app.set('view engine', 'ejs');
app.use(express.static('assets'));
app.use(express.static(__dirname + '/assects'));
app.get('/',(req,res)=>{
    return res.render('index');
});




http.listen(PORT,function(err){
     if(err)
     console.log("some error coming" .err);
     console.log(`no error ${PORT}`);
});


// Socket 
const io = require('socket.io')(http)

io.on('connection', (socket) => {
    console.log('Connected...')
    socket.on('message', (msg) => {
        socket.broadcast.emit('message', msg)
    })

})

