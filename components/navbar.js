// components/Navbar.

import Link from "next/link";
import React from "react";
const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link className="btn btn-ghost normal-case text-xl" href="https://alanabarrettfrew.com">My Website</Link>
      </div>
    </div>
  );
};
export default Navbar;