import Link from "next/link"
import { Button } from "@/components/ui/button"
import { NavMenu } from "@/components/nav-menu"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold">HappyCopy</span>
        </Link>
        <div className="flex-1 flex items-center justify-between">
          <nav className="flex items-center space-x-4">
            <NavMenu />
          </nav>
          <Button variant="default">Get Started</Button>
        </div>
      </div>
    </header>
  )
}

