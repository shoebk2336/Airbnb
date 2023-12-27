import Head from "next/head"
import Image from "next/image"
import { Inter } from "next/font/google"
import { useEffect } from "react"
import { MantineProvider } from "@mantine/core"
import  Landing  from "./Landing/Landing"
import { Provider } from "react-redux"
import store from "@/Components/Redux/store"
import { DataFetch } from "@/utils/Fetch/DataFetch"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  const url =
    "https://airbnb13.p.rapidapi.com/search-location?location=jalgaon&checkin=2023-12-25&checkout=2023-12-27&adults=1&children=0&infants=0&pets=0&page=1&currency=USD"
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ba2a8975c0msh373e536e28ccc29p1c42b9jsn62c1c92f0723",
      "X-RapidAPI-Host": "airbnb13.p.rapidapi.com",
    },
  }
  const Fetch = async () => {
    const data = await fetch(url, options)
    const res = await data.json()
    console.log(res)
  }
  useEffect(() => {
    // Fetch()
  }, [])

  return (
    <>
      <Provider store={store}>
        <MantineProvider>
          <Landing />
        </MantineProvider>
      </Provider>
    </>
  )
}
