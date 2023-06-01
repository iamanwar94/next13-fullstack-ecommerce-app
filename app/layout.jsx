import { Children } from 'react'
import '@styles/globals.css'

export const metadata = {
  title: "A GPT AI Robot",
  description: "Discover and Share"
}


const RootLayout = ({children}) => {
  return (
    <html lang='en'>
      <body>
        <div className="main">
          <div className='gradient'/>
          <main className='app'>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}

export default RootLayout