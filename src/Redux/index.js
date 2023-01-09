import { configureStore } from '@reduxjs/toolkit';
import logger from "redux-logger";
import counter from './counter';
import users from './users';
const store = configureStore({
  reducer: {
    counter,
		users,
  },
	middleware: getDefaultMiddleware => {
		if(process.env.NODE_ENV === 'development') {
			return getDefaultMiddleware({ serializableCheck: false }).concat(logger);
		} else {
			return getDefaultMiddleware({ serializableCheck: false });
		}
	},
	devTools: process.env.NODE_ENV === 'development',
})
export default store
