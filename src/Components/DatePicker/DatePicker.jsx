
import {  Box, Button, Space } from '@mantine/core';
import { DatePicker } from '@mantine/dates'
import { useEffect, useMemo, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux'
import { FaArrowCircleRight } from "react-icons/fa";
import { DateFormat } from '@/utils/DateFormat';

export const DateRangePicker=()=>{
    const dispatch=useDispatch()
    const SearchReducer = useSelector((state) => state.SearchReducer);


    const DatePickerShow=()=>{
        if(SearchReducer.Date){
            if(SearchReducer.Date[0]&&SearchReducer.Date[1]){return true}else return false
        }

    }

    const Nextbtn=()=>{
        dispatch({type:"Calender",payload:false})
        dispatch({type:"Guest",payload:true})
    }
    
    return(
        <>
<Box m='auto'
w='400px'
style={{border:"0px solid red",

}}


>
<DatePicker 
c='red'
size='lg'
ml='20px'
hidden={!SearchReducer.ShowCalender}
type='range' 
value={SearchReducer.Date}  
onChange={(e)=>dispatch({type:"Date",payload:e})}
minDate={new Date()}
style={{border:"0px solid red"}}

/>
<Space h='md'/>
{SearchReducer?.ShowCalender?
    <Button
    onClick={Nextbtn}
    fullWidth
    bg='red'
    style={{
        borderRadius:"40px"
    }}
    rightSection={<FaArrowCircleRight/>}
    >Next</Button>
:null}
    </Box>
    </>)
}