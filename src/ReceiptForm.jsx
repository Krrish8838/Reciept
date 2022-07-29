import React, { useState ,useEffect} from "react";
import ReceiptTable from "./ReceiptTable";
import "./ReceiptForm.css";




const ReceiptForm = () => {

  const myFunction = () => {
    
    alert("Are you sure you want to cancel");
  };

  useEffect(() => {
    const keyDownHandler = event => {
      console.log('User pressed: ', event.key);

      if (event.key === 'Escape') {
        event.preventDefault();

      
        myFunction();
      }
    };

    document.addEventListener('keydown', keyDownHandler);

   
    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, []);


  



    let [valid,setValidation]=useState(false)

    
  let [data, setData] = useState([
    {
      date: "",
      amount: "",
      payment: "",
      remark: "",
      
    }
  ]);

  let [receipt, setReceipt] = useState([]);
 

  let handleChange = (e) => {
    let { name, value } = e.target;

    setData({ ...data, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
     let {amount,date,payment}=data
      
     if (amount && date && payment){
        
        let newdata={...data,id: new Date().getTime().toString() }
      
        setReceipt([...receipt, newdata]);
    
        setData({ date: "", amount: "", payment: "", remark: "" });
        setValidation(false)
        
     }else{
      
      setValidation(true)
     }

 
  };

 

 

  return (
    <>
      <div className="container ">
        <div className="row py-1 d-flex justify-content-center ">
          <div
            className="col-sm-10 p-4 "
            style={{ backgroundColor: "lightgrey" }}
          >
            <h5 className="text-decoration-underline">Receipt Details</h5>
            <form onSubmit={handleSubmit}>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">
                  Date<span className="requiredmark">*</span>
                </label>
                <div className="col-sm-4">
                  <input
                    autoComplete="off"
                    type="text"
                    name="date"
                    value={data.date}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter Date"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">
                  Amount<span className="requiredmark">*</span>
                </label>
                <div className="col-sm-8">
                  <input
                    autoComplete="off"
                    type="number"
                    name="amount"
                    value={data.amount}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter Amount (in INR)"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">
                  Payment Mode<span className="requiredmark">*</span>
                </label>
                <div className="col-sm-6">
                  <select
                    className="form-control form-select"
                    name="payment"
                    value={data.payment}
                    onChange={handleChange}
                  >
                    <option>Cash</option>
                    <option>Online</option>
                    <option>Cheque</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Remark</label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    autoComplete="off"
                    name="remark"
                    value={data.remark}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter Remark"
                  />
                  {valid?<small className="requiredmark">Enter all the Required field *</small>:null }
                </div>
                
              
              </div>
              

              <div className="form-group row">
                <div className="col-3 offset-md-8 d-flex justify-content-between">
                  <button type='reset'
                    className="btn btn-outline-danger"
                    onClick={()=>{alert("Are you  sure you want to cancle")}}
                    
                  >
                    Cancel<br/>ESC
                  </button>
                  <button className="btn btn-success " type="submit">
                    Submit<br/>S
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <ReceiptTable receiptdetails={receipt} />
    </>
  );
};

export default ReceiptForm;
