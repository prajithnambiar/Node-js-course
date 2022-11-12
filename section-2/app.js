const app = Vue.createApp({
    data(){
        //THIS OBJECT RETURNED BY DATA METHID ARE STORED IN THE GLOBAL CREATEAPP OBJECT
        return{
            courseGoalA: 'This is my course goal A',
            courseGoalB: 'This is course goal B',
            htmltxt: "<h1>this is the first heading</h1>",
            googleLink: 'www.google.com'

        };
    },
    methods:{
        randomtxt(){
            const rand = Math.random();
            if(rand>0.5){
                return this.courseGoalA //THIS REFERS TO THE GLOBAL CREATEAPP OBJECT
            }
            else{
                return this.courseGoalB
            }
        }
    }
});

app.mount('#user-goal')