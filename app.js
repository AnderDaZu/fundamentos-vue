const app = Vue.createApp({
    data(){
        return {
            counter: 0
        }
    },
});

app.component('button-counter', {
    data(){
        return {
            counter: 0
        }
    },
    template: `
        <div class="max-w-xl mx-auto">
            <button @click="add()" type="button" class="my-6 mr-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Aumentar</button>
            <button @click="sub()" type="button" class="px-5 py-2.5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Disminuir</button>
            <p>Counter: {{ counter }}</p>
        </div>
    `,
    methods: {
        add(){
            this.counter++;
        },
        sub(){
            if (this.counter > 0) {
                this.counter--;
            }
        }
    }
});