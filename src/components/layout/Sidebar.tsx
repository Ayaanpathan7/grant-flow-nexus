
import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  Search, 
  FileText, 
  CheckSquare, 
  Bell, 
  Settings,
  User,
  Calendar,
  BarChart3,
  Folders
} from 'lucide-react';
import { cn } from '@/lib/utils';

const Sidebar = () => {
  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'Grants', href: '/grants', icon: Search },
    { name: 'My Applications', href: '/applications', icon: FileText },
    { name: 'Reviews', href: '/reviews', icon: CheckSquare },
    { name: 'Calendar', href: '/calendar', icon: Calendar },
    { name: 'Reports', href: '/reports', icon: BarChart3 },
    { name: 'Document Library', href: '/documents', icon: Folders },
  ];

  const secondaryNavigation = [
    { name: 'Profile', href: '/profile', icon: User },
    { name: 'Notifications', href: '/notifications', icon: Bell },
    { name: 'Settings', href: '/settings', icon: Settings },
  ];

  return (
    <div className="flex h-full flex-col bg-grant-navy text-white">
      <div className="flex shrink-0 items-center gap-2 p-4">
        <span className="font-serif text-lg font-bold">
          <span className="text-white">Grant</span>
          <span className="text-grant-gold">Flow</span>
        </span>
      </div>
      <nav className="flex-1 overflow-y-auto">
        <ul className="flex flex-col gap-1 p-2">
          {navigation.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-grant-navy hover:text-white",
                    isActive ? "bg-white/10 font-medium text-white" : "text-gray-300"
                  )
                }
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="mt-4 px-3 py-2">
          <h3 className="mb-2 px-1 text-xs font-semibold uppercase tracking-wider text-gray-400/80">
            Account
          </h3>
          <ul className="flex flex-col gap-1">
            {secondaryNavigation.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-grant-navy hover:text-white",
                      isActive ? "bg-white/10 font-medium text-white" : "text-gray-300"
                    )
                  }
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div className="mt-auto p-4">
        <div className="flex items-center gap-3 rounded-lg bg-white/10 p-3">
          <div className="flex-shrink-0">
            <img
              src="https://i.pravatar.cc/150?img=44"
              alt="User avatar"
              className="h-9 w-9 rounded-full"
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-white">Dr. Jane Smith</p>
            <p className="truncate text-xs text-gray-300">Researcher</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
