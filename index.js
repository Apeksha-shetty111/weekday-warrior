import  express from "express";
const app = express();
const port = 3000;


app.get("/", (req, res) =>{
    const today = new Date();
    let day = today.getDay();

    let type="a weekday"
    let adv="its time to work"

    if(day===0||day===6){
        type="its a weekend"
        adv="lets party"
    }

    res.render("index.ejs", {
    daytype: type,
    advice:adv,
});

});

app.listen(port,()=>{
    console.log("the server is on");
})