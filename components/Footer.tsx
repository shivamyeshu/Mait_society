"use client"

import { siteConfig } from "@/lib/siteConfig"
import { FaLinkedin } from "react-icons/fa"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background py-6 mt-10">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-2 text-center">
        <p className="text-sm text-muted-foreground">
          Created by{" "}
          <a
            href={siteConfig.author.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-medium text-purple-500 dark:text-purple-400 hover:text-purple-600 dark:hover:text-purple-300 underline underline-offset-4"
          >
            {siteConfig.author.name}
            <FaLinkedin className="w-4 h-4" />
          </a>
        </p>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} MAIT Tech Society. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
