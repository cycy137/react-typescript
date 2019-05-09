import React from 'react';
import {CompoundButton } from 'office-ui-fabric-react/lib/Button';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
interface state{
    useerro:boolean,
    username:string,
    password:boolean,
    passworderro:boolean
}
class Home extends React.Component<any,state>{

    constructor(props:any){
        super(props);
        this.state={username:"",password:true,useerro:false,passworderro:false}
    }
    userchange=(e:any)=>{
        if(e.target.value.length>0){
            this.setState({useerro:true})
        }
        else{           
            this.setState({useerro:false})
        }
    }
    passwordchange=(e:any)=>{
        //console.log(e.target.value)
        if(e.target.value.length<7){
            this.setState({passworderro:false})
        }
        else{
            this.setState({passworderro:true})
        }
    }
    private _getUserErrorMessage=(value:string)=>{
        return value.length>1?'':'your username not allowed empty';
    }
    private _getPasswordErrorMessage=(value:string)=>{
        return value.length<6?`your password atleast 7 character. Actual length is ${value.length}.`:'';
    }

    private _tes=(e:any)=>{
        e.preventDefault();
        if(!this.props.valid){
            this.setState({password:false})
        }
        return this.props.submmit(e)
    }
    render(){
        const buttonControl={
            root:{
                width:'10%',
                height:'50',
                marginLeft:25,
                marginTop:20,
            }
        }
        const cla1=()=>{
            return{
                display:' block',
                color:'red',
                fontSize: '80%',
                visibility:this.state.password?'hidden' as 'hidden': 'visible' as 'visible',

            }
        } 
        const textHomeControl = ():  any => {
            return{
                root:{               
                   display:'block',
                   margin:25,
                   textAlign: 'center',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    width: '33%'
                }
            }
        }; 
   
        return(
        <div>
            <form onSubmit={this._tes} >

                <TextField label="Username " required onGetErrorMessage={this._getUserErrorMessage}  styles={textHomeControl}/>
                <TextField label="Password" type = 'password' required  onGetErrorMessage={this._getPasswordErrorMessage} styles={textHomeControl}/>
                <br/>
                <strong style={cla1()}>sorry,your password or usernmae not correct please try again</strong>
                <br/>
                <div className='buttonsControl'>
                <CompoundButton  primary={true} type="submit" styles={buttonControl}  >Login</CompoundButton>
                <CompoundButton primary={true} onClick={this.props.toregister} styles={buttonControl}>
                Register
                </CompoundButton>    
                </div>
            </form>
                
        </div>
        )
    }
}
export default Home;