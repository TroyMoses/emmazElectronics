'use client';
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function UserTabs({isAdmin}) {
  const path = usePathname();
  // const isAdmin = false;
  return (
    <div className="flex mx-auto gap-2 tabs justify-center flex-wrap">
      <Link
        className={path === '/profile' ? 'active' : ''}
        href={'/profile'}
      >
        Profile
      </Link>
      {isAdmin && (
        <>
          <Link
            href={'/categories'}
            className={path === '/categories' ? 'active' : ''}
          >
            Categories
          </Link>
          <Link
            href={'/product-items'}
            className={path.includes('product-items') ? 'active' : ''}
          >
            Products
          </Link>
          <Link
            className={path.includes('/users') ? 'active' : ''}
            href={'/users'}
          >
            Users
          </Link>
          <Link
            className={path === '/orders' ? 'active' : ''}
            href={'/orders'}
          >
            Orders
          </Link>
      </>
      )}
    </div>
  );
}