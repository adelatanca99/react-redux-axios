import { ActionTypes } from '../actions/contactActions';

const initialState = [];

export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_CONTACTS:
      return action.contacts;
    case ActionTypes.ADD_USER:
      return { ...state, contact: action.payload };
    case ActionTypes.DELETE_USER:
      const contactFilter = state.filter((contact) =>
        contact.id === action.payload ? null : contact
      );
      return { ...state, contactFilter };
    case ActionTypes.UPDATE_USER:
      const contactUpdate = state.filter((contact) =>
        contact.id === action.payload.id
          ? Object.assign(contact, action.payload)
          : contact
      );
      return { ...state, contactUpdate };
    default:
      return state;
  }
};
