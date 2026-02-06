import { AppLayout } from './components/layout/AppLayout';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ProductShowcase } from './sections/ProductShowcase';


function App() {
  return (
    <AppLayout>
      <Header />

      <main className="flex-grow pt-24 pb-20">
        <ProductShowcase />
      </main>

      <Footer />
    </AppLayout>
  );
}

export default App;
