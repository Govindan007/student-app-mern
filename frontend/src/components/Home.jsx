import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  var navigate = useNavigate()
  const [count, setCount] = useState(0)
  var [stu,setStu]=useState([]);
  useEffect(()=>{
    axios.get("http://localhost:3004/")
    .then((res)=>{
      console.log(res)
      setStu(res.data)
    })
    .catch((error)=>{
      console.log(error)
    });
  },[]);


  const delStu=(id)=>{
    console.log(id);
    axios.delete(`http://localhost:3004/${id}`)
    .then((res)=>{
      console.log(res);
      alert(res.data);
      window.location.reload();
    })
    .chatch((err)=>{
      console.log(err)

    })
  };


  const updateStu=(val)=>{
    console.log(`value=${val}`)
    navigate('/s',{state:val})
  }
// var[inp,setInp]=useState({name:"", age:"", course:"", place:""})
//   const inputHandler=(e)=>{
//     setInp({...inp, [e.target.name]:e.target.value});
//     console.log(inp)
//   };
//   const updStu=(id)=>{
//     axios.post(`http://localhost:3004/${id}`, inp)
//     .then((res)=>{
//       console.log(res)
//       alert(res.data)
//       navigate("/")
//     })
//     .catch((err)=>{
//       console.log(err);
//     })  
//   };

  return (
    <div>
      <TableContainer>
        <Table id="hometable">
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>age</TableCell>
                    <TableCell>course</TableCell>
                    <TableCell>place</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
              {stu.map((val,i)=>{
                return(
                  <TableRow key={i}>
                    <TableCell>{val.name}</TableCell>
                    <TableCell>{val.age}</TableCell>
                    <TableCell>{val.course}</TableCell>
                    <TableCell>{val.place}</TableCell>
                    <TableCell>
                      <Button variant='contained' color='error' onClick={()=>{delStu(val._id)}}>
                        Remove
                      </Button>
                      &nbsp;&nbsp;
                      <Button variant='contained' color='sucess' 
                      onClick={()=>{updateStu(val)}}>
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Home
