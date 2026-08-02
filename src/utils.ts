

 export const readData= (value:string)=>{
    const data = localStorage.getItem(value);
    return  data?  JSON.parse(data):null
}
 export const storeDate =( key :string ,value:string) =>{
    localStorage.setItem(key,value )
}
 export const removeData = (value:string)=>{
    localStorage.removeItem(value)
}
