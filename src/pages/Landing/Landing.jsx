import { DateRangePicker } from '@/Components/DatePicker/DatePicker'
import { GuestSelector } from '@/Components/GuestSelector/GuestSelector'
import { Navbar } from '@/Components/Navbar/Navbar'
import { Box, Container, Divider, Flex, SimpleGrid, Space, Title,useViewportSize } from '@mantine/core'
import { useDispatch, useSelector } from 'react-redux'
import { FetchData } from '@/utils/Fetch/DataFetch'
import { useEffect, useState } from 'react'
import { DateFormat } from '@/utils/DateFormat'
import { HotelCard } from '@/Components/Card/HotelCard'
import {  MapBox } from '@/Components/Map/Map'
import { getCenter } from 'geolib'
import { SearchResult } from '@/Components/SearchResult/SearchResult'


export const Landing = () => {

const dispatch=useDispatch()
const { SearchReducer } = useSelector(store => store)
console.log(SearchReducer)


const ApiData={
    search:SearchReducer.Search,
    checkin:SearchReducer.Date[0]&&DateFormat(SearchReducer.Date[0]),
    checkout:SearchReducer.Date[0]&&DateFormat(SearchReducer.Date[1]),
}
// console.log(ApiData,'apidata')

    const Searchbtn=async()=>{
        const result=await FetchData(ApiData)
        if(result){
            dispatch({type:"Api",payload:result})
        }
    }

    useEffect(()=>{
        const DataForLanding=async()=>{
            const result=await FetchData()
            console.log(result,'fetch')
            if(result){    
                dispatch({type:"Landing",payload:result})
            }
        }
        DataForLanding()
    },[])

    const MapDataLandingPage=SearchReducer?.Landing?.map((Hotel)=>
    
        <HotelCard key={Hotel.id} Hotel={Hotel}/>
        
    )

return (
    <>
    <Container size='xl' mt='30px'>
        <Navbar Searchbtn={Searchbtn} />
        <Space h='md' />
        <Divider />
        <Space h='md' />
        {SearchReducer.Search ? <DateRangePicker /> : null}
        <GuestSelector />
        <Space h='md' />
        {SearchReducer?.Api.length>0?
            <SearchResult/>:
            <SimpleGrid cols={{sm:3,base:1}}>
            {MapDataLandingPage}
            </SimpleGrid>
        }
        
    </Container>
    </>
)
}




