import React from 'react';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { Calendar, DayOfWeek, ICalendarIconStrings } from 'office-ui-fabric-react/lib/Calendar';
import { DateRangeType } from 'office-ui-fabric-react/lib/Calendar';
import { ChoiceGroup, IChoiceGroupOption } from 'office-ui-fabric-react/lib/ChoiceGroup';
import { Dropdown, IDropdown, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { TextField, MaskedTextField } from 'office-ui-fabric-react/lib/TextField';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { getId } from 'office-ui-fabric-react/lib/Utilities';
import { getClassNames,controlGroup,textControl} from './RegisterCss';
import { DefaultPalette } from '@uifabric/styling/lib/styles/DefaultPalette';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
interface MyProps{
    useerro:boolean;
    passworderro:boolean;
    usename:string;
    password:string;
    register():[];
    isMonthPickerVisible?: boolean;
    dateRangeType: DateRangeType;
    autoNavigateOnSelection: boolean;
    showGoToToday: boolean;
    navigationIcons:ICalendarIconStrings;
    showNavigateButtons?: boolean;
    highlightCurrentMonth?: boolean;
    highlightSelectedMonth?: boolean;
    isDayPickerVisible: boolean;
    showMonthPickerAsOverlay: boolean;
    showCloseButton:boolean,
    workWeekDays: DayOfWeek[];

}
export interface ICalendarInlineExampleState {
    selectedDate?: Date | null;
    selectedDateRange?: Date[] | null;
  }
interface MyState{
    username:string;
    password:string;
    useerro:boolean;
    passworderro:boolean;
    selectedDate?: Date | null;
    selectedDateRange?: Date[] | null;
    calendshow:boolean;
    StateList1:any;
    contrySelected:string;
    stateSelected:string;
    genderSelected:string;
    zipcode:string
}
const DayPickerStrings = {
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  
    shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  
    shortDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  
    goToToday: 'Go to today',
    weekNumberFormatString: 'Week number {0}'
  };
const dropdownRef = React.createRef<IDropdown>();
const stateList=[{'China':['Guangxi','Beijng','shanxi']},{'United States':['AK','CA','WA','OH','CO','IL','MO','OR']}];
class Register extends React.Component<MyProps,MyState>{

    constructor(props:any){
        super(props);
        this.state={username:"",password:"1",useerro:false,passworderro:false,calendshow:true,StateList1:[],contrySelected:"",stateSelected:"",genderSelected:"",zipcode:""}
        this._onDismiss = this._onDismiss.bind(this);
        this._onSelectDate = this._onSelectDate.bind(this);

    }
    private _onDismiss(): void {
        this.setState((prevState: MyState) => {
            console.log(prevState);
          return prevState;
        });
    }  
    private _onSelectDate(date: Date): void {
        console.log(date,typeof(date));

        this.setState((prevState: MyState) => {
            return {
            selectedDate: date,         
            };
            });
    }
    private _getUserErrorMessage=(value:string)=>{
        return value.length>1?'':'your username not allowed empty';
    }
    private _getPasswordErrorMessage=(value:string)=>{
        return value.length<6?`your password atleast 7 character. Actual length is ${value.length}.`:'';
    }
    private _testPassword=(event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string)=>{
        if(typeof(newValue)=='string'){
        this.setState({password:newValue});
        }
    }
    private _getPasswordAgainErrorMessage=(value:string)=>{
        if(value.length<6){
            return `your password atleast 7 character. Actual length is ${value.length}.`;
        }       
        else if(value!=this.state.password){
            
            return 'you password twice is not equeal.'
        }
        else{
            return ""
        }
    }
    private _labelId: string = getId('labelElement');
    private _onChange = (ev: any, option: any): void => {
        console.log(option.text);
        if(option){
            this.setState({genderSelected:option.text});
        }
    }; 
    private _chioceCountry=(event: React.FormEvent<HTMLDivElement>, option?: IDropdownOption, index?: number)=>{
            if (option){
            //console.log(option.text,typeof(option));
            
            for(let item of stateList){
                    //console.log(typeof(item))
                if(typeof(item)=='object'){
                    for(let [itemchild,value] of Object.entries(item)){
                            if (itemchild==option.text ){
                                console.log(option.text,typeof(option.text));
                                let tmp=this._supportStateLIst(value);
                                this.setState({StateList1:tmp,contrySelected:option.text});
                            }                       
                    }   
                }    
            }     
            }
    }
    private _chioceState =(event: React.FormEvent<HTMLDivElement>, option?: IDropdownOption, index?: number)=>{
        if(option){
            this.setState({stateSelected:option.text});
        }
    }
    private _supportStateLIst=(input:any)=>{
        let res=[];
        for(let i=0;i<input.length;i++){
            let tmp={'key':i,'text':input[i]};
            res.push(tmp)
        }
        return res
    }
    private _zipCodeControl=(event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string)=>{
        if(typeof(newValue)=='string'){
            if (newValue.length>=6){
                this.setState({zipcode:newValue.substring(0,5)})
                
            }
        }
    }
    userchange=(e:any)=>{
        if(e.target.value.length>0){            
            this.setState({useerro:true})
        }
        else{
            console.log("it work",this.state.useerro)
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
    CalendarContrlor=()=>{
            console.log(this.state.calendshow);
            this.setState({calendshow:!this.state.calendshow})      
    }
  
    render(){
        const styles = mergeStyleSets({
            root: {
              background: DefaultPalette.themeTertiary,
              height: 250
            },    
            item: {
              
              alignItems: 'center',
              justifyContent: 'center',
              background: DefaultPalette.themePrimary,
              color: DefaultPalette.white
            }
          }); 
        let dateRangeString: string | null = null;
        if (this.state.selectedDateRange) {
        const rangeStart = this.state.selectedDateRange[0];
        const rangeEnd = this.state.selectedDateRange[this.state.selectedDateRange.length - 1];
        dateRangeString = rangeStart.toLocaleDateString() + '-' + rangeEnd.toLocaleDateString();
        }
        const controlUser ={
            display: 'inline-block',
            vertical:'top',
            alignItems:"flex-end",
        }
        const controlGender ={
            width:'33%',
            display: 'inline-block',
            marginLeft: 50
        }
        const noneStyle={
            display:'none'
        }
        const registerTitle={
            fontSize:30,
        }
        const cla=()=>{
            return{
                backgroundColor:'bisque',
                textAlign: 'left' as 'left',   
                position:'absolute' as 'absolute',
                width: '220px',
                top:'37%',
                right:'5%',
                zIndex: 10000,
                visibility:this.state.calendshow?'hidden' as 'hidden':'visible' as 'visible'
            }
        }
        const textControlUsername = ():  any => {
            return{
                root:{
                    display: 'block' as 'block',
                    width:'33%',                  
                    margin:25,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }
            }
        };
        return(
        <div className="RegisterBody">
            <span style={registerTitle}>Join US</span>
            <form onSubmit={this.props.register} className='formControl'>
                <Stack  tokens={{ childrenGap: 20 }} className={styles.root}>
                <div style={controlUser}>
                <Stack.Item grow={3} className={styles.item}>
                <TextField label="Username " required onGetErrorMessage={this._getUserErrorMessage}  styles={textControlUsername}/>
                <TextField label="Password" type = 'password' required onChange={this._testPassword} onGetErrorMessage={this._getPasswordErrorMessage} styles={textControl}/>
                <TextField label="Password Again" type = 'password' required  onGetErrorMessage={this._getPasswordAgainErrorMessage} styles={textControl}/>
                </Stack.Item>
                </div>
                <div >
                <h3>Personal Information</h3>
                <TextField label="Firset Name:" required onGetErrorMessage={this._getUserErrorMessage} styles={textControl}/>
                <TextField label="Last Name:" required onGetErrorMessage={this._getUserErrorMessage} styles={textControl}/>
                <MaskedTextField label="Cell Phone Number:" mask=" (999) 999 - 9999" styles={textControl}/>
                <TextField label="Birthday of Date:" iconProps={{ iconName: 'Calendar' }} styles={textControl} onClick={this.CalendarContrlor} value={!this.state.selectedDate ? 'click to select date' : this.state.selectedDate.toLocaleString()}/>               
                <div  style={cla()} >
               
                    <Calendar          
                            onSelectDate={this._onSelectDate}         
                            onDismiss={this._onDismiss}
                            isMonthPickerVisible={this.props.isMonthPickerVisible}
                            dateRangeType={this.props.dateRangeType}
                            autoNavigateOnSelection={this.props.autoNavigateOnSelection}
                            showGoToToday={true}
                            navigationIcons={this.props.navigationIcons}
                            value={this.state.selectedDate!}
                            strings={DayPickerStrings}
                            highlightCurrentMonth={this.props.highlightCurrentMonth}
                            highlightSelectedMonth={this.props.highlightSelectedMonth}
                            isDayPickerVisible={this.props.isDayPickerVisible}
                            showMonthPickerAsOverlay={this.props.showMonthPickerAsOverlay}
                            workWeekDays={this.props.workWeekDays}
                    />
                </div>
                <TextField label="Address:"  styles={textControl}/>
                <TextField label="ZipCode:" value={this.state.zipcode} onChange={this._zipCodeControl} styles={textControl}/>
                <Dropdown 
                    componentRef={dropdownRef}
                    placeholder="Select an option"
                    label="Country"
                    onChange={this._chioceCountry}
                    options={[
                    { key: 'A', text: 'Bahrain',},
                    { key: 'B', text: 'Belize' },
                    { key: 'C', text: 'Bolivia'},
                    { key: 'D', text: 'China' },
                    { key: 'E', text: 'Cyprus' },
                    { key: 'F', text: 'Italy' },
                    { key: 'G', text: 'Malawi' },
                    { key: 'H', text: 'Niue' },
                    { key: 'I', text: 'United States' }
                    ]}                   
                    styles={textControl}
                />
                <Dropdown
                    componentRef={dropdownRef}
                    placeholder="Select an option"
                    label="State"
                    options={this.state.StateList1}                   
                    styles={textControl}
                    onChange={this._chioceState}
                />
                <TextField label="E-mail:" styles={textControl} />
                
                <div style={controlGender}>
                    Gender:
                    <ChoiceGroup styles={controlGroup}
                        defaultSelectedKey="A"
                        options={[
                            {
                            key: 'A',
                            text: 'Male',
                            'data-automation-id': 'auto1'
                            } as IChoiceGroupOption,
                            {
                            key: 'B',
                            text: 'Female'
                            },
                            {
                            key: 'C',
                            text: "Don't want to answer",                        
                            },
                        ]}
                        onChange={this._onChange}
                        ariaLabelledBy={this._labelId}
                        required={true}
                    />
                </div>
                </div>
                <input value={this.state.genderSelected} style={noneStyle}/>        
                <input value={this.state.contrySelected} style={noneStyle}/>
                <input value={this.state.stateSelected} style={noneStyle}/>
                <Stack.Item grow={3} >                
                <PrimaryButton type="submit"  styles={getClassNames()}>Create an account</PrimaryButton>
                </Stack.Item>
                </Stack>
            </form>    
            
        </div>
        )
    }
    
}

export default Register;