import { ActionTypes } from '../actions/contactActions';

const initialState = [];

export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_CONTACTS:
      return action.contacts;
    case ActionTypes.ADD_CONTACT:
      return action.payload;
    case ActionTypes.DELETE_CONTACT:
      return state.filter((contact) =>
        contact.id === action.payload ? null : contact
      );

    case ActionTypes.UPDATE_CONTACT:
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
