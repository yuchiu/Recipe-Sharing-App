module.exports = (app)=>{
    
app.post('/register', (req, res) => {
    res.send({
      message: `hellow ${req.body.email}! Your user was registered, have fun!`
    })
  })
}