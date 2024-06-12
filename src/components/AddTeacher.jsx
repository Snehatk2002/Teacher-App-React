import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const AddTeacher = () => {
    const [data, setdata] = useState(
        {
            "teacherid":"",
            "teachername":"",
            "emailid":"",
            "mobile":"",
            "address":"",
            "salary":"",
            "subject":""
        }
    )
    const inputHandler=(event)=>{
        setdata({ ...data,[event.target.name]: event.target.value})
      }
      const readValue=()=>{
          console.log(data)
          axios.post("http://localhost:8080/add",data).then(
              (response)=>{
                  console.log(response.data)
                  if (response.data.status=="success")
                   {
                      alert("SUCCESSFULLY ADDED")
                  } else {
                      alert("ERROR")
                  }
              }
          ).catch()
          
        }
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">TEACHER ID</label>
                            <input type="text" className="form-control" name='teacherid' value={data.teacherid} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">TEACHER NAME </label>
                            <input type="text" className="form-control" name='teachername' value={data.teachername} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">EMAIL ID</label>
                            <input type="text" className="form-control"  name='emailid' value={data.emailid} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">MOBILE NO</label>
                            <input type="text" className="form-control" name='mobile' value={data.mobile} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">ADDRESS</label>
                           <textarea name="address" id="" cols="30" rows="10" className="form-control" value={data.address} onChange={inputHandler}></textarea>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">SALARY</label>
                            <input type="text" className="form-control" name='salary' value={data.salary} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">SUBJECT</label>
                            <input type="text" className="form-control" name='subject' value={data.subject} onChange={inputHandler} />
                        </div>
                        <center>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button class="btn btn-success" onClick={readValue}>SUBMIT</button>
                        </div>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddTeacher