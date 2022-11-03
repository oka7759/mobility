import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {
  getDetailList,
  complet,
  nowLoading,
  isSub,
} from '../../store/productReducer';
import DetailContents from './components/DetailContents';
import Spin from '../../components/Spin';
import { getCarDetail } from '../../api/api';

const Detail = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.loading.value);
  const detailList = useSelector(state => state.detailList.value);

  const fetchData = () => {
    dispatch(complet());
    getCarDetail()
      .then(({ data }) => {
        dispatch(nowLoading());
        dispatch(getDetailList(data.payload));
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    fetchData();
    dispatch(isSub());
  }, []);

  return !loading ? (
    <Spin />
  ) : (
    <DetailBox>{detailList.length && <DetailContents />}</DetailBox>
  );
};

export default Detail;
const DetailBox = styled.div`
  width: 100%;
  position: relative;
`;
