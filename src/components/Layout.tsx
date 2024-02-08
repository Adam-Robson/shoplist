import { Outlet } from 'react-router-dom';
import Header from './Header';

export default function Layout() {
  return (
    <section className="layout-section">
      <Header  />
      <main>
        <Outlet />
      </main>
    </section>
  )
}

