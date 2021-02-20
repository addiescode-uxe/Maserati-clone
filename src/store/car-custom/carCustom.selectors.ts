import { RootState } from '../configureStore';
import { createSelector } from '@reduxjs/toolkit';

const selectCarCustomState = (state: RootState) => state.customCar;

export const SelectExteriorOptionInfo = createSelector(
  selectCarCustomState,
  ({ exterior }) => exterior
);

export const SelectInteriorOptionInfo = createSelector(
  selectCarCustomState,
  ({ interior }) => interior
);

export const SelectToolOptionInfo = createSelector(
  selectCarCustomState,
  ({ toolOptions }) => toolOptions
);

export const SelectTokenInfo = createSelector(
  selectCarCustomState,
  ({ token }) => token
);

export const SelectIsTokenGenerated = createSelector(
  selectCarCustomState,
  ({ tokenGenerated }) => tokenGenerated
);
