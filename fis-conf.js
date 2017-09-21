fis.match('/page/*', {
  deploy: fis.plugin('http-push', {
    receiver: 'http://47.93.198.160:8999/receiver',
    
    to: '/var/www/'
  })
})

