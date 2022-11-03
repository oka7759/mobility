import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';
const Facebook = ({ imageUrl, amount, brand, name, params }) => {
  const feed = () => {
    window.FB.ui(
      {
        method: 'feed',
        link: `https://reliable-chaja-b9660d.netlify.app/`,
      },
      function (response) {
        if (response && response.error_message !== '') {
          alert('성공');
        } else {
          alert('취소');
        }
      }
    );
  };
  return <FaceBtn onClick={feed}> 페이스북</FaceBtn>;
};

export default Facebook;
const FaceBtn = styled.button`
  height: 50px;
  background-color: ${theme.mainBlue};
  color: white;
  border-radius: 10px;
  padding: 0px 10px;
  font-weight: 800;
  margin-left: 10px;
`;
