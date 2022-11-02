import { createSlice } from '@reduxjs/toolkit';

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
