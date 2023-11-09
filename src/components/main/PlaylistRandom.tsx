import Image from 'next/image';

import { Play } from 'lucide-react';

export function PlaylistRandom() {
    return (
        <div className='grid grid-cols-3 gap-6 mt-4'>
            <a className='bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors group'>
                <Image src='/album.png' width={104} height={104} alt='Album' />
                <strong>Album</strong>
                <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                    <Play fill='bg-black' />
                </button>
            </a>

        </div>
    )
}