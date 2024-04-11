import { createSlice } from "@reduxjs/toolkit";
import { getEmployee, addEmployee, deleteEmployee, editEmployee } from "./apiCalls";
import {add,remove,update} from "./employeeSlice"
import employee from "../employee";


export interface State {
  employees: employee[];
  status: string;
  error: string | undefined;
}

const initialState: State = {
  employees: [],
  status: 'idle',
  error: undefined,
};

const apiSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getEmployee.pending, (state) => {
      state.status = 'loading'
    })
      .addCase(getEmployee.fulfilled, (state, action) => {
        state.status = 'succeeded'
        // get()
      })
      .addCase(getEmployee.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      }).addCase(addEmployee.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(addEmployee.fulfilled, (state, action) => {
        state.status = 'succeeded'
        add(action.payload)
      })
      .addCase(addEmployee.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(editEmployee.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(editEmployee.fulfilled, (state, action) => {
        state.status = 'succeeded'
        update(action.payload)
      })
      .addCase(editEmployee.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(deleteEmployee.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(deleteEmployee.fulfilled, (state, action) => {
        state.status = 'succeeded'
        remove(action.payload)
      })
      .addCase(deleteEmployee.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })

  }
})

export default apiSlice.reducer