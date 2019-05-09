import React from 'react';
import { Text } from 'office-ui-fabric-react/lib/Text';

interface MainType{
    posts:Item[],
    ListItem:[],
    item:{},
    body:string,
    items:Object,
    valid:boolean,
    name:string
}

interface Item {
    id: number,
    body:string,
    title:string
}

class Main extends React.Component<MainType,any>{

    async componentDidMount(){
        if(this.props.valid){
        const { fetchIssues}:any = this.props
         await fetchIssues();
        }

    }
   
    render(){
        const Main={
            listStyleType:'none'
        }
        const aControl={         
            textDecoration: 'none',
            color:'black',

        }
        const textControl=()=>{
            return{
                root:{
                    selectors:{
                        ':hover':{
                            backgroundColor:'#f4f4f4'
                        }
                    }
                }
            }
        }
        const welControl={
            
            fontStyle: 'oblique',
            fontSize:50
        }
        const ListItem= this.props.posts.map(item=>{
            return <li className='ms-ListGridExample item' key={item.id}> <a href='#' style={aControl}><Text styles={textControl} variant={'large'}>{item.title}</Text></a></li>
        });
        if(this.props.valid){
        return(
            <div >
            
                
                <strong style={welControl}>Welcome {this.props.name}</strong>
                <ul style={Main}>
                   { ListItem}
                </ul>
            </div>
            );
        }
        else{
            return(
                <div>please login first!</div>
            )
        }
    }


}
export default Main;