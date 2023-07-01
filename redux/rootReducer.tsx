import { combineReducers } from "@reduxjs/toolkit";
import devicesReducer from "./reduxDevices";
// Import các reducer khác nếu có

const rootReducer = combineReducers({
  devices: devicesReducer,
  // Import và thêm các reducer khác nếu có
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
