// import { createAsyncThunk } from '@reduxjs/toolkit';
// import AuthAPI from '../../BE_API/AuthAPI';

// // Types
// const FETCH_CURRENT_USER = {'app/fetch-current-user'}

// // Async actions
// export const fetchCurrentUser = createAsyncThunk(
//   FETCH_CURRENT_USER,
//   async (payload, { rejectWithValue, fulfillWithValue }) => {
//     try {
//       const currentUserResponse = await AuthAPI.fetchCurrentUser();
//       const currentUser = currentUserResponse.data;
//       return fulfillWithValue(currentUser);
//     } catch (error) {
//       console.log('fetch-current-user-failed:', error);
//       rejectWithValue(error);
//     }
//   }
// );
