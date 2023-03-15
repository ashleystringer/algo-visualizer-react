import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AlgoProvider } from './contexts/AlgoProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AlgoProvider>
      <App />
    </AlgoProvider>
  </React.StrictMode>
)
