import {Button,Select,InputLabel,FormControl,MenuItem} from '@mui/material'
type propstype={
    id:string
    label:string
    option:Array <{value:string , displayname:string}>
    getval:(e:any)=> void
}

function SelectData(props:propstype) {
    let {id,label,option,getval }=props
    let setdatat = (e:any)=>{
      getval(e)
    }
    return <>
    <FormControl fullWidth>
  <InputLabel id={id}>Age</InputLabel>
  <Select
    labelId={id}
    id={id}
    
    label={label}
    onChange={(e)=>setdatat(e.target.value)}
    >

{
    option.map((x,i)=>{
        return <MenuItem value = {x.value} >{x.displayname}</MenuItem>
    })
    
}
    
  </Select>
</FormControl>
      </>
}



export default SelectData