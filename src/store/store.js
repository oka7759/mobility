import { configureStore } from '@reduxjs/toolkit';
import {
  loadingReducer,
  bucketsReducer,
  filtersReducer,
  detailListReducer,
  checkPageReducer,
} from './productReducer';

export default configureStore({
  reducer: {
    loading: loadingReducer,
    buckets: bucketsReducer,
    filters: filtersReducer,
    detailList: detailListReducer,
    checkPage: checkPageReducer,
  },
});
