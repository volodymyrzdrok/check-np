import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const defaultState = { items: [] };

const appSlice = createSlice({
  name: 'history',
  initialState: defaultState,
  reducers: {
    addToHistory({ items }, { payload }) {
      items = [payload, ...items];
    },
    removeHistory(state, _) {
      state = defaultState;
    },
  },
});

const persistConfig = {
  key: 'items',
  storage,
};
export const appReducer = persistReducer(persistConfig, appSlice.reducer);

export const { addToHistory, removeHistory } = appSlice.actions;
