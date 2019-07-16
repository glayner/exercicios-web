import axios from 'axios'

const success = res => res

const error = err => {
    if(401 === err.response.status){
        window.location = '/'
    } else{
        return Promise.reject
    }
}

axios.interceptors.response.use(success, error)