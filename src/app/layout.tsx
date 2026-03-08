import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div style={{ display: "flex", minHeight: "100vh", width: "100%" }}>
          
          <main style={{ flex: 1, padding: 20 }}>
            {children}
          </main>

        </div>
      </body>
    </html>
  )
}