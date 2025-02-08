"use client"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Pen, FileText, Boxes, Book, Send, Settings2, FormInput, AtSign } from "lucide-react"
import { useState } from "react"

const contentCreation = [
  {
    title: "AI Copywriter",
    description: "Write better emails & more",
    icon: Pen,
  },
  {
    title: "Newsletter Creator",
    description: "Create image-rich newsletters",
    icon: FileText,
  },
  {
    title: "Email Sequence Creator",
    description: "Write multi-email sequences",
    icon: Boxes,
  },
  {
    title: "Brand Library",
    description: "Train AI on your brand",
    icon: Book,
  },
]

const marketingAutomation = [
  {
    title: "Publishing",
    description: "Send beautiful emails",
    icon: Send,
  },
  {
    title: "Automations",
    description: "Put emails on auto-pilot",
    icon: Settings2,
    highlight: true,
  },
  {
    title: "Forms",
    description: "Publish forms & link-in-bio",
    icon: FormInput,
  },
  {
    title: "Competitor Monitoring",
    description: "Track competitor emails",
    icon: AtSign,
  },
]

const moreTools = [
  "AI Image Creator",
  "AI Document Editor",
  "AI Chat",
  "Content Converter",
  "Integrations",
  "Design Templates",
  "Writing Templates",
  "Spam Check",
  "More tools",
]

export function NavMenu() {
  const [selectedContentCreation, setSelectedContentCreation] = useState<string | null>(null)

  return (
    <NavigationMenu className="relative">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Platform</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[calc(100vw-2rem)] md:w-[850px] overflow-auto">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_250px] gap-3 p-4">
                <div className="flex flex-col space-y-3">
                  <div className="font-medium text-sm px-3 py-2 rounded-md bg-black text-white inline-block w-fit">
                    CONTENT CREATION
                  </div>
                  {contentCreation.map((item) => (
                    <button
                      key={item.title}
                      onClick={() => setSelectedContentCreation(item.title)}
                      className={cn(
                        "flex items-start space-x-3 p-3 rounded-lg hover:bg-accent text-left",
                        selectedContentCreation === item.title && "bg-accent",
                      )}
                    >
                      <item.icon className="h-5 w-5 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-medium">{item.title}</div>
                        <div className="text-sm text-muted-foreground">{item.description}</div>
                      </div>
                    </button>
                  ))}
                </div>
                <div className="flex flex-col space-y-3">
                  <div className="font-medium text-sm px-3 py-2 rounded-md bg-black text-white inline-block w-fit">
                    MARKETING AUTOMATION
                  </div>
                  {marketingAutomation.map((item) => (
                    <Link
                      key={item.title}
                      href="#"
                      className={cn(
                        "flex items-start space-x-3 p-3 rounded-lg hover:bg-accent",
                        item.highlight && "bg-[#FFE169]",
                      )}
                    >
                      <item.icon className="h-5 w-5 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-medium">{item.title}</div>
                        <div className="text-sm text-muted-foreground">{item.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
                <DynamicContent selectedItem={selectedContentCreation} />
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="#" legacyBehavior passHref>
            <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
              Pricing
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[400px] gap-3 p-4">
              <div className="flex flex-col space-y-2">
                <Link href="#" className="font-medium hover:underline">
                  Blog
                </Link>
                <Link href="#" className="font-medium hover:underline">
                  Help Center
                </Link>
                <Link href="#" className="font-medium hover:underline">
                  API Documentation
                </Link>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="#" legacyBehavior passHref>
            <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
              Partners
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuViewport className="origin-top-center absolute top-full left-0 mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]" />
    </NavigationMenu>
  )
}

function DynamicContent({ selectedItem }: { selectedItem: string | null }) {
  if (!selectedItem) {
    return (
      <div className="flex flex-col space-y-3">
        <div className="font-medium text-sm px-3">// More tools</div>
        {moreTools.map((tool) => (
          <Link key={tool} href="#" className="text-sm text-muted-foreground hover:text-foreground px-3">
            {tool}
          </Link>
        ))}
      </div>
    )
  }

  const dynamicLinks = ["Getting Started", "Templates", "Best Practices", "Advanced Techniques", "Integration Guide"]

  return (
    <div className="flex flex-col space-y-3">
      <div className="font-medium text-sm px-3">{selectedItem}</div>
      {dynamicLinks.map((link) => (
        <Link key={link} href="#" className="text-sm text-muted-foreground hover:text-foreground px-3">
          {link}
        </Link>
      ))}
    </div>
  )
}

