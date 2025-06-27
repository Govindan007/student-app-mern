import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Submission = (props) => {
  var navigate = useNavigate()
  var location = useLocation()
  console.log("loc", location.state);
  useEffect(()=>{
    if(location.state!==null){
      setInp({...inp, name: location.state.name,
                      age: location.state.age,
                      course: location.state.course,
                      place: location.state.place
      })
    }
  },[])

  var[inp,setInp]=useState({name:"", age:"", course:"", place:""})
  const inputHandler=(e)=>{
    setInp({...inp, [e.target.name]:e.target.value});
    console.log(inp)
  };
  const submitHandler=()=>{
    if(location.state!==null){
      axios.put(`http://localhost:3004/${location.state._id}`, inp)
      .then((res)=>{
        console.log(res)
        alert(res.data)
        navigate('/')
      })
      .catch((err)=>{
        console.log(err)
      })
    }
    else{
      axios.post("http://localhost:3004/", inp)
    .then((res)=>{
      console.log(res)
      alert(res.data)
      navigate("/")
    })
    .catch((err)=>{
      console.log(err);
    })
    } 
  };
  


  return (
    <div id="reg">
      <Typography variant='h3'>Registration</Typography><br />
      <TextField variant='outlined' label="Name:" name="name" value={inp.name} required onChange={inputHandler}/><br />
      <TextField variant='outlined' label="Age:" name="age" value={inp.age} required onChange={inputHandler}/><br />
      <TextField variant='outlined' label="Course:" name="course" value={inp.course} required onChange={inputHandler}/><br />
      <TextField variant='outlined' label="Place:" name="place" value={inp.place} required onChange={inputHandler}/><br />
      <Button variant='outlined' style={{borderColor:"lavender"}} onClick={submitHandler}>ADD</Button>
    </div>
  )
}

export default Submission
