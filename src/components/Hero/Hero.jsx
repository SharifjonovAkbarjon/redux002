import { Button } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'

const Hero = () => {
    const dispatch = useDispatch()
    return (
        <>
            <div>
                <h2>Hero</h2>
                <Button onClick={()=> dispatch({type:"INC", payload:1})}>Increment</Button>
                <Button onClick={()=> dispatch({type:"INC", payload:10})}>Increment</Button>
                <Button onClick={()=> dispatch({type:"DEC"})}>Decrement</Button>
                <Button onClick={()=> dispatch({type:"RESET"})}>Reset</Button>
            </div>
        </>
    )
}

export default Hero