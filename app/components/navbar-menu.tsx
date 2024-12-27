import { NavLink } from 'react-router';
import type { NavbarMenuItem } from '../models/navbar';
import { transformText } from '../utils';

interface Props {
  menuItems: NavbarMenuItem[];
}

export default function NavbarMenu({ menuItems }: Props) {
  return (
    <div className="flex justify-end gap-10 items-center">
      {menuItems.map((item, index) => (
        <NavLink key={index} to={item.path} className={
          ({ isActive }) => isActive ? "" : "text-gray-600 hover:text-white"
        }>
          <span className="text-lime-400">#</span>
          {transformText(item.label, 'kebab')}
        </NavLink>
      ))}
    </div>
  );
}

export type { Props as NavbarMenuProps };