import React from 'react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { DetailsList, DetailsListLayoutMode, Selection, IColumn, IDetailsRowStyles, DetailsRow } from 'office-ui-fabric-react/lib/DetailsList';
import { MarqueeSelection } from 'office-ui-fabric-react/lib/MarqueeSelection';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { mergeStyles } from 'office-ui-fabric-react/lib/Styling';
import { getTheme } from 'office-ui-fabric-react/lib/Styling';

const theme = getTheme();

const exampleChildClass = mergeStyles({
    display: 'block',
    marginBottom: '10px'
  });
  
interface IDetailsListBasicExampleItem {
    key: number;
    userName: string;
    value: number;
  }
  
interface IDetailsListBasicExampleState {
    items: IDetailsListBasicExampleItem[];
    selectionDetails: {};
  }
interface MyProps{
    customerList:[],
    serchitem:string|undefined,
    valid:boolean,
    admin:boolean
}  
interface ITEM{
    userName:string,
    bod:string,
    contry:string,
    countryState:string,
    gender:string,
    cellphone:string
}
class CustomerList extends React.Component<MyProps, IDetailsListBasicExampleState>{
        private _columns: IColumn[];
        private _selection: Selection;
        private _allItems: IDetailsListBasicExampleItem[];

        constructor(props:any){
            super(props);   
            this._columns = [
                { key: 'column1', name: 'username', fieldName: 'userName', minWidth: 10, maxWidth: 200, isResizable: true },
                { key: 'column2', name: 'Date of Birth', fieldName: 'bod', minWidth: 20, maxWidth: 200, isResizable: true },
                { key: 'column3', name: 'Country', fieldName: 'contry', minWidth: 20, maxWidth: 200, isResizable: true },
                { key: 'column4', name: 'State', fieldName: 'countryState', minWidth: 20, maxWidth: 200, isResizable: true },
                { key: 'column5', name: 'Gender', fieldName: 'gender', minWidth: 20, maxWidth: 100, isResizable: true },
                { key: 'column6', name: 'Cellphone', fieldName: 'cellphone', minWidth: 20, maxWidth: 200, isResizable: true },
                
              ];
            this._selection = new Selection({
            onSelectionChanged: () => this.setState({ selectionDetails: this._getSelectionDetails() })
            });    
            this._allItems = this.props.customerList;
            this.state = {
                items: this._allItems,
                selectionDetails: this._getSelectionDetails()
              };        
        }
        render(){
            const { items, selectionDetails } = this.state;

            
            if(this.props.valid && this.props.admin){
                return(
                    <Fabric>
                    <div className={exampleChildClass}>{selectionDetails}</div>
                    <TextField
                    className={exampleChildClass}
                    label="Search by username:"
                    onChange={this._onFilter}
                    styles={{ root: { maxWidth: '300px' ,marginLeft:'auto',marginRight:'auto'} }}
                    />
                    <MarqueeSelection selection={this._selection}>
                    <DetailsList
                        items={items}
                        columns={this._columns}
                        setKey="set"
                        layoutMode={DetailsListLayoutMode.fixedColumns}
                        selection={this._selection}
                        onRenderRow={this._onRenderRow}
                        selectionPreservedOnEmptyClick={true}
                        ariaLabelForSelectionColumn="Toggle selection"
                        ariaLabelForSelectAllCheckbox="Toggle selection for all items"
                        onItemInvoked={this._onItemInvoked}
                    />
                    </MarqueeSelection>
                </Fabric>
                )
            }
            else if(this.props.valid && !this.props.admin){
                return(
                    <div>please login by administrator account!</div>
                )
            }
            else{
                console.log('it happen')
                return(
                    <div>please login first!</div>
                )
            }
        }

        private _getSelectionDetails(): string {
            const selectionCount = this._selection.getSelectedCount();
        
            switch (selectionCount) {
              case 0:
                return 'No items selected';
              case 1:
                return '1 item selected: ' + (this._selection.getSelection()[0] as IDetailsListBasicExampleItem).userName;
              default:
                return `${selectionCount} items selected`;
            }
          }
    
        private _onFilter = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,text: string|undefined)=> {
        if(text){
            console.log(this._allItems)
            this.setState({items:this._allItems.filter(i => i.userName.toLowerCase().indexOf(text) > -1)})
        }
        else{
            this.setState({items:this._allItems});
        }

        };
        private _onRenderRow = (props: any): JSX.Element => {
        const customStyles: Partial<IDetailsRowStyles> = {};
        if (props.itemIndex % 2 === 0) {
            // Every other row renders with a different background color
            customStyles.root = { backgroundColor: theme.palette.themeLighterAlt };
        }
    
        return <DetailsRow {...props} styles={customStyles} />;
        };
        private _onItemInvoked = (item: IDetailsListBasicExampleItem): void => {
        alert(`Item invoked: ${item.userName}`);
        };
        

      
};

export default CustomerList;