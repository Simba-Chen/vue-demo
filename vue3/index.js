new Vue({
    el: '#vue',
    data: {
        selected: 'a',
        tabs:[
            {name:'a',content:'aaa'},
            {name:'b',content:'bbb'},
            {name:'c',content:'ccc'}
        ]
    },
    template:`
    <div>
        <ol>
            <li v-for="tab in tabs" v-on:click="selected=tab.name" v-bind:class="{active:tab.name === selected}">{{ tab.name }}</li>
        </ol>
        <ol>
            <li v-for="tab in tabs" v-show="selected === tab.name">{{tab.content}}</li>
        </ol>
    </div>
    `,
    methods:{}
    //1 for循环， 2当li被点击的时候使data数据内的selected等于for循环内部声明的这个tab.name，3，当tab.name === 当前的selected时候该li元素绑定一个class“active”
})