import './reset.css'
import './styles.css'


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="primary-header">
          
        </header>
        <main id="main-content">
          <div className="container">
            {children}
          </div>
        </main>
        <footer className="primary-footer">

        </footer>
      </body>
    </html>
  )
}
