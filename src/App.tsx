import { Routes, Route } from 'react-router-dom';
import { AppLayout } from './components/layout/AppLayout';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ProductShowcase } from './sections/ProductShowcase';
import { Download } from './pages/Download';


function App() {
  return (
    <AppLayout>
      <Header />

      <main className="flex-grow pt-24 pb-20">
        <Routes>
          <Route path="/" element={<ProductShowcase />} />
          <Route path="/download" element={<Download />} />
        </Routes>
      </main>

      <Footer />
    </AppLayout>
  );
}

export default App;
