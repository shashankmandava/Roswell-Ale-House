'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { name: 'Dashboard', href: '/admin', icon: '⌂' },
  { name: 'Testimonials', href: '/admin/testimonials', icon: '★' },
  { name: 'Menu', href: '/admin/menu', icon: '☰' },
  { name: 'Career Applications', href: '/admin/applications', icon: '▣' },
  { name: 'Offers', href: '/admin/offers', icon: '%' },
  { name: 'Events', href: '/admin/events', icon: '◆' },
  { name: 'Sports Calendar', href: '/admin/sports', icon: '●' },
  { name: 'Gallery', href: '/admin/gallery', icon: '▦' },
  { name: 'Restaurant Settings', href: '/admin/settings', icon: '⚙' }
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="adminSidebar">

      <div className="adminBrand">
        <div className="adminBrandSmall">ROSWELL</div>
        <div className="adminBrandLarge">ALE HOUSE</div>
        <div className="adminPortalText">ADMIN PORTAL</div>
      </div>

      <nav className="adminNavigation">

        {links.map((link) => {
          const active =
            link.href === '/admin'
              ? pathname === '/admin'
              : pathname.startsWith(link.href);

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`adminNavItem ${active ? 'active' : ''}`}
            >
              <span className="adminNavIcon">
                {link.icon}
              </span>

              <span>{link.name}</span>
            </Link>
          );
        })}

      </nav>

      <div className="adminSidebarBottom">

        <Link href="/" className="viewWebsite">
          ← View Website
        </Link>

        <button className="adminLogout" disabled>
          Log Out
        </button>

        <small>
          Authentication coming later
        </small>

      </div>

    </aside>
  );
}