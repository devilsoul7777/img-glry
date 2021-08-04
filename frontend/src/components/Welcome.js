import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

const Welcome = () => (
  <Jumbotron>
    <h1>Image Gallery</h1>
    <p>
      This is a simple application that retrieves photos using unsplash API.
    </p>
    <p>
      <Button color="primary" href="https://unsplash.com" target="_blank">
        Learn More
      </Button>
    </p>
  </Jumbotron>
);

export default Welcome;
