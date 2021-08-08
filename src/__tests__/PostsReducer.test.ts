import { fetchPosts, setLoaded } from '../store/actions/postsActions';
import { postsAPI } from '../api/api';
jest.mock('../api/api');

const posts = [{ userId: 1, id: 1, title: 'string', body: 'string' }];

const postsAPIMock = postsAPI as jest.Mocked<typeof postsAPI>;

postsAPIMock.getPosts.mockReturnValue(Promise.resolve(posts));

test('fetch with thunk', async () => {
  const thunk = fetchPosts();
  const dispatchMock = jest.fn();

  await thunk(dispatchMock);

  expect(dispatchMock).toBeCalledTimes(3);

  expect(dispatchMock).toHaveBeenNthCalledWith(1, setLoaded(true));
  expect(dispatchMock).toHaveBeenNthCalledWith(3, setLoaded(false));
});
