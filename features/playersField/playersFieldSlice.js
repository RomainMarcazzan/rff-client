import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  structureField: {
    PL: [
      { positionNum: 1, firstname: null, lastname: null },
      { positionNum: 2, firstname: null, lastname: null },
      { positionNum: 3, firstname: null, lastname: null },
    ],
    SL: [
      { positionNum: 4, firstname: null, lastname: null },
      { positionNum: 5, firstname: null, lastname: null },
    ],
    TL: [
      { positionNum: 6, firstname: null, lastname: null },
      { positionNum: 8, firstname: null, lastname: null },
      { positionNum: 7, firstname: null, lastname: null },
    ],
    DEM: [
      { positionNum: 9, firstname: null, lastname: null },
      { positionNum: 10, firstname: null, lastname: null },
    ],
    CEN: [
      { positionNum: 12, firstname: null, lastname: null },
      { positionNum: 13, firstname: null, lastname: null },
    ],
    AIL: [
      { positionNum: 11, firstname: null, lastname: null },
      { positionNum: 14, firstname: null, lastname: null },
    ],
    ARR: [{ positionNum: 15, firstname: null, lastname: null }],
  },
  positionSelected: {
    row: "",
    positionNumSelected: "",
  },
};

export const playersFieldSlice = createSlice({
  name: "playersField",
  initialState,
  reducers: {
    getPositionSelected: (state, action) => {
      state.positionSelected = action.payload;
    },

    addPlayerToStructure: (state, action) => {
      let newStructureField = {};

      Object.keys(state.structureField).forEach((rowPos) => {
        if (rowPos === action.payload.structureRow) {
          newStructureField = {
            ...state.structureField,
            [rowPos]: state.structureField[rowPos].map((obj) => {
              if (obj.positionNum === action.payload.positionNum) {
                return {
                  ...obj,
                  firstname: action.payload.firstname,
                  lastname: action.payload.lastname,
                };
              } else return obj;
            }),
          };
        }
      });
      state.structureField = newStructureField;
    },
  },
});

export const { getPositionSelected, addPlayerToStructure } =
  playersFieldSlice.actions;
export default playersFieldSlice.reducer;
