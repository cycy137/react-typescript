
import Calculator from '../Component/Calculator';
import{connect} from 'react-redux'
import {increment,decrement} from '../action'

const mapStateToProps=(state:any)=>{
    return{

        totalNumber:state.number
    }
}
const mapDispatchToProps =(dispatch:any)=>{

    return{

        increment:(e:any)=>{
            e.preventDefault();
            console.log(e);
            dispatch(increment(e))

        },
        decrement:(e:any)=>{
            e.preventDefault();
            console.log(e);
            dispatch(decrement(e))

        }

    }
};

const CalculatorContainer=connect(mapStateToProps,mapDispatchToProps)(Calculator);
export default CalculatorContainer;