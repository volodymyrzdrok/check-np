import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const defaultState = {
  history: [
    '20400048799000',
    '20700427580171',
    '3423423034171',
    '20450667513986',
    '20450665795597',
    '20450660409928',
    '59000935721779',
    '20450667500909',
  ],
};

const appSlice = createSlice({
  name: 'app',
  initialState: defaultState,
  reducers: {
    addToHistory(state, action) {
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
