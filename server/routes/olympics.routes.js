module.exports = app => {
    const olympics = require('../controllers/olympics.controller.js')

    app.post("/vp/api/db", olympics.query);
}