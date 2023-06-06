const { createApp } = Vue;

createApp ({
    data() {
        return {
            toDoList : [
                {
                    text: 'Fare colazione',
                    done: true
                },
                {
                    text: 'Seguire la lezione del mattino',
                    done: true
                },
                {
                    text: 'Pranzare',
                    done: true
                },
                {
                    text: 'Svolgere esercitazione del pomeriggio',
                    done: false
                },
                {
                    text: 'Fare workout',
                    done: false
                }
            ]
        }
    },
    methods: {
        toDoTaskDelete(index) {
            this.toDoList.splice(index, 1);
        }
    }
}) .mount('#app');