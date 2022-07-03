import { Icon } from "@iconify/react";

export default function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-start">
          {/* Drawer */}
          <div className="btn btn-ghost btn-circle">
            <Icon icon="fluent:navigation-20-filled" className="h-6 w-6" />
          </div>
        </div>
      </nav>
    </header>
  );
}
