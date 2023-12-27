import { ActionIcon, Box, Card, Divider, Flex, Text, Button } from "@mantine/core"
import { useForm } from "@mantine/form"
import { useEffect } from "react"
import { FaArrowCircleLeft } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"

export const GuestSelector = () => {
  const { SearchReducer } = useSelector((store) => store)
  const dispatch = useDispatch()

  const Backbtn = () => {
    dispatch({ type: "Calender", payload: true })
    dispatch({ type: "Guest", payload: false })
  }

  const Guests = useForm({
    initialValues: {
      Adults: 0,
      Childrens: 0,
      Infants: 0,
      Pets: 0,
    },
  })
  const SelectorField = [
    {
      title: "Adults",
      subTitle: "Ages 13 or above",
      val: Guests.values.Adults,
    },
    { title: "Childrens", subTitle: "Ages 2-12", val: Guests.values.Childrens },
    { title: "Infants", subTitle: "Under 2", val: Guests.values.Infants },
    {
      title: "Pets",
      subTitle: "Bringing a service animals",
      val: Guests.values.Pets,
    },
  ]

  const HandleAddGuests = (field, val) => {
    const Initial = Guests.values[field]
    Guests.setFieldValue(field, Initial + 1)
  }

  const HandleReduceGuests = (field, val) => {
    const Initial = Guests.values[field]
    if (Initial != 0) {
      Guests.setFieldValue(field, Initial - 1)
    }
  }

  useEffect(() => {
    dispatch({ type: "GuestQty", payload: Guests.values })
  }, [Guests.values])
  return (
    <>
      {SearchReducer.ShowGuestSelector ? (
        <Card withBorder m='auto' w='400px' style={{ borderRadius: "20px" }}>
          {SelectorField?.map((selector, index) => (
            <>
              <Flex key={index} justify='space-between' m='10px 10px 20px 10px'>
                <Box>
                  <Text fw={600}>{selector?.title}</Text>
                  <Text fw={500} c='dimmed'>
                    {selector?.subTitle}
                  </Text>
                </Box>
                <Flex justify='space-between' w='80px'>
                  <ActionIcon
                    variant='default'
                    style={{ borderRadius: "50%" }}
                    onClick={() => HandleReduceGuests(selector.title)}
                  >
                    -
                  </ActionIcon>
                  <Text>{selector?.val}</Text>
                  <ActionIcon
                    variant='default'
                    style={{ borderRadius: "50%" }}
                    onClick={() => HandleAddGuests(selector.title)}
                  >
                    +
                  </ActionIcon>
                </Flex>
              </Flex>
              {index == SelectorField.length - 1 ? null : <Divider />}
            </>
          ))}
          <Button
            onClick={Backbtn}
            bg='red'
            leftSection={<FaArrowCircleLeft />}
            style={{
              borderRadius: "40px",
            }}
          >
            Back
          </Button>
        </Card>
      ) : null}
    </>
  )
}
