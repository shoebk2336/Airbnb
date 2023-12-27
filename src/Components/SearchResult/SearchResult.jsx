import { Flex, SimpleGrid,Box } from "@mantine/core"
import { HotelCard } from "../Card/HotelCard"
import { MapBox } from "../Map/Map"
import { useSelector } from "react-redux"



export const SearchResult=()=>{
    const {SearchReducer}=useSelector(store=>store)

    return(<>
        <Box
        
        >
        <Flex>
        <SimpleGrid cols={2}>
        {SearchReducer?.Api?.map((Hotel)=>
            <HotelCard key={Hotel.id} Hotel={Hotel}/>
            )}
            </SimpleGrid>
            
            <Box className='mapsection'
            style={{border:"0px solid red",minheight:"2000px"}}
            w='60%'
            mt='12px'
            >
            <MapBox Data={SearchReducer?.Api} />
            </Box>
            </Flex>
            </Box>
            </>)
}