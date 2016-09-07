import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostsReducer from './posts_reducer';
import FlashMessageReducer from './flash_message_reducer';

const rootReducer = combineReducers({
  posts: PostsReducer,
  flashMessage: FlashMessageReducer,
  form: formReducer
})

export default rootReducer
