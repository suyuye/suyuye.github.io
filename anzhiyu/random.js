var posts=["posts/e45f3e32.html","posts/e1cbb961.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };