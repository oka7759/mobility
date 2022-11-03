import React from 'react';
import theme from '../styles/theme';
import styled from 'styled-components';
import back from '../assets/images/back.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const checkPage = useSelector(state => state.checkPage.value);

  return (
    <HeaderBox>
      <HeaderTitle>
        <Link to="/">{!checkPage && <HeaderBackBtn />}</Link>
        {checkPage ? '전체차량' : '차량상세'}
      </HeaderTitle>
    </HeaderBox>
  );
};

export default Header;

const HeaderBox = styled.div`
  width: 100%;
  border-bottom: 1px solid ${theme.mainBlack};
`;

const HeaderTitle = styled.h1`
  font-size: 17px;
  font-weight: 700;
  color: ${theme.mainBlack};
  line-height: 60px;
  text-align: center;
  position: relative;
`;
const HeaderBackBtn = styled.div`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  background-image: url(${back});
  background-position: center;
  background-size: cover;
`;
