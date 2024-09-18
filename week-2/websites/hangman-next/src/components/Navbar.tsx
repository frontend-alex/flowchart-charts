import React from "react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import useFetch from "@hooks/useFetch";

export const Logo: React.FC = () => {
  return (
    <Link href={"/"}>
      <h1 className="font-bold text-lg">GG.</h1>
    </Link>
  );
};

const Navbar: React.FC = () => {
  return (
    <div className="max-w-wrapper py-5 fixed w-full left-1/2 -translate-x-1/2 top-0">
      <div className="flex-between">
        <Logo />
        <SignedOut>
          <SignInButton>
            <Button>Sign In</Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton/>
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
