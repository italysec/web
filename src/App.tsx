import { Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { HomePage } from '@/pages/HomePage';
import { RulesPage } from '@/pages/RulesPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/regolamento" element={<RulesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
