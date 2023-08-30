import {Button} from '@mui/material'
type propstype ={
    variant : any
    color:any
    text:string
    onclick:()=> void
    
}
function Cmbutton(props:propstype){
    let {variant,color,text,onclick}=props
    return<>
<Button variant={variant} color={color} onClick={onclick}>
  {text}
</Button>
    </>
}

export default Cmbutton