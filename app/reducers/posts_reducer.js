const INITIAL_STATE = { all: [], post: null};
const FETCH_POST = 'FETCH_POST';
const FETCH_POSTS = 'FETCH_POSTS';
const DELETE_POST = 'DELETE_POST';

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case DELETE_POST:
    return { ...state, post: null }
  case FETCH_POST:
    return { ...state, post: action.payload.data }
  case FETCH_POSTS:
    return { ...state, all: action.payload.data }
  default:
    return state
  }
}
