import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Button, Checkbox, FormControlLabel, FormGroup, FormLabel, TextField } from '@mui/material';

const BookDetails = () => {
  // Fetching the details
  const id = useParams().id;
  const [inputs, setInputs] = useState({});
  const [checked, setCheck] = useState(false);

  useEffect(() => {
    const fetchHandler = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:5000/getBookbyID/${id}`);
        setInputs(response.data);
        setCheck(response.data.available || false);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    fetchHandler();
  }, [id]);

  const history = useNavigate();

  const handleChange = (e) => {
    setInputs((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(() => history('/AllBooks'));
  };

  const sendRequest = async () => {
    try {
      const response = await axios.post(`http://127.0.0.1:5000/updateById/${id}`, {
        name: String(inputs.name),
        author: String(inputs.author),
        price: Number(inputs.price),
        description: String(inputs.price),
        image: String(inputs.image),
        available: Boolean(checked),
      });

      return response.data;
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column" justifyContent={'center'} maxWidth={700} alignSelf={'center'} marginLeft={'auto'} marginRight={'auto'} marginTop={20}>
          <FormLabel>Name</FormLabel>
          <TextField value={inputs.name || ''} onChange={handleChange} type="String" margin="normal" fullWidth variant="outlined" name="name" />
          <FormLabel>Author</FormLabel>
          <TextField value={inputs.author || ''} onChange={handleChange} type="String" margin="normal" fullWidth variant="outlined" name="author" />
          <FormLabel>Description</FormLabel>
          <TextField value={inputs.description || ''} onChange={handleChange} type="String" margin="normal" fullWidth variant="outlined" name="description" />
          <FormLabel>ImageLink</FormLabel>
          <TextField value={inputs.image || ''} onChange={handleChange} type="String" margin="normal" fullWidth variant="outlined" name="image" />
          <FormLabel>Price</FormLabel>
          <TextField value={inputs.price || ''} onChange={handleChange} type="Number" margin="normal" fullWidth variant="outlined" name="price" />

          <FormGroup>
            <FormControlLabel
              control={<Checkbox checked={checked} onChange={() => setCheck(!checked)} />}
              label="Available"
            />
          </FormGroup>

          <Button variant="contained" type="submit">
            Update Book
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default BookDetails;