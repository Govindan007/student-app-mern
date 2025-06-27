var express=require("express");
require("./db");
var student = require("./model")
var cors=require("cors");
var app = express();
//middleware
app.use(express.json());
var port=3004;
app.use(cors());


app.post('/',(req,res)=>{
    try {
        student(req.body).save();
        res.send("Student data saved sucessfully")
    } catch (error) {
        res.send(error);
    }
})

// to get data from db
app.get('/',async(req,res)=>{
    try {
        var data = await student.find();
        res.send(data)
    } catch (error) {
        res.send(error)
    }
})


// to delete
app.delete('/:id',async(req,res)=>{
    try {
        await student.findByIdAndDelete(req.params.id);
        res.send("Deleted sucessfully")
    } catch (error) {
        res.send(error)
    }
})

// to update
app.put("/:id",async(req,res)=>{
    try {
        await student.findByIdAndUpdate(req.params.id, req.body);
        res.send("Updated");
    } catch (error) {
        res.send(error);
    }
})

app.listen(port,()=>{
    console.log(`server is running in ${port}`);
});

