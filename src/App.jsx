import React from 'react'
import './App.css'
import ProductGallery from './components/ProductGallery'

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1 className="shop-name">SELFISH</h1>
      </header>
      <main className="main-content">
        <ProductGallery />
      </main>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Selfish</p>
      </footer>
    </div>
  )
}

export default App
