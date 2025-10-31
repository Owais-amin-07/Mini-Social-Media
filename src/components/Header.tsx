"use client"

import Link from "next/link"
import { Home, Search, Users, Bell, Mail, Menu, User } from "lucide-react"
import { Logo } from "./Logo"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { currentUser } from "@/lib/data"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", icon: Home, label: "Home" },
  { href: "/explore", icon: Users, label: "Explore" },
  { href: "/notifications", icon: Bell, label: "Notifications" },
  { href: "/messages", icon: Mail, label: "Messages" },
  { href: `/profile/${currentUser.username}`, icon: User, label: "Profile" },
]

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-4">
          <Link href="/" className="hidden md:block">
            <Logo />
          </Link>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 p-4">
                <nav className="flex flex-col gap-4">
                  <Link href="/" className="mb-4">
                    <Logo />
                  </Link>
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 rounded-md px-3 py-2 text-base font-medium transition-colors",
                        pathname === item.href ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      <item.icon className="h-5 w-5" />
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
          <div className="relative hidden md:block w-64 lg:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search Connectify..." className="pl-9" />
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-2">
            {navItems.map(item => (
                <Button key={item.label} variant="ghost" size="icon" asChild className={cn(
                    "relative transition-colors",
                    pathname === item.href ? "text-primary" : "text-muted-foreground hover:text-primary"
                )}>
                    <Link href={item.href}>
                        <item.icon className="h-6 w-6" />
                        {pathname === item.href && (
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-primary rounded-full"></span>
                        )}
                        <span className="sr-only">{item.label}</span>
                    </Link>
                </Button>
            ))}
        </nav>

        <div className="flex items-center gap-4">
            <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90 hidden sm:flex">
                Create Post
            </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={currentUser.avatarUrl} alt={currentUser.name} />
                  <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
              <DropdownMenuLabel>
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">{currentUser.name}</p>
                  <p className="text-xs leading-none text-muted-foreground">@{currentUser.username}</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href={`/profile/${currentUser.username}`}><User className="mr-2 h-4 w-4" />Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/login">Log out</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
