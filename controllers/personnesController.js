const controller = {};
const fs = require('fs');

controller.list = (req, res) => {
    fs.readFile("./src/personnes.json", "utf8", (err, file) => {
        if (err) console.log(err);
        data = JSON.parse(file);
        // console.log(data);
        res.render("index", {
            data: data
        });
    });

};
controller.getinfo = (req, res) => {
    fs.readFile("users.json", "utf8", (err, file) => {
        if (err) console.log(err);
        data = JSON.parse(file).filter(x => {
            return x.id == req.params.id;
        });

        res.send(data);
    });
};
module.exports = controller;