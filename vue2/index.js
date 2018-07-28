new Vue({
    el: "#vue",
    data:{
        transformValue: ''
    },
    template:`
        <div class="vueBox">
            <div class="window">
                <div class="slides" v-bind:style="{transform: transformValue}"></div>
            </div>
            <div class="btn">
                <button v-on:click="go(0)">1</button>
                <button v-on:click="go(1)">2</button>
                <button v-on:click="go(2)">3</button>
            </div>    
        </div>
    `,
    methods: {
        go(index){
            this.transformValue = `translateX(${-100*index}px)`
        }
    }
})