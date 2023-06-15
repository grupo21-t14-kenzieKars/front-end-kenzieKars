import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom';

import { ChakraProvider } from '@chakra-ui/react'
import customTheme from './styles/theme';
import CarProvider from './contexts/carsContext';
import UserProvider from './contexts/userContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={customTheme}>
        <UserProvider>
          <CarProvider>
            <App />
          </CarProvider>
        </UserProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
