import {signout} from '../action/index';
import { connect } from 'react-redux';
import HomeHeader from '../Component/HomeHeader';
import history from '../history';
function mapStateToProps(state:any) {
    let tmp="";
    
    for(let item of state.customerList){
        if(item.userName===state.currentUser){
            tmp=item.firstName+' '+item.lastName;
        }
      }    
    return { valid:state.valid,tmp:tmp };
  };
  
 
  function mapDispatchToProps(dispatch:any){  
    return{
        toMain:()=>{
          history.push("/main");
        },
        signout:()=>{
            console.log("mapDispatchToProps work");
            dispatch(signout());
            history.push("/");
        }
       
    }
  };
  const HeadContainer=connect(mapStateToProps,mapDispatchToProps)(HomeHeader);
  export default HeadContainer;
  