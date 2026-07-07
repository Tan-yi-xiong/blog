'use strict';

hexo.extend.generator.register('content_json', function(locals) {
  const posts = locals.posts.sort('-date').map(post => ({
    title: post.title,
    date: post.date ? post.date.toISOString() : '',
    path: post.path,
    tags: post.tags ? post.tags.toArray().map(tag => ({
      name: tag.name,
      slug: tag.slug,
      permalink: tag.permalink
    })) : []
  }));

  return {
    path: 'content.json',
    data: JSON.stringify(posts)
  };
});
