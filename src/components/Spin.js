import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';

const Spin = () => {
  return (
    <SpinBox>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <p>Loading...</p>
    </SpinBox>
  );
};

export default Spin;
const SpinBox = styled.div`
  height: 100vh;
  text-align: center;

  padding: 100px;
  p {
    font-size: 20px;
  }
`;
