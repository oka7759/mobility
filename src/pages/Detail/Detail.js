import React from 'react';
import styled from 'styled-components';

const Detail = () => {
  return (
    <DetailBox>
      <DetailImg />
    </DetailBox>
  );
};

export default Detail;
const DetailBox = styled.div`
  width: 100%;
`;
const DetailImg = styled.div`
  width: 100%;
  height: 205px;
`;
