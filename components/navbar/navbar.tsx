import React from 'react';
import { DarkModeToggle } from '@/components/navbar/darkmode-toggle';
import NavbarLogo from '@/components/navbar/navbar-logo';
import { Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Input } from '@/components/ui/input';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 flex w-full items-center justify-between border-b bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <NavbarLogo />
      <div className="flex gap-3">
        <Input placeholder="Search components..."></Input>
        <Link href="https://github.com/" target="_blank">
          <Button variant="outline" size="icon">
            <Github />
          </Button>
        </Link>
        <span>
          <DarkModeToggle />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
