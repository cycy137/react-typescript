
import Register from '../Component/Register';
import{connect} from 'react-redux'
import {register} from '../action';
import history from '../history';

const mapStateToProps=(state:any)=>{
    return{
             isMonthPickerVisible: state.isMonthPickerVisible,
             dateRangeType: state.dateRangeType,
             autoNavigateOnSelection: state.autoNavigateOnSelection,
             showGoToToday: state.showGoToToday,
             showNavigateButtons: state.showNavigateButtons,
             highlightSelectedMonth: state.highlightSelectedMonth,
             isDayPickerVisible:state.isDayPickerVisible,
             showMonthPickerAsOverlay:state.showMonthPickerAsOverlay,
             showCloseButton:state.showCloseButton,
             showSixWeeksByDefault: state.showSixWeeksByDefault,
    }
}
const mapDispatchToProps =(dispatch:any)=>{

    return{

        register:(e:any)=>{
            e.preventDefault();
            console.log(e.target[1],e.target[2],e.target[48],e.target[49],e.target[53].value,e.target[53]);
            if(e.target[1].value===e.target[2].value){
                let bod=e.target[6].value.split(',')[0];
                console.log(e.target[6].value.split(',')[0])

                let tmp={'userName':e.target[0].value,'password':e.target[1].value,'firstName':e.target[3].value,'lastName':e.target[4].value,'cellphone':e.target[5].value,'bod':bod,'address':e.target[46].value,'zipcode':e.target[47].value,'gender':e.target[52].value,'contry':e.target[53].value,'countryState':e.target[54].value,'admin':false}
                console.log(tmp);
                dispatch(register(tmp));
    
                    history.push("/main");
            } 
            else{

            }       
        }
    }
};

const RegisterContainer=connect(mapStateToProps,mapDispatchToProps)(Register);
export default RegisterContainer;