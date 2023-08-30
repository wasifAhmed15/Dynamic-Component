

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

type propstype={
    row:any[]
    col:any[]
}
function DynamicTabel(props:propstype) {
    // let {row,col}=props
    return <>

<TableContainer component={Paper}>
<Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
<TableHead>
{
    props.col.map((x,i)=>{
        return <TableCell key={i}>
            {x.heading}
        </TableCell>
    })

}

</TableHead>


<TableBody>
    {
        props.row.map((rowData,rowIndex)=>{
return <TableRow>
    {
        props.col.map((colData,colIndex)=>{
           return  <TableCell key={colIndex}>{rowData[colData.heading]}</TableCell>
        })
    }
</TableRow>
        })
    }
</TableBody>


</Table>


</TableContainer>
    </>
}
export default DynamicTabel