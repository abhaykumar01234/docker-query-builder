const express = require('express')
const cors = require('cors');
const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => res.send({msg: 'Hello From Server'}))

require("./routes/customer.routes.js")(app);
require("./routes/olympics.routes.js")(app);

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))