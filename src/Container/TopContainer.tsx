import React from 'react';
import { Route,Router } from 'react-router-dom';
import HomeConstainer from './HomeContainer';
import HeadContainer from './HeadContainer';
import MianContainer from './MainContainer';
import RegisterContainer from './RegisterContainer';
import CalculatorContainer from './CalculatorContainer';
import CustomerListContainer from './CustomerListContainer';
import history from '../history';


export default class Index extends React.Component{
    render(){
        const bodyStyle=()=>{
            return{
                backgroundColor: '#F2F1D7',
                zIndex: 10000,
                height:'90vh',
                alignContent: 'center'
            }
        }
        return(
            <div>
                            
            <Router history={history}>
                
                <HeadContainer ></HeadContainer>              
                <body style={bodyStyle()}>
                    <Route exact  path="/" component={HomeConstainer}></Route>
                    <Route path="/main" component={MianContainer}></Route>
                    <Route path="/calculator" component={CalculatorContainer}></Route>
                    <Route path="/register" component={RegisterContainer}></Route>
                    <Route path="/customerlist" component={CustomerListContainer}></Route>
                </body>

            </Router>
            </div>
        );
    }
}