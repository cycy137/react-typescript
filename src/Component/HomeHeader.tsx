import React from 'react';
import { Link } from 'office-ui-fabric-react/lib/Link';
import history from '../history';
interface Myprops{
  signout():any,
  toMain():any,
  valid:boolean,
  tmp:string,
}
interface MyState{
  flag:boolean
}



class HomeHeader extends React.Component<Myprops,MyState>{
    constructor(props:Myprops){
      super(props);
      this.state={flag:false}
    }
    private _mouseControl=()=>{
        this.setState({flag:!this.state.flag})
    }

    render(){
      const HeaderControl=()=>{
        return{
          backgroundColor:'rgb(101, 133, 236)',
          height: '15vh'
         
        }
      }
      const LinkLeftControl=()=>{   
        return{
          root: {
          fontSize: '120%',
          marginLeft: '2%',
          marginRight: '1%',
          lineHeight:'15vh',
          float:'left' as 'left',
          textDecoration: 'none',
          color: 'rgb(46, 45, 45)',
          selectors:{
            ':hover':{
              fontSize:'135%',
              color: 'lightyellow'
            }
          }       
        }
      }
    }
    const LinkrightControl=()=>{    
      LinkLeftControl()
      return {       
        root:{         
          fontSize: '120%',
          marginLeft: '2%',
          marginRight: '1%',
          lineHeight:'15vh',
          textDecoration: 'none',
          color: 'rgb(46, 45, 45)',
          selectors:{
            ':hover':{
              fontSize:'135%',
              color: 'lightyellow'
            }
          } ,              
          float:'right' as 'right',
          display: this.props.valid ? 'none'as 'none' : 'inline' as'inline'
        }
      }     
    }
    const signOutControl=()=>{
      return {       
        root:{         
          fontSize: '120%',
          marginLeft: '2%',
          marginRight: '1%',
          lineHeight:'15vh',
          textDecoration: 'none',
          color: 'rgb(46, 45, 45)',
          selectors:{
            ':hover':{
              fontSize:'135%',
              color: 'lightyellow'
            }
          } ,              
          float:'right' as 'right',
          display: this.props.valid ?  'inline' as'inline' :'none'as 'none'
        }
      }  
    }
    const spanControl=()=>{
      return  {

        
        marginRight: '1%',
        lineHeight:'15vh',
        color: 'aliceblue',
        fontSize:'150%',marginLeft: '4%',
        float:'right' as 'right',
        display: this.props.valid ?  'inline' as'inline' :'none'as 'none'
      }
    }
      return(
        <div style={HeaderControl()}>
        <Link    styles={LinkLeftControl()} onClick={this.props.toMain} >Home</Link>  
        <Link  styles={LinkLeftControl()} onClick={()=>{history.push("/calculator")}}>Calculator</Link>       
        <Link  styles={LinkLeftControl()} onClick={()=>{history.push("/customerlist")}}>Customerlist</Link>

        
        <Link  styles={LinkrightControl()} onClick={()=>{history.push("/")}}>Sign In</Link> 
        <Link  styles={LinkrightControl()} onClick={()=>{history.push("/register")}}>Sign Up</Link>
        
        <Link  styles={signOutControl()}  onClick={this.props.signout}>sign out</Link>    
        <span  style={spanControl()}  >{this.props.tmp}</span>    
      </div>
      )
    }


      
}

export default HomeHeader
      // const claend=() : IStyleFunctionOrObject<ILinkStyleProps, ILinkStyles> =>{
      //   LinkrightControl()
      //   return{
      //     root: {
      //       fontSize: '120%',
      //       marginLeft: '2%',
      //       marginRight: '1%',
      //       lineHeight:'15vh',
      //       float:'right',
      //       color: 'rgb(46, 45, 45)',
      //       selectors:{
      //         ':hover':{
      //           fontSize:'20px',
      //           color: 'lightyellow'
      //         }
      //       },
      //       display: this.props.valid ? 'none' : 'inline'
      //     }
      //   }
      // }