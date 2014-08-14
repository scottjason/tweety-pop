exports.config = {
  app_name: ['tweet-pop'],
  license_key : "27f31220df54af53dae6b0939a3e3060eb19911f",
  logging: {
    level:'info'
  },
  rules : {
    ignore : [
      '^/socket.io/.*/xhr-polling'
    ]
  }
}