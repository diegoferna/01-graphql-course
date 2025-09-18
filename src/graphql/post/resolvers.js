const posts = async (_, __, { getPosts }) => {
  const posts = await getPosts();
  return posts.json();
};

const post = async (_, { id }, { getPosts }) => {
  const resopnse = await getPosts(`/${id}`);
  const post = resopnse.json();
  return post;
};

export const postResolvers = {
  Query: {
    post,
    posts,
  },
};
