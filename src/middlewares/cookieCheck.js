module.exports = (req, res, next) => {
    if(req.cookies.cookieEjercio){
        console.log("Aquiii")
        req.session.color = req.cookies.cookieEjecicio;
    }
    next()
}