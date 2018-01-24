function postComment(state = [], action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [ ...state, {
        text: action.comment,
        user: action.author
      }];
    case 'REMOVE_COMMENT':
      return [
        // array element before index action.i
        ...state.slice(0, action.i),
        // array element after index action.i
        ...state.slice(action.i + 1)
      ];
    default:
      return state;
  }
}

export default (state = [], action) => {
  if (action.type !== 'undefined') {
    return {
      ...state,
      [action.postId]: postComment(state[action.postId], action)
    }
  }
  return state;
}
