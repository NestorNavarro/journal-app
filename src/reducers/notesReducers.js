import { types } from "../types/types";

/*
    {
        notes: [],
        acitve: null,
        active: {
            id: 'asdf121',
            title: '',
            body: '',
            imageUrl: '',
            date: 123443434
        }
    }
*/
const initialState = {
    notes: [],
    active: null,
};
export const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.notesActive:
            return {
                ...state,
                active: {
                    ...action.payload
                } 
            };
        case types.notesAddNew:
            return {
                ...state,
                notes: [action.payload,  ...state.notes],
            };
        case types.notesLoad:
            return {
                ...state,
                notes: [...action.payload],
            }
        case types.notesUpdate:
            return {
                ...state,
                notes: state.notes.map(
                    note => note.id === action.payload.note.id
                    ? action.payload.note
                    : note
                )
            };
        case types.notesDelete:
            return {
                ...state,
                active: null,
                notes: state.notes.filter(
                    note => note.id !== action.payload
                )
            };
        case types.noteLogoutCleaning:
            return initialState;
        default:
            return state;
    }
}