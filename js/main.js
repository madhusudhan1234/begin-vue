Vue.component('tasks',{

	props:['list'],

	template: '#tasks-template'
});

new Vue({
	el: '#app',
	data: {
		tasks:[
			{ body:'Go to the store',completed:false},
			{ body:'Go to the Bank',completed:false},
			{ body:'Go to the school',completed:true}
		]
	},
});