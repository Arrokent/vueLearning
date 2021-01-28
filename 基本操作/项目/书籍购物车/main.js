const app = new Vue({
    el: '#app',
    data: {
        author: 'Chibiken',
        goodsAttributes: ['书籍编号','书籍名称', '出版日期', '价格', '购买数量', '操作'],
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
        ],
        emptyMessage: '购物车为空'
    },
    computed: {
        isEmpty() {
            return this.books.length;
        },
        totalPrice() {
            return this.books.reduce(function (preValue, book) {
                return preValue + book.price * book.count;
            }, 0);
        }
    },
    methods: {
        countIncrease(index) {
            this.books[index].count++;
        },
        countDecrease(index) {
            if (!--this.books[index].count)
                this.remove(index);
        },
        remove(index) {
            this.books.splice(index, 1);
        }
    },
    filters: {
        showPrice(price) {
            return '¥' + price.toFixed(2);
        },
    }
})