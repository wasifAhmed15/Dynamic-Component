import {TextField} from '@mui/material'
type propstype={
     id:string
     label:string
     variant:any

}

function TextFieldinp (props:propstype){
let {id,label,variant}=props
    return <>
    <label htmlFor={id}>{label}</label>

<TextField id={id} label={label} variant={variant} />

    </>
}
export default TextFieldinp 