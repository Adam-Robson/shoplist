import { Outlet } from 'react-router-dom';
import Header from './Header';

export default function Layout() {
  return (
    <section className="layout-section" data-testid="layout-section">
      <Header  />
      <main className="main" data-testid="main">
        <Outlet />
      </main>
    </section>
  )
}

