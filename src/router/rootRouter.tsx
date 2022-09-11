import {Navigate, Route, Routes} from 'react-router-dom';
import {Home} from '../containers/Home';
import {NotFound} from '../containers/NotFound';
import {Layout} from '../components/layout/Layout';

export function RootRouter() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/buy/select-coin" />} />
        <Route path="/buy" element={<Navigate to="/buy/select-coin" />} />
        <Route path="/sell" element={<Navigate to="/sell/select-coin" />} />
        <Route path="/buy/:step" element={<Home />} />
        <Route path="/sell/:step" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
