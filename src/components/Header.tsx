"use client";
import { auth } from "@/auth";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
const Header = () => {
  const session = useSession();
  const { user } = session.data || {};
  return (
    <header className="bg-blue-500 p-4 text-white">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold">Your Educational Platform</h1>
        <nav className="mt-2">
          <ul className="flex space-x-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/courses">Courses</Link>
            </li>
            <li>
              <Link href="/login">Login</Link>
            </li>
            {user?.role === "INSTRUCTOR" && (
              <li>
                <Link href="/instructor">Instructor</Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
