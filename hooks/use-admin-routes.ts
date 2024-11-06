"use client"

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { MdDashboard, MdKeyboard } from "react-icons/md";
import { IoMdList } from "react-icons/io";

export function useAdminRoutes() {

    const pathname = usePathname()
    const routes = useMemo(()=> [
        {
            title: 'Dashboard',
            icon: MdDashboard,
            active: pathname === '/admins',
            href: '/admins'
        },
        {
            title: 'Products',
            icon: MdKeyboard,
            active: pathname === '/admins/products/*',
            href: '/admins/products'
        },
        {
            title: 'Categories',
            icon: IoMdList,
            active: pathname === '/admins/categories/*',
            href: '/admins/categories'
        },
        {
            title: 'Brands',
            icon: MdDashboard,
            active: pathname === '/admins/brands/*',
            href: '/admins/brands/'
        },
        {
            title: 'Vouchers',
            icon: MdDashboard,
            active: pathname === '/admins/vouchers/*',
            href: '/admins/vouchers'
        },
        {
            title: 'Orders',
            icon: MdDashboard,
            active: pathname === '/admins/orders/*',
            href: '/admins/orders'
        },
        {
            title: 'Inventories',
            icon: MdDashboard,
            active: pathname === '/admins/inventories/*',
            href: '/admins/inventories'
        },
        {
            title: 'users',
            icon: MdDashboard,
            active: pathname === '/admins/users/*',
            href: '/admins/users'
        },

    ],[pathname])


    return {
        routes
    }
}




