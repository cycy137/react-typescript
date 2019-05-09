import Main from '../Component/Main';
import{connect} from 'react-redux'
import {fetchIssues} from '../action';


const mapStateToProps=(state:any)=>{
    console.log("finally",state.valid)
    let tmp="";
    for(let item of state.customerList){

      //  console.log('this is mainconster',item.userName)
        if(item.userName===state.currentUser){
            tmp=item.firstName+' '+item.lastName;
        }
    }
    return{       
        posts:state.posts,
        valid:state.valid,
        name:tmp

    }
}
const mapDispatchToProps =(dispatch:any)=>{

    return{
        fetchIssues:(e:any)=>{
            console.log(e);
            dispatch(fetchIssues(true));
        },
    }   
};

const MainConstainer=connect(mapStateToProps,mapDispatchToProps)(Main);
export default MainConstainer;