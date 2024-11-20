import './globals.css'
import Navigation from '@/components/layout/Navigation'
import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata = {
  title: 'My Portfolio',
  description: 'My awesome portfolio description',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}