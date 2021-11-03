const sql = require("../service/db.js");

// Retrieve all Customers from the database.
exports.query = (req, res) => {
    sql.query(req.body.query, (err, response) => {
        if (err) {
          console.log("error: ", err);
          return res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving customers.",
          });
        }
    
        console.log("olympic_winners:", response);
        res.send(response)
      });
};