"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import MobileMenu from "./header-mobile";
import { cn } from "@/lib/utils";
import { CourseData } from "@/lib/data/courses";
import { Button } from "@/components/ui/button";

interface MenuItem {
  href: string;
  label: string;
  courses?: CourseData[];
}

interface ClientHeaderProps {
  menuItems: MenuItem[];
}

export default function ClientHeader({ menuItems }: ClientHeaderProps) {
  return (
    <>
      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList>
          {menuItems.map((item) => (
            <NavigationMenuItem key={item.href}>
              {item.courses ? (
                <>
                  <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <li className="md:col-span-2 mb-3 pt-3 rounded-none">
                        <Link href={item.href} passHref>
                          <Button variant="outline" className="w-full">
                            Explore All {item.label} Courses
                          </Button>
                        </Link>
                      </li>
                      {item.courses.map((course) => (
                        <ListItem
                          key={course.id}
                          title={course.title}
                          href={`${item.href}/${course.id}`}
                        >
                          {course.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </>
              ) : (
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {item.label}
                  </NavigationMenuLink>
                </Link>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <MobileMenu items={menuItems} />
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
