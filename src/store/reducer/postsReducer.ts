import { PostType } from '../actions/postsActions';
import { ActionTypes } from '../actions/postsActions';

export interface IState {
  posts: Array<PostType>;
  isLoaded: boolean;
}

const initialState: IState = {
  posts: [],
  isLoaded: false,
};

export const postsReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case 'ADD_POST':
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };

    case 'DELETE_POST':
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };

    case 'INIT_POSTS':
      return {
        ...state,
        posts: action.payload,
      };

    case 'SET_LOADED':
      return {
        ...state,
        isLoaded: action.payload,
      };

    default:
      return state;
  }
};
