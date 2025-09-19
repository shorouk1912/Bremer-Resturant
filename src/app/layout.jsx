import './globals.css'
import Navbar from './components/Navbar/page'

export const metadata = {
  title: 'Bremer Restaurant',
  description: 'أطيب المكرونة والبيتزا في المنصورة',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body className="bg-white text-black font-sans">
        <Navbar />
        {children}
        <footer className="bg-black text-white text-center py-6 mt-12">
          <span className='text-red-600'> Shorouk</span> © 2025 Bremer Restaurant - Mansoura
        </footer>
      </body>
    </html>
  )
}
