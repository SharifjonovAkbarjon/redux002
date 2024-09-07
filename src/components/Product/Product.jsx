import React, { useEffect, useState } from 'react'
import axios from '../../api/index'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'antd'



const Product = () => {
    const [data, setData] = useState(null)
    const dispatch = useDispatch()
    const wishlist = useSelector(state=> state.wishlist )
    console.log(wishlist);

    useEffect(()=>{
        axios
            .get("products")
            .then(res => setData(res.data.products))
    }, [])
  return (
    <>
        <div className='container mx-auto flex flex-wrap gap-4'>
            {
                data?.map((el) => (
                    <div className='w-80 p-3' key={el.id}>
                        <img src={el.images} alt="" />
                        <h3>{el.title}</h3>
                        <Button onClick={()=> dispatch({type: "TOGGLE_WISHLIST", payload: el})}>Like</Button>
                    </div>
                ))
            }

        </div>
    </>
  )
}

export default Product