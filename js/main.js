const { createApp } = Vue

createApp({
    data() {
        return {
            toDo: [
                {
                    testo: "Seguire le lezioni", done:false
                }, 
                {
                    testo: "Preparare il pranzo", done:false
                }, 
                {
                    testo: "Riposo", done:false
                }, 
                {
                    testo: "Fare gli esercizi", done:false
                }, 
                {
                    testo: "Allenarsi", done:false
                }
            ],
            nuovoValore: ""
        }
    },
    methods: {
        checkClick(i) {
            this.toDo[i].done = !this.toDo[i].done    
        },
        removeText(i) {
            this.toDo.splice(i, 1)
        },
        addButton(){
            if (this.toDo.push({testo: this.nuovoValore, done:false})) {
                this.nuovoValore = ""
            }
        },
    }
}).mount('#app')