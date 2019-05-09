import {SUBMIT,INCREMENT,DECREMENT,RECEIVE_ISSUES,REGISTER,FILTERREUSLT,SIGNOUT} from '../constants';
import init from '../store/init';

export interface Icharacter{
    username:string;
    password:any;
    uservalid:boolean;
    number:number
}
export interface ICharacterState{
    readonly character:Icharacter[];
}

function appreducer(state:any=init,action:any){
    switch(action.type){

        case SUBMIT:{
            console.log('valid');
            
            for(let item of state.customerList){
                console.log('sumbit:',action.user)
                if (item.userName===action.user && item.password===action.pass){
                    return{...state,valid:true,currentUser:action.user}
                }
            }

        }     
        case INCREMENT:{
            return{...state,number:state.number+1}
        }
        case DECREMENT:{
            if(state.number>0){
                return{...state,number:state.number-1}
            }
            else{
                return state
            }           
        }
        case REGISTER:{
            console.log('redurcer:',action.value);
            return{...state,customer:state.customerList.push(action.value),valid:true,currentUser:action.value.userName}
        }
        
        case RECEIVE_ISSUES:{
            console.log("RECEIVE_ISSUES",action.posts[1]);
            return {...state,posts:action.posts}
        }
        case FILTERREUSLT:{
            
            let tmp = [];
            console.log(state.customerListShow);
            for(let item of state.customerList){
                
                if(item['userName'].includes(action.value)){
                    console.log(item['userName']);
                    tmp.push(item)
                }
            }
            return{...state,customerListShow:tmp,serchitem:action.value}
        }
        case SIGNOUT:{
            console.log('SIGNOUT',state.valid);
            return {...state,valid:!state.valid,currentUser:""}
        }
        default:{
            return state}
    }
    
    
}
export default appreducer