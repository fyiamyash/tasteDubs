const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const { Admin, Menu } = require('./db.js');
const app = express();
const port = 3000;

app.use(express.json());

const adminScretkey = "fromtasteDubs2017$$"
const generateToken = (username) => {
    const token = jwt.sign({ username }, adminScretkey, { expiresIn: '1h' });
    return token;
};

const authAdminJwt = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const payload = authHeader.split(' ')[1];
    jwt.verify(payload, adminScretkey, (error, user) => {
        if (error) {
            console.log(error);
        }
        else {
            req.user = user;
            next();
        }
    })
}

    app.get('/me', (req, res) => {
        res.send("hello from the serves");
    })

    app.post('/adminSignUp', async (req, res) => {
        const { username, password } = req.body;
        const userAlready = await Admin.findOne({ username });
        if (userAlready) {
            res.status(403).json({ message: "user Already exist" });
        }
        else {
            const newAdmin = new Admin({ username, password });
            await newAdmin.save();
            res.json({ message: "admin created successfully" });
        }
    })
    //admin route login
    app.post('/adminLogIn', async (req, res) => {
        const { username, password } = req.headers;
        const admin = await Admin.findOne({ username, password });
        if (admin) {
            const token = generateToken(username);
            res.json({ message: "logged in successfully", token: token });
        } else {
            res.status(403).json({ message: "invalid username or passwrod" });
        }
    });

    // admin route for post Menu

    app.post('/addMenu', authAdminJwt, async (req, res) => {
        const menu = new Menu(req.body)
        await menu.save();
        res.json({message:"item added Successfully"});
    });

    //admin route to get menu
    app.get('/menu',async (req,res)=>{
        const menu = await Menu.find({});
        if(menu)
        {
            res.json({menu});
        }
        else{
            res.sendStatus(403);
        }
    });

    //admin to delete item
    app.delete('/delete/:itemId',authAdminJwt,async (req,res)=>{
        const itemId = req.params.itemId;
        const delItem = await Menu.findByIdAndDelete(itemId);
        if(delItem)
        {
            res.json({message:"Item deleted successfully"});
        }
        else{
            res.status(403).json({message})
        }
    });
    //connecting moongodb with our server
    mongoose.connect("mongodb+srv://yashmeshram786:vpA4pYOQA2C7Ibmh@cluster0.wdy0ita.mongodb.net/", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: "TasteDubs"
    });

    app.listen(port, () => {
        console.log(`app is running in port ${port}`);
    })
