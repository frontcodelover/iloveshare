import {configureStore} from '@reduxjs/toolkit';
import linkReducer from '../feature/link.slice';

export default configureStore({
  reducer: {
    link: linkReducer,
   
  },
});
