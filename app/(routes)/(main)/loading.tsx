"use client"

import { LuLoader2 } from "react-icons/lu"


export default function HomeLoadingPage() {
    return (
        <div className="w-full h-full">
            <LuLoader2 className="animate-spin"/>
        </div>
    )
}