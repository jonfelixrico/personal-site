import '@/styles/globals.scss'

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
