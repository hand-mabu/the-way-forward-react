import { ADD_FLASH_MESSAGE } from '../constants';
import shortid from 'shortid';

const flashMessages = (state = [], action = {}) => {
  switch(action.type) {
    case ADD_FLASH_MESSAGE:
      return [
        ...state,
        {
          id: shortid.generate(),
          type: action.message.type,
          text: action.message.text
        }
      ];
    default: return state;
  }
}

export default flashMessages;