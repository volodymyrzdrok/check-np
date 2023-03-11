import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const defaultState = {
  history: ['20400048799000', '20700427580171', '3423423034171'],
};

const appSlice = createSlice({
  name: 'app',
  initialState: defaultState,
  reducers: {
    addToHistory(state, action) {
      console.log('action.payload :', action.payload);
      state.history = [action.payload, ...state.history];
    },
    removeHistory(state, _) {
      return (state = defaultState);
    },
  },
});

const persistConfig = {
  key: 'history',
  storage,
};
export const appReducer = persistReducer(persistConfig, appSlice.reducer);
export const selectHistoryPackList = state => state.history;
export const { addToHistory, removeHistory } = appSlice.actions;
