import { Outlet } from 'react-router';

export default function AdminLayout() {
  return (
    <div>
      <aside>Admin sidebar</aside>
      <main>
        <Outlet />
      </main>
    </div>
  );
}