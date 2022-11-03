import React from 'react';
import styled from 'styled-components';

const Kakao = ({ imageUrl, amount, brand, name, params }) => {
  const shareKakaoLink = () => {
    window.Kakao.Link.createCustomButton({
      container: '#kakao-link-btn',
      templateId: 85308,
      templateArgs: {
        img: imageUrl,
        amount: amount.toLocaleString('ko-KR'),
        brand: brand,
        name: name,
        url: `detail/${params}`,
      },
    });
  };

  const onShareKakaoClick = () => {
    shareKakaoLink();
  };

  return (
    <KakaoBtn id="kakao-link-btn" onClick={onShareKakaoClick}>
      카카오
    </KakaoBtn>
  );
};

export default Kakao;
const KakaoBtn = styled.button`
  height: 50px;
  background-color: rgb(255, 222, 50);
  color: rgb(55, 27, 27);
  border-radius: 10px;
  padding: 0px 10px;
  font-weight: 800;
`;
