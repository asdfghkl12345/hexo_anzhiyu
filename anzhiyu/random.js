var posts=["posts/14605/","posts/39417/","posts/17489/","posts/21712/","posts/37773/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };