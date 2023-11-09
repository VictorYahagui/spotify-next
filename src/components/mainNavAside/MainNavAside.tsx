import { Home as HomeIcon, Search, Library, } from "lucide-react";

export function MainNavAside() {
    return (<nav className='space-y-5'>
        <a href="" className='flex items-center gap-3 text-xs font-semibold text-zinc-200 hover:text-white'>
            <HomeIcon />
            Home
        </a>
        <a href="" className='flex items-center gap-3 text-xs font-semibold text-zinc-200 hover:text-white'>
            <Search />
            Search
        </a>
        <a href="" className='flex items-center gap-3 text-xs font-semibold text-zinc-200 hover:text-white'>
            <Library />
            Library
        </a>
    </nav>
    )
}