import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: 1, name: 'Pune' },
    { id: 2, name: 'Mumbai' },
    { id: 3, name: 'Bengaluru' },
    { id: 4, name: 'hydrabad' },
    { id: 5, name: 'New Delhi' },
    { id: 6, name: 'Noida' },
    { id: 7, name: 'Gurgaon' },
    { id: 8, name: 'Kolkata' },
    { id: 9, name: 'Chennai' },
    { id: 10, name: 'Nagpur' },
    { id: 11, name: 'Bhubneshwar' },
    { id: 12, name: 'Kochi' },
    { id: 13, name: 'Chandigarh' },
    { id: 14, name: 'Old Delhi' },
    { id: 15, name: 'Lukhnow' },
    { id: 16, name: 'Punjab' },
    { id: 17, name: 'Uttarkhand' },
    { id: 18, name: 'Jammu' },
    { id: 19, name: 'mandi' },
    { id: 20, name: 'mangalore' },
  ],
  searchTerm: ''
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    }
  }
});

export const { setSearchTerm } = itemsSlice.actions;
export default itemsSlice.reducer;
