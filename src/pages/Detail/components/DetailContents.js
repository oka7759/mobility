import React from 'react';
import theme from '../../../styles/theme';
import styled from 'styled-components';
import moment from 'moment';
import 'moment/locale/ko';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Kakao from '../../../app/Kakao';

const DetailContents = () => {
  const params = useParams();
  const detailList = useSelector(
    state => state.detailList.value[params.id - 1]
  );
  const { attribute, amount, startDate, insurance, additionalProducts } =
    detailList;
  const { imageUrl, brand, segment, fuelType, name } = attribute;

  return (
    <>
      <DetailImg imageUrl={imageUrl} />
      <DetailTitle>
        <h3>{brand}</h3>
        <h1>{name}</h1>
        <p>월 {amount.toLocaleString('ko-KR')} 원</p>
      </DetailTitle>
      <DetailInfoHead>차량 정보</DetailInfoHead>
      <DetailInfoBody>
        <h1>
          차종<span>{CLASS_TYPE[segment]}</span>
        </h1>
        <h1>
          연료<span>{FUEL_TYPE[fuelType]}</span>
        </h1>
        <h1>
          이용 가능일
          <span>{moment(startDate).format('MM-DD (dd)')} 부터</span>
        </h1>
      </DetailInfoBody>
      <DetailInfoHead>보험</DetailInfoHead>
      <DetailInfoBody>
        {insurance.map((els, idx) => {
          return (
            <h1 key={(els, idx)}>
              {els.name}
              <span>{els.description}</span>
            </h1>
          );
        })}
      </DetailInfoBody>
      <DetailInfoHead>추가상품</DetailInfoHead>
      <DetailInfoBody>
        {additionalProducts.length ? (
          additionalProducts.map((els, idx) => {
            return (
              <h1 key={(els, idx)}>
                {els.name}
                <span>{els.amount.toLocaleString('ko-KR')} 원</span>
              </h1>
            );
          })
        ) : (
          <h3>해당 없음</h3>
        )}
        <Kakao
          imageUrl={imageUrl}
          amount={amount}
          brand={brand}
          name={name}
          params={params.id}
        />
      </DetailInfoBody>
    </>
  );
};

export default DetailContents;
const DetailImg = styled.div`
  width: 100%;
  height: 205px;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
`;

const DetailTitle = styled.div`
  width: 100%;
  padding: 20px;
  h3 {
    font-size: 20px;
    line-height: 25px;
    font-weight: 700;
  }
  h1 {
    font-size: 24px;
    line-height: 29px;
    font-weight: 700;
  }
  p {
    font-size: 17px;
    font-weight: 400;
    line-height: 21px;
    text-align: right;
  }
`;

const DetailInfoHead = styled.h1`
  width: 100%;
  background-color: ${theme.mainBlue};
  padding: 13px 20px;
  font-size: 17px;
  line-height: 21px;
  color: white;
`;

const DetailInfoBody = styled.div`
  width: 100%;
  padding: 13px 20px;
  h1 {
    font-size: 17px;
    line-height: 21px;
    margin-bottom: 27px;
    font-weight: 700;
    span {
      float: right;
      font-size: 17px;
      font-weight: 400;
    }
  }
  h3 {
    font-size: 17px;
    line-height: 30px;
    font-weight: 600;
    text-align: center;
  }
`;
const CLASS_TYPE = { E: '대형', D: '중형', C: '소형', SUV: 'SUV' };
const FUEL_TYPE = { gasoline: '가솔린', ev: '전기', hybrid: '하이브리드' };
