import { configureStore } from '@reduxjs/toolkit';

import categorySlice from './active-category-slice';

const store = configureStore({
  reducer: { category: categorySlice.reducer, },
});

export default store;
