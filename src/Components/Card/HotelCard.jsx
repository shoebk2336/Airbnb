import { Badge, Card, Flex, Rating, Space, Text } from "@mantine/core"
import { BsCurrencyRupee } from "react-icons/bs";
import { FaMapMarker } from "react-icons/fa";
import { FaBed } from "react-icons/fa";
import { Image } from "@mantine/core";


export const HotelCard=({Hotel})=>{
    const {name,address,discount_percentage,original_price,
        discounted_price,
        number_of_beds,beds,
        image_url
    }=Hotel
    return(<>
        <Card shadow="md"
        h='400px'
        >
        <Image
        src={image_url}
        w={300}
        h={200}
        />
        <Space h='lg'/>
        <Flex
        justify='space-between'
        >
        <Text fw={600} size="18px">{name} in {address?.city}</Text>
        <Rating defaultValue={2} />
        </Flex>
        <Space h='lg'/>
        <Text c='dimmed'
        display='flex'
        style={{alignItems:"center",gap:"10px"}}
        >
        <FaMapMarker/>
        {address?.street}</Text>
        <Text  c='dimmed'
        display='flex'
        style={{alignItems:"center",gap:"10px"}}
        >
        <FaBed/>
        {beds} {number_of_beds} beds</Text>
        
        <Flex gap='10px'>
        <Text  c='dimmed'
        size="14px"
        fw={500}
        display='flex'
        td={'line-through'}
        style={{alignItems:"center"}}
        >
        <BsCurrencyRupee/>
        {original_price*10}</Text>
        <Text
        display='flex'
        size="14px"
        fw={500}
        style={{alignItems:"center"}}
        >
        <BsCurrencyRupee/>
        {discounted_price*10} night</Text>
        <Badge>{discount_percentage}%</Badge>
        </Flex>
        </Card>
        
        </>)
}