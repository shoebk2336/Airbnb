import { ActionIcon, TextInput } from "@mantine/core"
import { IoSearchSharp } from "react-icons/io5"
import { DateRangePicker } from "../DatePicker/DatePicker"
import { useDispatch, useSelector } from "react-redux"

export const Searchbar = ({ Searchbtn }) => {
  const dispatch = useDispatch()
  const { SearchReducer } = useSelector((state) => state)
  console.log(SearchReducer.Search)

  const HandleSearchbtn = () => {
    dispatch({ type: "Guest", payload: false })
    dispatch({ type: "Calender", payload: false })
    Searchbtn()
  }
  const HandleSearchonChange = (e) => {
    dispatch({ type: "SearchVal", payload: e.target.value })
    dispatch({ type: "Calender", payload: true })
  }

  return (
    <>
      <TextInput
        size='lg'
        onChange={(e) => HandleSearchonChange(e)}
        w={{ sm: "550px", base: "100%" }}
        style={{ border: "0px solid red" }}
        styles={{
          input: { borderRadius: "30px", fontSize: "80%" },
        }}
        placeholder='Search your dream place'
        rightSection={
          <ActionIcon onClick={HandleSearchbtn} size='42px' color='red' m='20px' style={{ borderRadius: "50%" }}>
            <IoSearchSharp />
          </ActionIcon>
        }
      />
    </>
  )
}
