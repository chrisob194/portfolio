import { Outlet } from 'react-router';
import { GithubLogo, LinkedinLogo, Navbar } from '../../components';
import type { NavbarMenuItem } from '../../models/navbar';

export default function PortfolioLayout() {

  const menuItems: NavbarMenuItem[] = [
    { path: '/home', label: 'Home' },
    { path: '/about', label: 'About Me' },
    { path: '/skills', label: 'Skills' },
    { path: '/contacts', label: 'Contacts' },
  ]

  return (
    <div className="h-screen flex py-5">
      <aside className="flex flex-col items-center gap-2">
        <div className="h-40 border-l-2 border-gray-600"></div>
        <div className="flex flex-col gap-2 px-3">
          <LinkedinLogo />
          <GithubLogo />
        </div>
      </aside>
      <div className="flex flex-col w-full px-20">
        <Navbar title="Christian" menuItems={menuItems} />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
