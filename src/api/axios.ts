import axios from 'axios'

const axiosInstance = axios.create({
    baseURL:'/api',
})

axiosInstance.interceptors.request.use(config => {
    console.log(config)
    config.headers.Authorization = window.localStorage.getItem('token')
    console.log(config.headers.Authorization);
    
    // config.headers.Authorizationq = window.sessionStorage.getItem('token1')
    // 在最后必须 return config
    return config
  })

export default axiosInstance