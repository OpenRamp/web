import {Route, Routes} from 'react-router-dom';
import {Home} from '../containers/Home';
import {NotFound} from '../containers/NotFound';
import {Layout} from '../components/layout/Layout';

export function RootRouter() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
