Vue.component('aa', {
    template:`<div>
    <input type="text" v-model="user">
    <input type="text" v-model="comment">
    <button @click="save">저장</button>
    <ul>
        <li v-for="msg in message">
            <p>{{ msg.user }}: {{ msg.comment }}</p>
        </li>
    </ul> 
    </div>`,
    data () {
        return {
            user: null,
            comment: null,
            message:[] 
    }
},
    methods: {
        save() {
            const message ={
                user:this.user,
                comment:this.comment
            };

            this.message.unshift(message);
            this.user = null;
            this.comment = null;
        }
    }
});

let app = new Vue({
    el:'#app',
//     data:{
//         user: null,
//         comment: null,
//         message:[]
//     },
//     methods: {
//         save () {
//             const message = {
//                 user:this.user,
//                 comment:this.comment
//             };

//             this.message.unshift(message)
//             this.user = null
//             this.comment = null
//         }
//     },
});