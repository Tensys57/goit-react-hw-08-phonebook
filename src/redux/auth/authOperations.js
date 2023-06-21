import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const publicApi = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const token = {
  set(token) {
    publicApi.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    publicApi.defaults.headers.common.Authorization = '';
  },
};

const clearAuthHeader = () => {
  publicApi.defaults.headers.common.Authorization = '';
};

export const registerUser = createAsyncThunk(
  'auth/register',
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const { data } = await publicApi.post('/users/signup', {
        name,
        email,
        password,
      });
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const { data } = await publicApi.post('/users/login', {
        email,
        password,
      });
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await publicApi.post('/users/logout');
      token.unset();
      clearAuthHeader();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'auth/get/curUser',
  async (_, { getState, rejectWithValue }) => {
    const hasToken = getState().auth.token;
    token.set(hasToken);
    try {
      const { data } = await publicApi.get('/users/current');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    condition(_, { getState }) {
      const { token } = getState().auth;
      return Boolean(token);
    },
  }
);
