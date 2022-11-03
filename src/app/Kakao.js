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
    <KakaoBtn
      id="kakao-link-btn"
      className="bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
      type="button"
      onClick={onShareKakaoClick}
    >
      카카오
    </KakaoBtn>
  );
};

export default Kakao;
const KakaoBtn = styled.button`
  height: 50px;
  background-color: rgb(255, 222, 50);
  color: rgb(55, 27, 27) !important;
  font-weight: 700;
`;
