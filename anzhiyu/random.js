var posts=["posts/39417/","posts/14605/","posts/37773/","posts/61373/","posts/21712/","posts/17489/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };