import React from 'react';
import { Typography, Box, Container } from '@mui/material';

const AboutUs = () => {
  return (
    <Container maxWidth="md">
      <Box mt={5}>
        <Typography variant="h3" component="h1" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to our Book Store! We are passionate about connecting readers with their next favorite book.
        </Typography>
        <Typography variant="body1" paragraph>
          Our mission is to provide a wide range of books, from classic literature to the latest bestsellers,
          ensuring there's something for every reader.
        </Typography>
        <Typography variant="body1" paragraph>
          We believe in the power of books to inspire, educate, and entertain. Whether you're a seasoned reader or
          just starting your reading journey, we're here to help you discover new stories and authors.
        </Typography>
        <Typography variant="body1" paragraph>
          Feel free to explore our collection and don't hesitate to reach out if you have any questions or need
          assistance. Happy reading!
        </Typography>
      </Box>
    </Container>
  );
}

export default AboutUs;