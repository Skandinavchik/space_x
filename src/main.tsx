// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import { BrowserRouter } from 'react-router-dom'
import UrqlProvider from './providers/UrqlProvider.tsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
	// <React.StrictMode>
	<UrqlProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</UrqlProvider>
	// </React.StrictMode>,
)
