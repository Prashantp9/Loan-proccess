const router = require("express").Router();
const Detail = require("../models/Detail")
const Bdetail = require("../models/BusinessD")
const Loandetail = require("../models/Loan")

router.get("/usertest", (req,res)=>{
    res.send("user test successfull");
})

router.post("/usertestpost",(req,res)=>{
    const user = req.body.user;
    res.send("your username is: "+user)
})


// for adding personal information api is 
// http://localhost:5000/api/user/adddetails
router.post("/adddetails", async (req, res) => {
        try {
            const { first_name, last_name, age, Phone_number, Email } = req.body;

            const detail = new Detail({
                first_name,
                last_name,
                age,
                Phone_number,
                Email,
            });
            const saveddetail = await detail.save();
            res.json(saveddetail);
        } catch (error) {
            console.error(error);
            res.status(500).send("it's an internal error ");
        }
    }
);

// http://localhost:5000/api/user/businessdetails
router.post("/businessdetails", async (req, res) => {
    try {
        const { Business_name, Gst_number,address } = req.body;

        const BusinessD = new Bdetail({
            Business_name,
            Gst_number,
            address,
            
        });
        const saveddetail = await BusinessD.save();
        res.json(saveddetail);
    } catch (error) {
        console.error(error);
        res.status(500).send("it's an internal error ");
    }
}
);



// http://localhost:5000/api/user//loandetails
router.post("/loandetails", async (req, res) => {
    try {
        const { Loan_amount,interest_rate,Loan_tenure} = req.body;

        const LoanD = new Loandetail({
            Loan_amount,
            interest_rate,
            Loan_tenure  
        });
        const saveddetail = await LoanD.save();
        res.json(saveddetail);
    } catch (error) {
        console.error(error);
        res.status(500).send("it's an internal error ");
    }
}
);


// for fetching personal details of applicants http://localhost:5000/api/user/fetchalldetails
try {
    router.get("/fetchalldetails", async (req, res) => {
        const details = await Detail.find();
        res.json(details);
    });
} catch (error) {
    console.error(error.message);
    res.status(500).send("internal server error");
}

//  create post to saved the details in mongodb server  req post"api/details/adddetails" .Login required
module.exports = router;