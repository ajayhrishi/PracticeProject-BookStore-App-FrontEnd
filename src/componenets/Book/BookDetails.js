import { Box, Button, Checkbox, FormControlLabel, FormGroup, FormLabel, TextField } from "@mui/material";
import axios from "axios";
import React, {useEffect, useState} from "react"
import { useNavigate, useParams } from "react-router-dom"

const BookDetails = ()=>{
 const id = useParams().id;
 const [inputs, setInputs] = useState({})
 const [checked, setCheck]= useState(false)
 const history = useNavigate();
 console.log(id);
  useEffect(()=>{
    const fetchHandler = async()=>{
      await axios.get(`https://book-store-backend-n1sr.onrender.com/getBookbyID/${id}`).then(res=>res.data).then(data=>{setInputs(data.book); setCheck(data.book.available)});
    }
    fetchHandler();
  },[id])

  const handleSubmit = (e) =>{
    e.preventDefault();
    sendRequest().then(()=>history('/AllBooks'));

  }
  const handleChange = (e) =>{
    e.preventDefault();
    setInputs((prevState)=> ( {...prevState,[e.target.name]:e.target.value}))
  }

  const sendRequest = async() =>{
    axios.put(`https://book-store-backend-n1sr.onrender.com/updateById/${id}`,{
      ...inputs,available:checked
    }).then(res=>res.data)

  }

return <div>
  {inputs && (
    <form onSubmit={handleSubmit}>
      <Box display="flex" flexDirection="column" justifyContent={'center'} maxWidth={700} alignSelf={'center'} marginLeft={'auto'} marginRight={'auto'} marginTop={20}>
      <FormLabel>Name</FormLabel>
      <TextField value = {inputs.name} onChange={handleChange} type='String' margin='normal' fullWidth variant='outlined' name="name"/>
      <FormLabel>Author</FormLabel>
      <TextField value = {inputs.author} onChange={handleChange} type='String' margin='normal' fullWidth variant='outlined' name="author"/>
      <FormLabel>Description</FormLabel>
      <TextField value = {inputs.description} onChange={handleChange} type='String' margin='normal' fullWidth variant='outlined' name="description"/>
      <FormLabel>ImageLink</FormLabel>
      <TextField value = {inputs.image} onChange={handleChange} type='String' margin='normal' fullWidth variant='outlined' name="image"/>
      <FormLabel>Price</FormLabel>
      <TextField value = {inputs.price} onChange={handleChange} type='Number' margin='normal' fullWidth variant='outlined' name="price"/>
      
      <FormGroup>
      <FormControlLabel value = {inputs.available} control = {<Checkbox checked={checked} onChange={()=>setCheck(!checked)}/>} label= "Available"/>
      </FormGroup>


      <Button variant='contained' type='submit'>Add Book</Button>
      </Box>
    </form>
    )}
</div>
}

export default BookDetails;