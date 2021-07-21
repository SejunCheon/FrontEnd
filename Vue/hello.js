let app = new Vue({
    el:'#app',
    data:{
        user:null,
        comment:null,
        message:[]
    },
    methods: {
        save() {
            const message = {
                user:this.user,
                comment:this.comment
            };

            this.message.unshift(message);
            this.user = null;
            this.comment = null;
        }
    },
});