import { IButtonStyles } from 'office-ui-fabric-react/lib/Button';
import { IChoiceGroupOptionStyles } from 'office-ui-fabric-react/lib/ChoiceGroup';
export interface IComponentClassNames {
    root: any;

  }
  export interface controlClassNames {

    controlUser:any;
  }
  export const getClassNames = (): IButtonStyles => {
      return {
        root: {
          background: 'red',
          display:'inline-block',
          textAlign:'center'
        },
    }
  };
  export const controlGroup = (): IChoiceGroupOptionStyles => {
    return {
        root: {
            
            display:'block'
          }, 
  }
};
export const textControl = ():  any => {
    return{
        root:{
           
           width:'33%',
           display:'inline-block',
           margin:25
        }
    }
};
