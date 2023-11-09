import Image from 'next/image';

import { Play } from "lucide-react";

export function PlaylistMadeFor() {
    return (<div className='grid grid-cols-5 gap-4 mt-4'>
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
    </div>)
}