var express = require("express");
var mysql = require('mysql')
var cors = require("cors")
var app = express();
app.use(cors())
app.use(express.json())

var connection = require('./database');

app.get('/', function (req, res) {
    let sql = "SELECT * FROM customers_details";
    connection.query(sql, function (err, results) {
        if (err) throw err;
        res.send(results);
    });
});

app.get('/product_list', function (req, res) {
    let sql = "SELECT * FROM product_list";
    connection.query(sql, function (err, results) {
        if (err) throw err;
        res.send(results);
    });
});

app.get('/inward', function (req, res) {
    let sql = "SELECT * FROM inward_details";
    connection.query(sql, function (err, results) {
        if (err) throw err;
        res.send(results);
    });
});

app.get('/outward', function (req, res) {
    let sql = "SELECT * FROM outward_details";
    connection.query(sql, function (err, results) {
        if (err) throw err;
        res.send(results);
    });
});

app.post('/customers_details', (req, res) => {
    const sql = "INSERT INTO customers_details(Customer_Id,Customer_Name,Email,Active_Status) VALUES(?)";
    const values = [
        req.body.customerId,
        req.body.customerName,
        req.body.email,
        req.body.activeStatus,
    ]
    connection.query(sql, [values], (err, result) => {
        if (err) return res.json(err);
        return res.json(result);
    })
})

app.post('/product_list', (req, res) => {
    const sql = "INSERT INTO product_list(Product_Id,Product_Name,Product_Price,Stock_Status) VALUES(?)";
    const values = [
        req.body.productId,
        req.body.productName,
        req.body.price,
        req.body.stockStatus,
    ]
    connection.query(sql, [values], (err, result) => {
        if (err) return res.json(err);
        return res.json(result);
    })
})


app.post('/inward_details', (req, res) => {
    const sql = "INSERT INTO inward_details(Product_Id,Date,Product_Name,No_of_Product) VALUES(?)";
    const values = [
        req.body.productId,
        req.body.date,
        req.body.productName,
        req.body.numProduct,
    ]
    connection.query(sql, [values], (err, result) => {
        if (err) return res.json(err);
        return res.json(result);
    })
})

app.post('/outward_details', (req, res) => {
    const sql = "INSERT INTO outward_details(Product_Id,Date,Product_Name,No_of_Product) VALUES(?)";
    const values = [
        req.body.productId,
        req.body.date,
        req.body.productName,
        req.body.numProduct,
    ]
    connection.query(sql, [values], (err, result) => {
        if (err) return res.json(err);
        return res.json(result);
    })
})

app.delete('/inwarddelete/:id', (req, res) => {
    const sql = "DELETE FROM inward_details WHERE Product_Id=?";
    const id = req.params.id;
    connection.query(sql, [id], (err, result) => {
        if (err) return res.json(err);
        return res.json(result);
    })
})

app.delete('/outwarddelete/:id', (req, res) => {
    const sql = "DELETE FROM outward_details WHERE Product_Id=?";
    const id = req.params.id;
    connection.query(sql, [id], (err, result) => {
        if (err) return res.json(err);
        return res.json(result);
    })
})



app.delete('/delete/:id', (req, res) => {
    const sql = "DELETE FROM customers_details WHERE id=?";
    const id = req.params.id;
    connection.query(sql, [id], (err, result) => {
        if (err) return res.json(err);
        return res.json(result);
    })
})

app.delete('/productlistdelete/:id', (req, res) => {
    const sql = "DELETE FROM product_list WHERE id=?";
    const id = req.params.id;
    connection.query(sql, [id], (err, result) => {
        if (err) return res.json(err);
        return res.json(result);
    })
})


app.listen(3001, function () {
    console.log('App Listening on port 3001');
    connection.connect(function (err) {
        if (err) throw err;
        console.log('Database connected!');
    })
});
