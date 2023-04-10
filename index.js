const express = require('express');
const app = express();
const port = 3666
//import dari route
const Router = require('./routes/route')

const options = {
    dotfiles: 'ignore',
    etag: false,
    extentions: ['htm', 'html'],
    index: false,
    maxAge: '1d',
    redirect: false,
    setHeaders: function (res, path, stat){
        res.set('x-timestamp', Date.now())
    }
}

app.use(Router);

app.use(express.static('public', options))

app.listen(port, ()=>{
    console.log('SERVER LANCAR BRO di http://localhost:3666')
});