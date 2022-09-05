import React, { useState } from 'react'
//params 
import { useParams } from 'react-router-dom'
//mui icons  
import Rating from '@mui/material/Rating';
//api request
import { public_request } from '../../util/requestMethods'
function RatingComponent() {
    const [value, setValue] = useState(0);
    const param = useParams();
    const addView = async (e, starsNumber) => {
        e.preventDefault();
        await public_request.put(`product/view/${param?.id}`, {
            starsNumber
        }).then(res => console.log(res.data))
            .catch(err => console.log(err))
    }
    return (
        <>
            <Rating
                name="simple-controlled"
                value={value}
                onClick={(e) => addView(e, value)}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
        </>
    )
}

export default RatingComponent