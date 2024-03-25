import HeaderBar from "@/components/core/HeaderBar"

export default function RootLayout({ children }) {
  return (
    <main className="container">
      <HeaderBar />
      {children}
    </main>
  )
}
