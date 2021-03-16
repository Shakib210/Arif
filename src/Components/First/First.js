import { Button, Typography } from '@material-ui/core'
import React,{useEffect, useState} from 'react'

const First = () => {
    const [value, setValue] = useState(0)
    const sum=()=>{
        setValue(value+1)
    }

    console.log(value)
    return (
        <div>
             <Typography><Button onClick={sum}>+</Button><span>{value}</span><Button onClick={()=>{value>0 && setValue(value-1)}}>-</Button>  </Typography>
        </div>
    )
}

export default First
