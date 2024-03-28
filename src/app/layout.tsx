import '@/styles/globals.scss'

// Needed to make the tooltip work
import 'rc-tooltip/assets/bootstrap.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="text-app bg-app">{children}</body>
    </html>
  )
}
