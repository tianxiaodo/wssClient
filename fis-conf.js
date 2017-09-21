fis.match('**.{js,css,scss,html,jpg,png,gif,swf,tmpl}', {
  deploy: fis.plugin('http-push', {
    receiver: 'http://47.93.198.160:8999/receiver',
    to: '/var/www/'
  })
});

