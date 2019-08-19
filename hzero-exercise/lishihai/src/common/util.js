//公用方法
export default {
  set(key,value){
    if(typeof value === 'object'){
      value=JSON.stringify(value)
    }
    sessionStorage.setItem(key,value)
  },
  get(key){
    let value = sessionStorage.getItem(key) || '';
    if(value.startsWith('{')||value.startsWith('[')){
      value = JSON.parse(value)
    }
    return value;
  }
}