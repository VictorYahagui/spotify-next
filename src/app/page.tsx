import Image from 'next/image';

import { Home as HomeIcon, Search, Library, Heart, Plus } from 'lucide-react';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className='flex flex-1'>
        <aside className='w-72 bg-zinc-950 p-6'>
          <div className='flex items-center gap-2 pb-6'>
            <div className='w-3 h-3 bg-red-500 rounded-full'></div>
            <div className='w-3 h-3 bg-orange-500 rounded-full'></div>
            <div className='w-3 h-3 bg-green-500 rounded-full'></div>
          </div>
          <nav className='space-y-5'>
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

          <nav className='mt-10 space-y-4'>
            <a href="" className='flex items-center gap-3 text-xs font-semibold text-zinc-200'>
              <div className='w-5 h-5 rounded-sm bg-gray-400 flex items-center'>
                <Plus className='text-black ' />
              </div> Create Playlist
            </a>
            <a href="" className='flex items-center gap-3 text-xs font-semibold text-zinc-200'>
              <div className='w-5 h-5 rounded-sm flex items-center bg-gradient-to-br from-violet-950 via-violet-600 to-violet-300'>
                <Heart className='text-white ' />
              </div> Liked Songs
            </a>
          </nav>
          <nav className='mt-6 pt-4 border-t border-zinc-800 flex flex-col gap-2'>
            <span className='text-lg text-zinc-400'>
              PlayLists
            </span>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Play 1</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Play 2</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Play 3</a>
          </nav>

        </aside>
        <main className='flex-1 p-6'>
          main
        </main>
      </div>
      <footer className='bg-zinc-800 border-t border-zinc-700 p-6 '>
        footer
      </footer>
    </div>
  )
}
