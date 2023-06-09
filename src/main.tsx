import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom';

import { ChakraProvider } from '@chakra-ui/react'
import customTheme from './styles/theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <ChakraProvider theme={customTheme}>
      <App />
    </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
