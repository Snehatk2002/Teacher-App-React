import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewTeacher = () => {
    const [data, changedata] = useState([])
    const fetchData=()=>{
        axios.post("http://localhost:8080/view",data).then(
            (response)=>{
                console.log(response.data)
                changedata(response.data)
            }
        ).catch(
            (error)=>{
                console.log(error.message)
            }
        ).finally()

    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <Navbar/>
            <div className="conatiner">
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
                                {data.map(
                                    (value,index)=>{
                                        return <tr>
                                        <th scope="row">{value.teacherid}</th>
                                        <td>{value.teachername}</td>
                                        <td>{value.emailid}</td>
                                        <td>{value.mobile}</td>
                                        <td>{value.address}</td>
                                        <td>{value.salary}</td>
                                        <td>{value.subject}</td>
                                    </tr>
                                    }
                                )}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewTeacher