import { createSlice } from '@reduxjs/toolkit';

// 로딩처리
export const loading = createSlice({
  name: 'loading',
  initialState: { value: false },
  reducers: {
    nowLoading: state => {
      state.value = true;
    },
    complet: state => {
      state.value = false;
    },
  },
});
export const { complet, nowLoading } = loading.actions;
export const loadingReducer = loading.reducer;

// 리스트버켓
export const buckets = createSlice({
  name: 'buckets',
  initialState: { value: [] },
  reducers: {
    getBuckets: (state, action) => {
      state.value = [...action.payload];
    },
  },
});
export const { getBuckets } = buckets.actions;
export const bucketsReducer = buckets.reducer;

// 검색 파라미터
export const filters = createSlice({
  name: 'filters',
  initialState: { value: { segment: '' } },
  reducers: {
    setFilters: (state, action) => {
      state.value.segment = action.payload;
    },
  },
});
export const { setFilters } = filters.actions;
export const filtersReducer = filters.reducer;

// 디테일 리스트
export const detailList = createSlice({
  name: 'detailList',
  initialState: { value: [] },
  reducers: {
    getDetailList: (state, action) => {
      state.value = [...action.payload];
    },
  },
});
export const { getDetailList } = detailList.actions;
export const detailListReducer = detailList.reducer;

// 디테일 리스트
export const checkPage = createSlice({
  name: 'checkPage',
  initialState: { value: true },
  reducers: {
    isMain: state => {
      state.value = true;
    },
    isSub: state => {
      state.value = false;
    },
  },
});
export const { isMain, isSub } = checkPage.actions;
export const checkPageReducer = checkPage.reducer;
