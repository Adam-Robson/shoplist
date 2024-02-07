import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Layout from './components/Layout';
import Page from './components/Page';
import Posts from './components/Posts';
import Create from './components/Create';
import NotFound from './components/NotFound';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Page />} />
          <Route path="posts" element={<Posts />} />
          <Route path="create" element={<Create />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
