import axios from 'axios';

export type PostType = {
  userId?: number;
  id: number;
  title: string;
  body: string;
};

function inferLiteralFromString<T extends string>(arg: T): T {
  return arg;
}

export const addPostToState = (post: PostType) => ({
  type: inferLiteralFromString('ADD_POST'),
  payload: post,
});

export const deletePost = (id: number) => ({
  type: inferLiteralFromString('DELETE_POST'),
  payload: id,
});

export const initPosts = (posts: Array<PostType>) => ({
  type: inferLiteralFromString('INIT_POSTS'),
  payload: posts,
});

export const setLoaded = (payload: boolean) => ({
  type: inferLiteralFromString('SET_LOADED'),
  payload,
});

export type ActionTypes =
  | ReturnType<typeof addPostToState>
  | ReturnType<typeof deletePost>
  | ReturnType<typeof initPosts>
  | ReturnType<typeof setLoaded>;

// fetch posts
export const fetchPosts = () => (dispatch: any) => {
  dispatch(setLoaded(false));

  axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10').then(({ data }) => dispatch(initPosts(data)));
};
