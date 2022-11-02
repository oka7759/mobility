import React from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme';

const MainItem = ({ buckets }) => {
  console.log(buckets);

  return (
    buckets &&
    buckets.map(item => {
      const { attribute, amount, id } = item;
      return (
        <MainItemBox key={`cars` + id}>
          <MainItemTextBox>
            <h3>
              {attribute.brand}
              <br />
              {attribute.name}
            </h3>
            <p>
              {CLASS_TYPE[attribute.segment]}/ {FUEL_TYPE[attribute.fuelType]}
              <br />월 {amount}만원 부터
            </p>
          </MainItemTextBox>

          <MainItemImgBox imageUrl={attribute.imageUrl}>
            <NewBadge>신규</NewBadge>
          </MainItemImgBox>
        </MainItemBox>
      );
    })
  );
};

export default MainItem;

const MainItemBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${theme.mainBlack};
`;
const MainItemTextBox = styled.div`
  width: calc(50% - 40px);
  height: 80px;
  margin: 20px 19px;
  h3 {
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
  }
  p {
    margin-top: 8px;
    font-size: 12px;
    line-height: 15px;
    font-weight: 500;
  }
`;
const MainItemImgBox = styled.div`
  position: relative;
  width: calc(50% - 40px);
  height: 80px;
  margin: 20px;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
`;

const NewBadge = styled.span`
  position: absolute;
  right: 0;
  top: 0;
  transform: translateY(-50%);
  font-size: 12px;
  line-height: 14px;
  font-weight: 700;
  text-align: center;
  padding: 4px 10px;
  width: 52px;
  background-color: ${theme.mainBlue};
  border-radius: 42px;
  color: white;
`;
const CLASS_TYPE = { E: '대형', D: '중형', C: '소형', SUV: 'SUV' };
const FUEL_TYPE = { gasoline: '가솔린', ev: '전기', hybrid: '하이브리드' };
