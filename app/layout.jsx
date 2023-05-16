import '@styles/globals.css'

import { Nav } from '@components/Nav'
import Provider from '@components/Provider'

export const metadata = {
    title: "Tech-Notes",
    icon: '/assets/images/logo.svg',
    description: "Discover & Share technological notes"
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <head>
            <link rel="icon" type="image/svg+xml" href="/assets/images/logo.svg" />
        </head>
        <body
            suppressHydrationWarning={true}
        >
            <Provider>
                <div className="main">
                    <div className="gradient" />
                </div>

                <main className="app">
                    <Nav />
                    {children}
                </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout