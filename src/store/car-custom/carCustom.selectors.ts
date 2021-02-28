import { RootState } from '../configureStore';
import { createSelector } from '@reduxjs/toolkit';

const selectCarCustomState = (state: RootState) => state.customCar;

export const selectCurrentCarCustomOptions = createSelector(
  selectCarCustomState,
  state => state
);

export const selectExteriorOptionInfo = createSelector(
  selectCarCustomState,
  ({ exterior }) => exterior
);

export const selectInteriorOptionInfo = createSelector(
  selectCarCustomState,
  ({ interior }) => interior
);

export const selectToolOptionInfo = createSelector(
  selectCarCustomState,
  ({ toolOptions }) => toolOptions
);

export const selectTokenInfo = createSelector(
  selectCarCustomState,
  ({ token }) => token
);

export const selectIsTokenGenerated = createSelector(
  selectCarCustomState,
  ({ tokenGenerated }) => tokenGenerated
);
