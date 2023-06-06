import { ChakraBaseProvider } from "../node_modules/@chakra-ui/react/dist/chakra-provider"
import customTheme from './styles/theme';
import "@fontsource/inter";
import "@fontsource/lexend"; 

function App() {
  return (
    <ChakraBaseProvider theme={customTheme}>
    </ChakraBaseProvider>
  )
}

export default App
