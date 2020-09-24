// https://developer.wordpress.org/rest-api/
const NAME = 'malvestida',
  DOMAIN = `https://${NAME}.com`,
  SITE = `${DOMAIN}/wp-json`,
  API_WP = `${SITE}/wp/v2`, // api nativa de wordpress. informacion nativa de todo sitio en wordpress
  POSTS = `${API_WP}/posts?_embed`,
  POST = `${API_WP}/posts`;

export default {
  NAME,
  DOMAIN,
  SITE,
  API_WP,
  POSTS,
  POST,
};
