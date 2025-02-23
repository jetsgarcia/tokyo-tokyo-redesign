import { House, ShoppingCart, Truck, UserCircle, Utensils } from "lucide-react";
import { Link, useLocation } from "react-router";

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { to: "/", icon: <House />, label: "Home" },
    { to: "/menu", icon: <Utensils />, label: "Menu" },
    { to: "/cart", icon: <ShoppingCart />, label: "Cart" },
    { to: "/track-order", icon: <Truck />, label: "Track" },
    { to: "/account", icon: <UserCircle />, label: "Account" },
  ];

  return (
    <>
      {/* Mobile Navbar */}
      <div className="border-primary fixed top-0 right-0 left-0 z-50 flex items-center justify-between border-b bg-white bg-[url(../src/assets/tokyo-tokyo-bg.jpg)] px-4 md:hidden">
        <Link to="/">
          <img src="/tokyo-tokyo-logo.png" alt="Tokyo Tokyo logo" width={180} />
        </Link>
        <Link
          to="/account"
          className={`text-lg ${
            location.pathname === "/account" ||
            location.pathname.startsWith("/account/")
              ? "text-primary font-semibold"
              : "hover:text-primary text-gray-600"
          }`}
        >
          <UserCircle />
        </Link>
      </div>

      <div className="border-primary fixed right-0 bottom-0 left-0 z-50 rounded-tl-2xl rounded-tr-2xl border-t bg-white p-2 md:hidden">
        <nav>
          <ul className="flex items-center justify-between">
            {navItems.slice(0, 4).map((item) => (
              <li key={item.to} className="flex-1 text-center">
                <Link
                  to={item.to}
                  className={`flex flex-col items-center gap-2 p-2 text-sm ${
                    location.pathname === item.to ||
                    location.pathname.startsWith(`${item.to}/`)
                      ? "text-primary font-semibold"
                      : "text-gray-600"
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Desktop Navbar */}
      <div className="border-primary fixed top-0 right-0 left-0 z-50 hidden border-b bg-white bg-[url(../src/assets/tokyo-tokyo-bg.jpg)] px-8 md:block">
        <div className="flex items-center justify-between">
          {/* Left Side: Logo & Navigation */}
          <div className="flex items-center gap-6">
            <Link to="/">
              <img
                src="/tokyo-tokyo-logo.png"
                alt="Tokyo Tokyo logo"
                width={180}
              />
            </Link>
            <nav>
              <ul className="flex items-center gap-6">
                {navItems.slice(0, 2).map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className={`text-lg ${
                        location.pathname === item.to ||
                        location.pathname.startsWith(`${item.to}/`)
                          ? "text-primary font-semibold"
                          : "hover:text-primary text-gray-600"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Right Side: Icons */}
          <div className="flex items-center gap-6">
            {navItems.slice(2, 5).map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`text-lg ${
                  location.pathname === item.to ||
                  location.pathname.startsWith(`${item.to}/`)
                    ? "text-primary font-semibold"
                    : "hover:text-primary text-gray-600"
                }`}
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
