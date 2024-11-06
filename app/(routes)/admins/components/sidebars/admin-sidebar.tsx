"use client"

import { useAdminRoutes } from "@/hooks/use-admin-routes"
import { cn } from "@/lib/utils"
import Link from "next/link"




export function AdminSidebar() {
    const { routes } = useAdminRoutes()
    return (
        <aside
            className="hidden md:fixed md:block top-0 left-0 z-40 w-64 h-full transition-transform -translate-x-full sm:translate-x-0"
            aria-label="Sidebar"
        >
            <div
                className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800"
            >
                <ul className="space-y-2 font-medium w-full">
                    {routes.map(route => (
                        <li
                            key={route.title}
                        >
                            <Link href={route.href}>
                                <div 
                                    className={cn(
                                        "w-full flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group",
                                        route.active && "bg-gray-100 dark:bg-gray-700"
                                    )}
                                >
                                    {<route.icon />}
                                    <span className="ms-3">{route.title}</span>
                                </div>

                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    )
}