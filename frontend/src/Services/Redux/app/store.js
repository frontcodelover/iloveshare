import {configureStore} from '@reduxjs/toolkit';
import linkReducer from '../feature/link.slice';
import userReducer from '../feature/user.slice';

export default configureStore({
  reducer: {
    link: linkReducer,
    user: userReducer,
  },
});