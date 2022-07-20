import {configureStore} from '@reduxjs/toolkit';
import linkReducer from '../Redux/feature/link.slice';
import userReducer from '../Redux/feature/user.slice';

export default configureStore({
  reducer: {
    link: linkReducer,
    user: userReducer,
  },
});