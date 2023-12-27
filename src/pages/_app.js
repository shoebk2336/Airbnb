import store from "@/Components/Redux/store"
import { MantineProvider } from "@mantine/core"
import "@mantine/core/styles.css"
import "@mantine/dates/styles.css"
import "mapbox-gl/dist/mapbox-gl.css"
import { Provider } from "react-redux"

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
    <MantineProvider>
    <Component {...pageProps} />
    </MantineProvider>
    </Provider>)
}
