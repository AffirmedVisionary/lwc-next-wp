import PropType from "prop-types";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

MyApp.propTypes = {
  Component: PropType.func,
  pageProps: PropType.object,
};

export default MyApp;
