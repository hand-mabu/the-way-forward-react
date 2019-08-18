// ES6新语法标准

/* 
// 作用域
{
	// let 定义的变量在块级内部有效
	var name ="eric";
	//let name ="eric2";
}
console.log(name);
 
 // const 定义常量 类似final
 const eric1="夜曲";
// eric = "一群嗜血的蚂蚁";
console.log(eric1);
 */



// =================================================================
/* 
// 字符串(模板字符串) vue 中 插值表达式 ${xxx}
let name ="123";
let age ="1234";
console.log(`这是名称 ${name},这是年龄:${age}`)
 */



// =================================================================

/* function hello(name){
	console.log("夜的第七章");
}

// 箭头函数
const hello1 = (name)=>{
	console.log(`${name}:夜的第七章2`);
} 
hello1("jay");
setTimeout(()=>{console.log("简写代码，this作用域")},1000);

//、 函数参数默认值

const hello2 = (name='方文山')=>{
	console.log(`${name}:夜的第七章2`);
} 
hello2();
hello2("周杰伦");

const hello3 = (name1,name2)=>{
	console.log(`${name1}|${name2}`);
} 
let arr =['周杰伦','方文山'];
hello3.apply(null,arr);
hello3.apply(...arr); */

// =================================================================
//对象Object
/* const obj={name:"eric",age:"react"};
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.enteries(obj));

const name3 = "周杰伦";
const obj2={
	name3,
	[name3]:'jaychou',
    hello4:function(){
		
	}	,
	hello5(){}
}
obj2[name3]="略略略"
console.log(obj2);

const obj3={name:"eric",age:"react"};
const obj4={name:"eric",age:"react"};
console.log({...obj3,...obj4});

const arr2=["name","eric"];
let arrq1=arr2[0];
let arrq2=arr2[1];
let [arrq3,arrq4] = arr2;

const {name,age} = obj3;
console.log(name,'|',age);

const arr3 =[1,2,3];
console.log(arr3.map(function(v){return v*2}));
console.log(arr3.map(v=>v*2)); */
// =================================================================

// class
/* class EricJay{
	// 构造方法
	constructor() {
	    this.name="eric";
	}
	lsh(){
		console.log(`哈哈哈 : ${this.name}`);
	}
}
const appEric = new EricJay();
appEric.lsh(); */


// =================================================================
// 数组遍历
/* [1,2,3].forEach(function(value,index){
	console.log(value);
})
// 映射新数组
arr =[1,2,3].map(v=>v*2);
[1,2,3].every(v=>v>2)
[1,2,3].some(v=>v>2)
[1,2,3,4,5].filter(v=>v>2)
let array =[1,2,3,4,3,2,1,5,6,3];
let rty = [...new Set(array)]

const [head,...tail]=[1,2,3,4];
const [last,...initail]=[1,2,3,4].reverse();
 */
// =================================================================

export const xiaomi = "这是对外导出的一个常量xiaomi";
export function eric (){
	console.log("这是对外的一个普通方法方法eric ")
};
export default function ericHello (){
	console.log("这是对外的一个默认方法方法ericHello ")
};












