Template.registerHelper('addHttp', function(url) {
  if (!/^(f|ht)tps?:\/\//i.test (url)) {
    url = "http://" + url;
  }
  return url;
});
