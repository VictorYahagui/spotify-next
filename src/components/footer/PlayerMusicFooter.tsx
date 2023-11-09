import { Play, Repeat, Shuffle, SkipBack, SkipForward } from "lucide-react";

export function PlayerMusicFooter() {
    return (<div className='flex flex-col items-center gap-2'>
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
    </div>)
}