const posts = async (_, __, { getPosts }) => {
  const posts = await getPosts();

  return posts.json();
};

const post = async (_, { id }, { getPosts }) => {
  const resopnse = await getPosts(`/${id}`);
  const post = resopnse.json();
  if (typeof post.id === 'undefined')
    return { postId: id, statusCode: 404, message: 'Post not found' };
  return post;
};

export const postResolvers = {
  Query: {
    post,
    posts,
  },
  PostResult: {
    __resolveType: (obj) => {
      if (typeof obj.postId !== 'undefined') return 'PostNotFoundError';
      if (typeof obj.timeout !== 'undefined') return 'PostTimeoutError';
      if (typeof obj.id !== 'undefined') return 'Post';
      return null;
    },
  },
  PostError: {
    __resolveType: (obj) => {
      if (typeof obj.postId !== 'undefined') return 'PostNotFoundError';
      if (typeof obj.timeout !== 'undefined') return 'PostTimeoutError';
      return null;
    },
  },
};
