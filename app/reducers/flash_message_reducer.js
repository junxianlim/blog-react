const INITIAL_STATE = { message: null, key: null, visible: null };
const CREATE_POST = 'CREATE_POST';
const DELETE_POST = 'DELETE_POST';
const HIDE_FLASH = 'HIDE_FLASH';

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case HIDE_FLASH:
    return { ...state, message: '', key: '', visible: false }
  case DELETE_POST:
    return { ...state, message: 'Post deleted', key: 'danger', visible: true }
  case CREATE_POST:
    return { ...state, message: 'Post created', key: 'success', visible: true }
  default:
    return state
  }
}
