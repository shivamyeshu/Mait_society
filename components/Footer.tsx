"use client";
import { Button } from "@/components/ui/button";
import { Linkedin, Github, Twitter, Instagram , Facebook } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const n = String.fromCharCode(...[83, 104, 105, 118, 97, 109, 32, 89, 101, 115, 104, 117]);
  return (
    <footer className="border-t py-12 bg-background">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div className="md:col-span-2">
          <Link href="/" className="flex items-center mb-4">
            <Image
              src="/images/logo.png"
              alt="ElevatHub Logo"
              width={32}
              height={32}
              className="mr-2 rounded-full"
            />
            <span className="font-bold text-xl tracking-tight">ElevatHub</span>
          </Link>
          <p className="text-muted-foreground mb-2 max-w-md">
            we believe that every student deserves the right platform to bridge the gap between academics and industry expectations.
          </p>
          <div className="flex space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.facebook.com/it.mait.delhi">
                <Facebook className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.instagram.com/elevathub_official/">
                <Instagram className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.linkedin.com/company/elevathub-official/">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
  
        {/* Quick Links */}
        <div>
          <h3 className="font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#events" className="text-muted-foreground hover:text-foreground transition-colors">
                Events
              </Link>
            </li>
            <li>
              <Link href="#team" className="text-muted-foreground hover:text-foreground transition-colors">
                Team
              </Link>
            </li>
            <li>
              <Link href="#join" className="text-muted-foreground hover:text-foreground transition-colors">
                Join Us
              </Link>
            </li>
          </ul>
        </div>
  
        {/* Contact Info */}
        <div>
          <h3 className="font-bold mb-4">Contact</h3>
          <ul className="space-y-2">
            <li className="text-muted-foreground">Email: mait.ac.in</li>
            <li className="text-muted-foreground">Phone: (123) 456-7890</li>
            <li className="text-muted-foreground">Address:</li>
          </ul>
        </div>
      </div>
  
      {/* Footer Bottom */}
      <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Created by : {" "}
            <a
              href="https://www.linkedin.com/in/shivam-yeshu"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-purple-500 dark:text-purple-400 underline underline-offset-4 hover:text-purple-600 dark:hover:text-purple-300"
            >
               
            </a>
          </p>
        </div>
      </div>
    </div>
  </footer>
  
  );
}
