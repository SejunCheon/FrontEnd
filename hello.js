let app = new Vue({
    el:'#app',
    data:{
        message:"Select a user",
        users:[{name:'User'}, {name:'Admin'}]
    },
    methods: {
        sayHello(name){
            this.message = 'Hi, ' + name
        }
    }
});