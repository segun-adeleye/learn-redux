function postComment(state = [], action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [ ...state, {
        text: action.comment,
        user: action.author
      }];
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
