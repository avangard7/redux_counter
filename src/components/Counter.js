import React from "react";
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../action/CounterAction";

export function Counter() {
      const dispatch = useDispatch()   
      const count = useSelector((state) => state);    

    return (
        <div 
          style={{ 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center", 
            minHeight: "100vh" 
          }}
        >
            <Button onClick={()=>dispatch(increment())} variant="contained" size="large">+</Button>
            <span>{ count }</span>
            <Button onClick={()=>dispatch(decrement())} variant="contained" size="large">-</Button>
        </div>
    );
}
