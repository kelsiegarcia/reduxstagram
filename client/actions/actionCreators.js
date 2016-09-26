//ACTION CREATORS

//increment
function increment(index) {
  //ACTION
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

// add comments
function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postID,
    author,
    comment
  }
}
//remove comment
function removeComment(postId, i) {
  return {
    type: 'REMOVE_COMMENT',
    i,
    postId
  }
}
