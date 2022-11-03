import React, { useEffect, useCallback } from 'react';
import Category from './components/Category';
import MainItem from './components/MainItem';
import Spin from '../../components/Spin';
import { useDispatch, useSelector } from 'react-redux';
import { getCarList } from '../../api/api';
import {
  getBuckets,
  complet,
  nowLoading,
  isMain,
} from '../../store/productReducer';

const Main = () => {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.filters.value);
  const loading = useSelector(state => state.loading.value);

  const fetchData = useCallback(async () => {
    dispatch(complet());
    await getCarList(filters)
      .then(({ data }) => {
        dispatch(getBuckets(data.payload));

        dispatch(nowLoading());
      })
      .catch(e => {
        console.log(e);
      });
  }, [filters]);

  useEffect(() => {
    fetchData();
    dispatch(isMain());
  }, [filters]);

  return (
    <>
      <Category /> {!loading ? <Spin /> : <MainItem />}
    </>
  );
};

export default Main;
