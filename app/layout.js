import Header from '@/components/Header'
import './styles.scss'
import Footer from '@/components/Footer'
import Container from '@/components/Container'
import { site } from '@/lib/config'


export const metadata = {
  title: `${site.title}`,
  description: `${site.description}`,
  keywords: `${site.keywords}`,
  author: `${site.author}`
}

export default function RootLayout({ children }) {
  const Year = new Date().getFullYear()
  return (
    <html lang="en">
      <body>
        <Header />
        <main id="main-content">
          <Container>
            {children}
          </Container>
        </main>
        <Footer />
      </body>
    </html>
  )
}
