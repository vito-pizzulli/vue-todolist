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
            ],
            toDoTaskNew : ''
        }
    },
    methods: {
        toDoTaskDelete(index) {
            this.toDoList.splice(index, 1);
        },
        toDoTaskAdd() {
            if (this.toDoTaskNew !== '') {
                taskToAdd = {text: this.toDoTaskNew, done: false};
                this.toDoList.push(taskToAdd);
                this.toDoTaskNew = '';
            }
        },
        toDoTaskCheck(index) {
            this.toDoList[index].done = !this.toDoList[index].done;
        }
    }
}) .mount('#app');