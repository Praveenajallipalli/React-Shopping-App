var express = require('express');
var cors = require('cors');
var mongoClient = require('mongodb').MongoClient;

var connectionString = 'mongodb://127.0.0.1:27017/';

const app = express();
app.use(cors());
app.use(express.urlencoded({
    extended:true
}))
app.use(express.json());

app.get("/",async (req,res)=>{
    await mongoClient.connect(connectionString).then(async (client)=>{
        console.log("Connected to DB");

        const db = client.db("reactdb");
        const doc = db.collection("tblusers")
        const data = await doc.find({}).toArray();
        console.log(data);
        res.send(data);
    })

    // const client = await mongoClient.connect(connectionString);
    // console.log("Connection made..")
    // const db = client.db("reactdb");
    // const doc = db.collection("tblusers")
    // const data = await doc.find({}).toArray();
    // console.log(data);
    // res.send(data);
})

app.post("/rgusr",(req,res)=>{
    var userdetails = {
        UserId: req.body.UserId,
        UserName: req.body.UserName,
        Password: req.body.Password,
        Age: parseInt(req.body.Age),
        Mobile: req.body.Mobile,
        Subscribed: (req.body.Subscribed=="true")?true:false
    }
    mongoClient.connect(connectionString)
    .then((client)=>{
        var database = client.db("reactdb");
        var colc = database.collection("tblusers");
        colc.insertOne(userdetails);
        res.redirect("/");
    })
    .catch(err=>{
        console.log(err);
    })
})

app.listen(4000, () => {
    console.log("App Started..")
});