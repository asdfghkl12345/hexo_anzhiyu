var posts=["posts/14605/","posts/17489/","posts/39417/","posts/21712/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };