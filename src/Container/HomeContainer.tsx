
import Home from '../Component/Home';
import{connect} from 'react-redux'
import {submit} from '../action';
import history from '../history';

const mapStateToProps=(state:any)=>{
        if(state.valid){
            history.push("/main");
        }
        
    return{}
}
const mapDispatchToProps =(dispatch:any)=>{

    return{

        submmit:(e:any)=>{
            e.preventDefault();
            console.log('submit',e)
            dispatch(submit(e.target[0].value,e.target[1].value))
            
                
            
        },
        toregister(){
            history.push("/register");
        }
    }
};

const HomeConstainer=connect(mapStateToProps,mapDispatchToProps)(Home);
export default HomeConstainer;