"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Menu,
  LayoutDashboard,
  LogOut,
  Store,
  User,
  ShoppingBag,
  Box,
} from "lucide-react";
import Link from "next/link";

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: <LayoutDashboard size={18} />,
    },
    {
      name: "Profile",
      href: "/dashboard/profile",
      icon: <User size={18} />,
    },
    {
      name: "Add Product",
      href: "/dashboard/add-product",
      icon: <ShoppingBag size={18} />,
    },
    {
      name: "My Product",
      href: "/dashboard/my-products",
      icon: <Box size={18} />,
    },
  ];

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside
        className={`bg-white border-r shadow-sm w-64 p-4 space-y-6 fixed top-0 left-0 h-full transition-transform z-30 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}>
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold tracking-tight">My Dashboard</h2>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setSidebarOpen(false)}>
            <span className="sr-only">Close sidebar</span>✕
          </Button>
        </div>

        <nav className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary">
              {item.icon}
              {item.name}
            </Link>
          ))}
        </nav>

        <Button variant="outline" className="w-full mt-auto">
          <LogOut size={16} className="mr-2" />
          Logout
        </Button>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 md:ml-64">
        {/* Topbar */}
        <header className="flex items-center justify-between px-4 py-3 border-b bg-white shadow-sm sticky top-0 z-20">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}>
            <Menu size={20} />
          </Button>
        </header>

        {/* Main Content */}
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}
