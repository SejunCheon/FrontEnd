import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{ // 공통으로 참조하기 위한 변수를 정의한 것이다. 프로젝트의 모든 곳에서 이를 참조하고 사용할 수 있다.
        accessToken:null,
        users:{
            name:null,
            userid:null,
            password:null
        }
    },
    getters:{
        isAuth(state){ // 여러 컴포넌트에서 동일한 computed가 사용될 경우 Getters에 정의해서 공통으로 쉽게 사용 가능
            if(state.accessToken==null) return false
            return true
        }
    },
    mutations:{ // State 변경을 담당한다. 반드시 Mutation을 통해서만 State를 변경해야 한다. 동기 처리 기준이다. commit()
        signup(state, payload){
            state.users.name = payload.name
            state.users.userid = payload.userid
            state.users.password = payload.password
        },
        signin(state, payload){
            state.accessToken = payload.accessToken
            localStorage.setItem('accessToken', state.accessToken)
        },
        signout(state){
            state.accessToken = null
            localStorage.removeItem('accessToken')
            location.reload(); // 현재 접속중인 페이지를 다시 불러오는 역할을 합니다.
        },
        getAccessToken(state){
            state.accessToken = localStorage.getItem('accessToken')
        },
        loginFailed(state){
            state.accessToken=null;
            localStorage.removeItem('accessToken');
            // 로그인 실패시 Home으로 강제 리다이렉트 시키지 않는다.
        }
    },
    actions:{ // Mutation을 실행시키는 역할을 담당한다. 비동기 처리 기준이다. dispatch()
        signin({commit}, payload){
            const data = { userid : payload.userid, password : payload.password }
            return axios.post('/api/auth/login', data)
            .then(res=>{
                if(res.status==200){ // 로그인 성공
                    commit('signin', { accessToken:res.data.token })
                }
            })
            .catch((err)=>{ // 에러 발생하면 로그아웃 처리
                commit('loginFailed')
                return Promise.reject(err); // err가 났을시 component가 catch할수있도로 알게해준다
            })
        }
    }
})
