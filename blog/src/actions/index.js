import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

// BEFORE REFACTOR //
//  export const fetchPosts = () => {
// return async function(dispatch, getState) {
//   const response = await jsonPlaceholder.get('/posts');

//   dispatch({ type: 'FETCH_POSTS', payload: response })
// };

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);
const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceholder.get(`/Users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: response.data });
});
