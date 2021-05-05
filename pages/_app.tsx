import { ChakraProvider } from "@chakra-ui/react"
// import WithSubnavigation from "./components/menu"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp