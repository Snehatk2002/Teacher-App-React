import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const SearchTeacher = () => {
    const [data, setdata] = useState(
        {
            "teacherid": " "
        }
    )
    const [result, setResult] = useState([])

    const deleteCourse = (id) => {
        let input={ "_id":id}
        axios.post("http://localhost:8080/delete",input).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("SUCCESSFULLY DELETED")
                } else {
                    alert("ERROR IN DELETION")
                }
            }
        ).catch()
    }

    const inputHandler = (event) => {
        setdata({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8080/search", data).then(
            (response) => {
                console.log(response.data)
                setResult(response.data)
            }
        ).catch(
            (error) => {
                console.log("error")
            }
        ).finally()
    }

    return (
        <div>
            <Navbar />
            <div className="conatiner">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">TEACHER ID</label>
                                <input type="text" className="form-control" name='teacherid' value={data.teacherid} onChange={inputHandler} />
                            </div>
                            <center>
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <button class="btn btn-info" onClick={readValue}>SEARCH</button>
                                </div>
                            </center>
                            <div className="row">
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">TEACHER ID</th>
                                                <th scope="col">TAECHER NAME</th>
                                                <th scope="col">EMAIL ID</th>
                                                <th scope="col">MOBILE NO</th>
                                                <th scope="col">ADDRESS</th>
                                                <th scope="col">SALARY</th>
                                                <th scope="col">SUBJECT</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {result.map(
                                                (value, index) => {
                                                    return <tr>
                                                        <th scope="row">{value.teacherid}</th>
                                                        <td>{value.teachername}</td>
                                                        <td>{value.emailid}</td>
                                                        <td>{value.mobile}</td>
                                                        <td>{value.address}</td>
                                                        <td>{value.salary}</td>
                                                        <td>{value.subject}</td>
                                                        <td>
                                                        <button class="btn btn-danger" onClick={()=>{deleteCourse(value._id)}}>DELETE</button>
                                                    </td>
                                                    </tr>
                                                }
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchTeacher