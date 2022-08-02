import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../feature/cake/cakeSlice";
import iceCreamReducer  from "../feature/Icecream/icecreamSlice";
import userReducer  from "../feature/user/userSlice";
// const reduxLogger = require("redux-logger");
// const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: iceCreamReducer,
    user: userReducer
  },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
