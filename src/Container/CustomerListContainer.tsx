
import CustomerList from '../Component/CustomerList';
import{connect} from 'react-redux';


import {filterReuslt} from '../action'

const mapStateToProps=(state:any)=>{
    let tmp =false;
    
    for(let item of state.customerList){
        if (state.currentUser===item.userName){
            console.log('state.customerList:',state.currentUser,state.customerList)
            tmp=item.admin
        }
    }
    if(state.serchitem){
        return{
            serchitem:state.serchitem,
            customerList:state.customerListShow,
            valid:state.valid,
            admin:tmp
        }
    }
    else{
        return{
            valid:state.valid,
            serchitem:state.serchitem,
            customerList:state.customerList,
            admin:tmp
        }
    }
}
const mapDispatchToProps =(dispatch:any,state:any)=>{

    return{

        filterReuslt:(event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string|undefined)=>{
                dispatch(filterReuslt(newValue))           
        }


    }
};

const CustomerListContainer=connect(mapStateToProps,mapDispatchToProps)(CustomerList);
export default CustomerListContainer;