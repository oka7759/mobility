import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCarList } from '../../api/api';
import Category from './components/Category';
import MainItem from './components/MainItem';
import {
  getBuckets,
  complet,
  nowLoading,
} from '../../app/reducer/productReducer';
import Spin from '../../components/Spin';

const Main = () => {
  const dispatch = useDispatch();
  const buckets = useSelector(state => state.buckets.value);
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
  }, [filters]);

  return (
    <>
      <Category /> {!loading ? <Spin /> : <MainItem buckets={buckets} />}
    </>
  );
};

export default Main;
