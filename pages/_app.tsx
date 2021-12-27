import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
// theme
import { alecrimTheme } from '../theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={alecrimTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp
