import axios from 'axios'

const instance=axios.create({
});

instance.interceptors.request.use(
    // Request 실행 직전
    (config)=>{
        const token = localStorage.getItem('accessToken')
        if(token)
            config.headers.Authorization=token
        else    
            console.log('No token')
        return config;
    },
    // 요청 에러 처리
    (error)=>{
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    // http status가 200인 경우
    (response)=>{
        return response;
    },
    // http status가 200이 아닌 경우
    (error)=>{
        return Promise.reject(error)
    }
);

export default instance;