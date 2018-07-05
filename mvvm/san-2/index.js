import san from 'san';
console.log("hello World");
var MyApp = san.defineComponent({
    template: '<p>Hello {{name}}!</p>',

    initData: function () {
        return {
            name: 'San'
        };
    }
});


var myApp = new MyApp();
myApp.attach(document.body);

var MyApp2 = san.defineComponent({
	template: '<ul><li s-for="item in list">{{item}}</li></ul>',
	attached: function () {
		this.data.set('list',['san','er','esui','etpl','123']);
	}
});
var myApp2 = new MyApp2();
myApp2.attach(document.getElementsByTagName('p')[0]);