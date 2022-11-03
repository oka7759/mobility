import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import styled from 'styled-components';
import Header from './components/Header';
import Detail from './pages/Detail/Detail';

const Router = () => {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default Router;

const Container = styled.div`
  width: 100%;
  max-width: 450px;
  margin: 0 auto;
  background-color: white;
  padding: 10px;
  min-height: 100vh;
`;
