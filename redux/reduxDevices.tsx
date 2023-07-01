// devicesSlice.ts
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getDatabase, onValue, ref } from "firebase/database";


export interface DeviceData {
  matb: string;
  nametb: string;
  addresstb: string;
  hoatdongtb: string;
  ketnoitb: string;
  dichvutb: string;
  uuid: string;
}

interface DevicesState {
  data: DeviceData[];
  loading: boolean;
  error: string | null;
}

const initialState: DevicesState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchDevices = createAsyncThunk(
  "devices/fetchDevices",
  async () => {
    try {
      const database = getDatabase();
      const devicesRef = ref(database, "devices");

      // Sử dụng phương thức `onValue` để lắng nghe sự thay đổi dữ liệu trong nút "devices"
      return new Promise<DeviceData[]>((resolve, reject) => {
        onValue(
          devicesRef,
          (snapshot) => {
            const devicesData: DeviceData[] = [];
            snapshot.forEach((childSnapshot) => {
              devicesData.push(childSnapshot.val() as DeviceData);
            });
            resolve(devicesData);
          },
          (error) => {
            console.error("Lỗi khi truy vấn dữ liệu thiết bị:", error);
            reject(error);
          }
        );
      });
    } catch (error) {
      console.error("Lỗi khi truy vấn dữ liệu thiết bị:", error);
      throw error;
    }
  }
);

const devicesSlice = createSlice({
  name: "devices",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDevices.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchDevices.fulfilled,
        (state, action: PayloadAction<DeviceData[]>) => {
          state.loading = false;
          state.error = null;
          state.data = action.payload;
        }
      )
      .addCase(fetchDevices.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message ?? "Error occurred while fetching devices";
        state.data = [];
      });
  },
});

export default devicesSlice.reducer;
