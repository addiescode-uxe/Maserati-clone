import { createAsyncThunk } from '@reduxjs/toolkit';
import * as ApiManager from '../../factory/apiManager';

/**
 * 최초 loading 되는 car info / 저장된 car info get
 */

// TODO : api get으로 최초 loading 되는 car info 객체 mockup 만들고 call

export const loadCustomCarInfo = createAsyncThunk(
  'customCar/loadInfo',
  async () => {
    const apiResponse = await ApiManager.request({
      method: 'GET',
      url: 'http://localhost:3000/data/loadCar.json',
    });
    return apiResponse;
  }
);

/**
 * exterior car info get
 */

export const fetchExteriorCarInfo = createAsyncThunk(
  'customCar/exterior',
  async () => {
    const apiResponse = await ApiManager.request({
      method: 'GET',
      url: 'http://localhost:3000/data/carColorData.json',
    });
    return apiResponse;
  }
);

/**
 * interior car info get
 */

// TODO: interior mockup data 만들고 call

/**
 * option car info get
 */

// TODO: option mockup data 만들고 call

/**
 * accessories car info get
 */

// TODO: accessories mockup data 만들고 call

/**
 * set car info post
 */

// TODO: car info mockup data 만들고 call
