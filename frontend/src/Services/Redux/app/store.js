import {configureStore} from '@reduxjs/toolkit';
import linkReducer from '../feature/link.slice';
import userReducer from '../feature/user.slice';
import allUsersReducer from '../feature/allUsers.slice';

export default configureStore({
  reducer: {
    link: linkReducer,
    user: userReducer,
    allUsers: allUsersReducer,
  },
});