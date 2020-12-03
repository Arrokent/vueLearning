const app = new Vue({
    el: '#app',
    data: {
        message: 'Chibiken',
        books: [
            {
                id: 1,
                name: '《算法导论》',
                data: '2006-9',
                price: 85.00,
                count: 1
            },
            {
                id: 2,
                name: '《C++ Primer Plus》',
                data: '2014-7',
                price: 99.00,
                count: 1
            },
            {
                id: 3,
                name: '《操作系统真象还原》',
                data: '2018-6',
                price: 68.00,
                count: 1
            },
            {
                id: 4,
                name: '《UNIX编程艺术》',
                data: '2008-10',
                price: 39.00,
                count: 1
            },
        ]
    },
    methods: {
        countIncrease(index) {
            this.books[index].count++;
        },
        countDecrease(index) {
            if(!--this.books[index].count)
                this.remove(index);
        },
        remove(index) {

        }
    },
    filters: {
        showPrice(price) {
            return '¥' + price.toFixed(2);
        },
    }
})