import { useState } from "react";
import "../App.css";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  // personal information
  const [credential,setcredential] = useState({
    first_name:"",
    last_name:"",
    age:"",
    Phone_number:"",
    email:"",

  })
  const [acredential,setacredential] = useState({
    Business_name:" ",
    Gst_number:" ",
    address:" ",
    

  })
  const [bcredential,setbcredential] = useState({
    Loan_amount:" ",
    interest_rate:" ",
    Loan_tenure:" ",
    

  })

  
  const handleonsubmit = async(e)=> {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/user/adddetails", 
    {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body : JSON.stringify({ first_name:credential.first_name,last_name:credential.last_name,age:credential.age,Phone_number:credential.Phone_number,Email:credential.email})
    });
    const json = await response.json()
   
    if(json){
      setcredential({
        first_name:"",
        last_name:"",
        age:"",
        Phone_number:"",
        email:"",
    })
     alert("your form is sucsessfully submited")
    }
  }
  const ahandleonsubmit = async(e)=> {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/user/businessdetails", 
    {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body : JSON.stringify({Business_name:acredential.Business_name,Gst_number:acredential.Gst_number,address:acredential.address,})
    });
    const json = await response.json()
   
    if(json){
      setacredential({
        Business_name:" ",
        Gst_number:" ",
        address:" ",
        
    })
     alert("your form is sucsessfully submited")
    }
  }
  const bhandleonsubmit = async(e)=> {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/user/loandetails", 
    {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body : JSON.stringify({Loan_amount:credential.Loan_amount,interest_rate:credential.interest_rate,Loan_tenure:credential.Loan_tenure,})
    });
    const json = await response.json()
   
    if(json){
      setbcredential({
        Loan_amount:" ",
        interest_rate:" ",
        Loan_tenure:" ",
        
    })
     alert("your form is sucsessfully submited")
    }
  }
  
// onchange values
    const onChange = (e) => {
      setcredential({ ...credential, [e.target.name]: e.target.value })
  
    }
    const aonChange = (e) => {
      setacredential({ ...acredential, [e.target.name]: e.target.value })
  
    }
    const bonChange = (e) => {
      setbcredential({ ...bcredential, [e.target.name]: e.target.value })
  
    }








  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Tab 1
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Tab 2
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Tab 3
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2>Personal infomation</h2>
          <hr />
    <form onSubmit={handleonsubmit}>
    <div className="mb-3 row">
   
    
    <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">first name</label>
  <input type="username" name="first_name" value={credential.first_name}  onChange={onChange} className="form-control" id="exampleFormControlInput1" placeholder="enter your first name"/>
</div>
    
    <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">last name</label>
  <input  name="last_name" value={credential.last_name} onChange={onChange} className="form-control" id="exampleFormControlInput1" placeholder="enter your last name"/>
</div>
    
    <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">age</label>
  <input  name="age" value={credential.age} onChange={onChange} className="form-control" id="exampleFormControlInput1" placeholder="enter your age"/>
</div>
    
    <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">phone number</label>
  <input  name="Phone_number" value={credential.Phone_number} onChange={onChange} className="form-control" id="exampleFormControlInput1" placeholder="enter your ohone number"/>
</div>
    
    <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">email</label>
  <input type={"email"} name="email" value={credential.email} onChange={onChange} className="form-control" id="exampleFormControlInput1" placeholder="enter your mail"/>
</div>
<div className="col-auto">
    <button type="submit" className="btn btn-primary mb-3">Submit</button>
  </div>
   
  </div>
  
</form>
         
          
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>Business Detail</h2>
          <hr />
    <form onSubmit={ahandleonsubmit}>
    <div className="mb-3 row">
   
    
    <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Business Name</label>
  <input type="username" name="Business_name" value={acredential.Business_name}  onChange={aonChange} className="form-control" id="exampleFormControlInput1" placeholder="Business name"/>
</div>
    
    <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Gst number</label>
  <input  name="Gst_number" value={acredential.Gst_number} onChange={aonChange} className="form-control" id="exampleFormControlInput1" placeholder="enter your last name"/>
</div>
    
    <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">adress</label>
  <input  name="address" value={acredential.address} onChange={aonChange} className="form-control" id="exampleFormControlInput1" placeholder="enter address"/>
</div>
    
  
<div className="col-auto">
    <button type="submit" className="btn btn-primary mb-3">Submit</button>
  </div>
   
  </div>
  
</form>
          
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>Loan Application detail</h2>
          <hr />
          <form onSubmit={bhandleonsubmit}>
    <div className="mb-3 row">
   
    
    <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">loan Amount</label>
  <input  name="Loan_amount" value={bcredential.Loan_amount}  onChange={bonChange} className="form-control" id="exampleFormControlInput1" placeholder="Business name"/>
</div>
    
    <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">interest rate</label>
  <input  name="interest_rate" value={bcredential.interest_rate} onChange={bonChange} className="form-control" id="exampleFormControlInput1" placeholder="enter your last name"/>
</div>
    
    <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">loan tenure</label>
  <input  name="Loan_tenure" value={bcredential.Loan_tenure} onChange={bonChange} className="form-control" id="exampleFormControlInput1" placeholder="enter address"/>
</div>
    
  
<div className="col-auto">
    <button type="submit" className="btn btn-primary mb-3">Submit</button>
  </div>
   
  </div>
  
</form>
         
        </div>
      </div>
    </div>
  );
}

export default Tabs;