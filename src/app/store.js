import { configureStore } from '@reduxjs/toolkit';
import {
  loadingReducer,
  bucketsReducer,
  filtersReducer,
} from './reducer/productReducer';

export default configureStore({
  reducer: {
    loading: loadingReducer,
    buckets: bucketsReducer,
    filters: filtersReducer,
  },
});
