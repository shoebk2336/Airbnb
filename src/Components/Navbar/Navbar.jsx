import { Box, Button, Text } from "@mantine/core"
import Image from "next/image"
import { Searchbar } from "../Searchbar/Searchbar"
import { SlGlobe } from "react-icons/sl"
import { RxHamburgerMenu } from "react-icons/rx"
import { FaUserCircle } from "react-icons/fa"
import { DateRangePicker } from "../DatePicker/DatePicker"
import { GuestSelector } from "../GuestSelector/GuestSelector"
import { useViewportSize } from "@mantine/hooks"

export const Navbar = ({ Searchbtn }) => {
  const { width, height } = useViewportSize()
  return (
    <>
      <Box
        display='flex'
        style={{
          border: "0px solid red",
          justifyContent: "space-between",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <Image
          src='data:image/png;base64,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'
          width={100}
          height='30'
        />
        <Box className='searchbar' display='flex'>
          <Searchbar Searchbtn={Searchbtn} />
        </Box>

        {width > 900 ? (
          <Box
            className='right-section'
            display='flex'
            w='250px'
            h='10%'
            style={{
              justifyContent: "space-between",
              border: "0px solid red",
              alignItems: "center",
            }}
          >
            <Text size='14px' fw='600'>
              Airbnb your home
            </Text>
            <SlGlobe />
            <Button
              variant='default'
              styles={{
                root: { height: "40px", borderRadius: "40px", padding: "6px" },
              }}
            >
              <RxHamburgerMenu size='22px' />
              <FaUserCircle size='22px' style={{ marginLeft: "5px" }} />
            </Button>
          </Box>
        ) : null}
      </Box>
    </>
  )
}
