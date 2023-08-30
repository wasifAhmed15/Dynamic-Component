import {} from '@mui/material'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import SelectData from './component/Selectdata';
import TextFieldinp from './component/input';
import Cmbutton from './component/Button';
import DynamicTabel from './component/DynamicTabel';
function App() {
  let renderQ = (e:any)=>{
    console.log(e)
  }
  
  
  
  const columns = [
    { heading: 'Column 1' },
    { heading: 'Column 2' },
    // ...more column definitions
  ];
  
  const rows = [
    { 'Column 1': 'Value 1', 'Column 2': 'Value 2' },
    { 'Column 1': 'Value 3', 'Column 2': 'Value 4' },
    // ...more row data
  ];
  return (
 <>
<SelectData id='Gender' label='Gender' option={[

  {
displayname:"Male",
value:"Male"
  },

  {
    displayname:"Fmale",
    value:"Fmale"
      },
]}  getval={renderQ}/>



<TextFieldinp label='Name' id='UserName' variant={"standard"} />

<Cmbutton  variant={"contained"} color="secondary" text='Send' onclick={()=>{console.log("hello")}}/>

<div>
            <DynamicTabel row={rows} col={columns} />
        </div>

 </>
  );



}

export default App;
