const express = require('express');

const app = express();
app.use(express.static('View'));
app.set('views', __dirname + '/view');
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

const users = [
    {
        userName: 'admin',
        password: 123,
    },
    {
        userName: 'naufal',
        password: '123a',
    }
];
 
app.get('/', (req, res) => {
    res.render('index')
})
app.get('/Home-Game', (req, res) => {
    res.render('index5')
    // console.log(userName);
})

app.get('/Game', (req, res) => {
    res.render('Index2')
})

app.get('/Login', (req, res) => {
    res.render('index3')
})

app.post('/login', (req, res) => {
    const {  userName, password } = req.body;
    
    const user = users.find(u => {
        return u.userName == userName && password == u.password
    });
    if (user) {
        console.log(user);
        res.redirect('/Home-Game');

    } else {start
        res.render('index3', {
        });
    }
});

app.use((req, res, next) => {
    res.status(404)
    res.send('<h1> 404 </h1>')
    next ()

})


app.listen(8080)
