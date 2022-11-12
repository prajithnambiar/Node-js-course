const app = Vue.createApp({
    data(){
        return{
            name: 'Prajith Nambiar',
            age: 23,
            randno: Math.trunc( Math.random()*6),
            imgpath:" https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg",
            value: 'random'
        }
    },

    methods: {
        random(){
            return Math.trunc( Math.random()*11)
        }

    }

});

app.mount('#assignment')