var basketModule = (function () {
    var basket = []; // private
    return {
        addItem: function (values) {
            basket.push(values);
        },
        getItemCount: function () {
            return basket.length;
        },
        getTotal: function () {
            var q = this.getItemCount(), p = 0;
            while (q --) {
                p += basket[q].price;
            }
            return p;
        }
    }
})();

basketModule.addItem({item: 'bread', price: 10.5});
basketModule.addItem({item: 'butter', price: 11.5});

console.log("getItemCount", basketModule.getItemCount());
console.log("getTotal", basketModule.getTotal());