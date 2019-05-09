import axios from 'axios';
export const submit=(user:string,pass:string)=>{
    return{
        type:"SUBMIT",
        user,
        pass
    }
}
export const increment=(value:string)=>{
    return {
        type:"INCREMENT",
        value
    }
}
export const decrement=(value:string)=>{
    return {
        type:"DECREMENT",
        value
    }
}
export const register=(value:object)=>{
    return{
        type:'REGISTER',
        value
    }
}
export const fetchIssues=(valid:boolean)=>{
    if(valid){
        return (dispatch:any)=>{ 
            return axios.get('https://raw.githubusercontent.com/cycy137/data/master/sampledata', {
            params: {
              creator: 'axuebin',
              labels: 'blog',
            },
          }).then((response:any) => 
          dispatch(receiveIssues(response.data))).catch((e:any) => console.log(e));
        }
    }
    
}
export const filterReuslt=(value:string|undefined)=>{
    return{
        type:"FILTERREUSLT",
        value
    }
}
export const receiveIssues= (json:[]) => ({ type: "RECEIVE_ISSUES", posts: json });
export const signout=()=>{
    return{
        type:'SIGNOUT',
        
    }
}