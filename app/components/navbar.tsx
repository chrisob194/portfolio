import NavbarLogo, { type NavbarLogoProps } from './navbar-logo';
import type { NavbarMenuProps } from './navbar-menu';
import NavbarMenu from './navbar-menu';

type Props = NavbarLogoProps & NavbarMenuProps;

export default function Navbar({ title, menuItems }: Props) {
  return (
    <nav className="w-full flex">
      <header className="w-1/2">
        <NavbarLogo title={title} />
      </header>
      <div className="w-1/2 flex justify-end gap-4">
        <NavbarMenu menuItems={menuItems} />
      </div>
    </nav>
  )
}