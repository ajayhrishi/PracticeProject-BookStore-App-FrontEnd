import React, {useState} from 'react'
import { Box, Button, FormLabel, TextField, FormGroup, FormControlLabel, Checkbox } from '@mui/material'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const AddBook = () => {
  const history = useNavigate();
   const [inputs, setInputs] = useState({
    name:'', 
    author:'',
    price:'',
    description:'',
    image:'',})
    const [checked, setCheck]= useState(false)
    const handleChange = (e)=>{
      setInputs((prevState)=> ( {...prevState,[e.target.name]:e.target.value}))
    }
    const handleSubmit = (e) =>{
      e.preventDefault();
      console.log(inputs);
      sendRequest().then(()=>history('/AllBooks'));
    }


    const sendRequest = async() =>{
      axios.post('http://127.0.0.1:5000/addBook',{
        name: String(inputs.name),
        author: String(inputs.author), 
        price:Number(inputs.price),
        description:String(inputs.price),
        image:String(inputs.image),
        available: Boolean(checked)
      }).then(res=>res.data)

    }

  return (
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
  )
}

export default AddBook
