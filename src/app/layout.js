// app/layout.tsx or app/layout.jsx
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-jakarta', // optional CSS variable name
})

export const metadata = {
  title: 'My App',
  description: 'Using Plus Jakarta Sans',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jakarta.className}>
      <body>{children}</body>
    </html>
  )
}
