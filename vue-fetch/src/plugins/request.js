const plugin = {}

plugin.install = function (Vue, option) {
  const request = (api, data = {}) => {
    return new Promise((resolve, reject) => {
      // 拼接请求url
      const url = api.url
      // method必须为大写
      const method = (api.method).toUpperCase()
      fetch(
        url, {
          method,
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }
      )
        .then((response) => {
          if (response.ok) {
            return response.text()
          } else {
            resolve({
              code: 0,
              msg: '请求失败'
            })
          }
        })
        .then((response) => {
          resolve(response)
        })
        .catch((err) => {
          reject(new Error(err))
        })
    })
  }

  Vue.prototype.$request = request
}

export default plugin
