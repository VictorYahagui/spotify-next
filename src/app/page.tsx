import Image from 'next/image';

import { Home as HomeIcon, Search, Library, Heart, Plus, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Volume, Maximize2, Laptop2, LayoutList, Mic2 } from 'lucide-react';

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
                <Heart className='text-white' fill='bg-white' />
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
          <div className='flex items-center gap-4'>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft />
            </button>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight />
            </button>
          </div>
          <h1 className='font-semibold text-4xl mt-10'>Good Afternoon</h1>
          <div className='grid grid-cols-3 gap-6 mt-4'>
            <a className='bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors group'>
              <Image src='/album.png' width={104} height={104} alt='Album' />
              <strong>Album</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play fill='bg-black' />
              </button>
            </a>

          </div>
          <h2 className='font-semibold text-2xl mt-10'>Made For</h2>
          <div className='grid grid-cols-5 gap-4 mt-4'>
            <a className='bg-white/5 p-3 rounded-md group flex flex-col gap-2 hover:bg-white/10'>
              <div className='relative'>
                <Image src='/album.png' className='w-full' width={104} height={104} alt='Album' />
                <div className='absolute top-3/4 left-3/4'>
                  <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                    <Play fill='bg-black' />
                  </button>
                </div>

              </div>
              <strong className='font-semibold'> Daily</strong>
              <span className='text-sm text-zinc-500'>wallows, coin, red and more</span>
            </a>
          </div>
        </main>
      </div>
      <footer className='bg-zinc-800 border-t flex items-center justify-between border-zinc-700 py-4 px-6 '>
        <div className='flex items-center gap-3'>
          <Image src='/album.png' width={56} height={56} alt='Album' />
          <div className='flex flex-col'>
            <strong className='font-normal'>album</strong>
            <span className='text-xs text-zinc-400 '>
              album aleatorio
            </span>
          </div>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <div className=' flex items-center gap-6'>
            <Shuffle className='text-zinc-200' size={24} />
            <SkipBack className='text-zinc-200' size={24} />
            <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-white text-black'>
              <Play fill='bg-black' />
            </button>
            <SkipForward className='text-zinc-200' size={24} />
            <Repeat className='text-zinc-200' size={24} />
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-xs text-zinc-500'>
              0:31
            </span>
            <div className='h-1 rounded-full w-96 bg-zinc-600'>
              <div className='bg-zinc-200 w-40 h-1 rounded-full'>

              </div>
            </div>
            <span className='text-xs text-zinc-500'>
              2:14
            </span>
          </div>
        </div>

        <div className='flex items-center gap-2'>
          <Mic2 size={20} />
          <LayoutList size={20} />
          <Laptop2 size={20} />
          <div className='flex items-center gap-2'>
            <Volume size={20} />
            <div className='h-1 rounded-full w-24 bg-zinc-600'>
              <div className='bg-zinc-200 w-10 h-1 rounded-full'>

              </div>
            </div>
          </div>
          <Maximize2 size={20} />
        </div>
      </footer>
    </div>
  )
}
