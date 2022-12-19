
import React from 'react'
import {useState} from 'react';
import './App.css';

function App() {
    const [inputarr,
        setInputarr] = useState([])

    const [inputdata,
        SetInputdata] = useState({fname: "", lname: "", gender: "", city: "", mobileNo: ""})

    function changehandle(e) {

        SetInputdata({
            ...inputdata,
            [e.target.name]: e.target.value
        })

    }

    let {fname, lname, gender, city, mobileNo} = inputdata;
    
    function changhandle() {
        setInputarr([
            ...inputarr, {
                fname,
                lname,
                gender,
                city,
                mobileNo
            }
        ])

        console.log(inputdata, "input data what we Enter")
        SetInputdata({fname: "", lname: "", gender: "", city: "", mobileNo: ""})

    }
    let delethandle =(i)=>{
        let newdataArr=[...inputarr]
        newdataArr.splice(i,1)
        setInputarr(newdataArr)
    }
  
    return (
      
        <div className="App">
          <br/>
            <input
                type="text"
                autoComplete='off'
                name='fname'
                value={inputdata.fname}
                onChange={changehandle}
                placeholder="First Name"/>
            <input
                type="text"
                autoComplete='off'
                name='lname'
                value={inputdata.lname}
                onChange={changehandle}
                placeholder="Last Name"/>
                <input
                type="text"
                autoComplete='off'
                name='gender'
                value={inputdata.gender}
                onChange={changehandle}
                placeholder="Gender"/>
                <input
                type="text"
                autoComplete='off'
                name='city'
                value={inputdata.city}
                onChange={changehandle}
                placeholder="City"/>
                <input
                type="text"
                autoComplete='off'
                name='mobileNo'
                value={inputdata.mobileNo}
                onChange={changehandle}
                placeholder="Mobile Number"/>

            <button onClick={changhandle}>Add It
            </button><br/>
            <br/>
            <br/>
            

            <table border={1} width="30%" cellPadding={10}>
                <tbody>
                    <tr>
                        <td>Sr.No</td>
                        <th>First Name </th>
                        <th>Last Name</th>
                        <th>Gender</th>
                        <th>City</th>
                        <th>Mobile Number</th>
                        <th>Options</th>
                    </tr>
                    {inputarr.length < 1 ?
                        <tr>
                            <td colSpan={7}>NO data Enter yet !</td>
                        </tr>:
                    inputarr.map((info, ind) => {
                        return (
                            <tr key={ind}>
                                <td>{ind + 1}</td>
                                <td>{info.fname}</td>
                                <td>{info.lname}</td>
                                <td>{info.gender}</td>
                                <td>{info.city}</td>
                                <td>{info.mobileNo}</td>
                                <td><button onClick={()=>delethandle(ind)}>Delete</button></td>
                            </tr>
                        )
                    })
}

                </tbody>
            </table>
        </div>
    );
}

export default App;
