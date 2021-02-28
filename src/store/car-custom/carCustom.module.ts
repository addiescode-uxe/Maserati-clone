import { CarCustomTypes } from '../../models/carCustomOptions.models';
import { createSlice, SerializedError } from '@reduxjs/toolkit';
import {
  fetchExteriorCarInfo,
  loadCustomCarInfo,
  fetchInteriorSeatColor,
} from './carCustom.thunks';

export interface CustomCarState extends CarCustomTypes {
  tokenGenerated: boolean;
  pending: boolean;
  token: string;
  error?: SerializedError;
}

export const initialState: CustomCarState = {
  exterior: {
    exteriorColor: 'BIANCO',
    breakCaliperOptions: 'Grigio',
    wheelOptions: "19'Proteo",
  },
  interior: {
    seat: 'NERO',
    carpet: 'NERO',
    dashboard: 'NERO',
    headlining: 'GRIGIO',
    steeringWheel: 'NERO',
    trim: 'RADICA',
  },
  toolOptions: {
    interior: ['TWO_TONE', 'STEERING_WHEEL'],
  },
  tokenGenerated: false,
  pending: false,
  token: '',
};

export const customCarSlice = createSlice({
  name: 'customCar',
  initialState,
  reducers: {
    addExteriorOptions(state, action) {
      state.exterior = action.payload;
    },
    addInteriorOptions(state, action) {
      state.interior = action.payload;
    },
    addInteriorSeatOptions(state, action) {
      state.interior.seat = action.payload;
    },
    addToolOptions(state, action) {
      state.toolOptions = action.payload;
    },
    addAccessories(state, action) {
      state.accessories = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
    setCustomCarInfo(state, action) {
      state = action.payload;
    },
  },

  // TODO: exterior, interior, option, acc 모두 async thunk 함수 넣어주기

  extraReducers: builder => {
    builder
      .addCase(loadCustomCarInfo.pending, state => {
        state.pending = true;
      })
      .addCase(loadCustomCarInfo.fulfilled, state => {
        state.pending = false;
      })
      .addCase(loadCustomCarInfo.rejected, (state, action) => {
        state.error = action.error;
      })
      .addCase(fetchExteriorCarInfo.pending, state => {
        state.pending = true;
      })
      .addCase(fetchExteriorCarInfo.fulfilled, state => {
        state.pending = false;
      })
      .addCase(fetchExteriorCarInfo.rejected, (state, action) => {
        state.error = action.error;
      })
      .addCase(fetchInteriorSeatColor.fulfilled, state => {
        state.pending = false;
      })
      .addCase(fetchInteriorSeatColor.pending, state => {
        state.pending = true;
      })
      .addCase(fetchInteriorSeatColor.rejected, (state, action) => {
        state.error = action.error;
      });
  },
});

export const {
  addExteriorOptions,
  addInteriorOptions,
  addToolOptions,
  addAccessories,
  setToken,
} = customCarSlice.actions;

export const customCarActions = customCarSlice.actions;

export default customCarSlice.reducer;
