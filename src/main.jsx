import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'

createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain={import.meta.env.VITE_AUTH0_DOMAIN}
    clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
    authorizationParams={{
<<<<<<< HEAD
      redirect_uri: 'https://sandipnandy1.github.io/TodoApp/'
      
<<<<<<< HEAD
=======
      redirect_uri: window.location.origin
>>>>>>> parent of 8e8b7e2 (Update main.jsx)
=======
>>>>>>> c7e1ae296e3079b14801e9c13e539573856455b8
    }}
    >
      <App />
  </Auth0Provider>
)
