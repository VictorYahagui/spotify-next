import Image from 'next/image';


export function AlbumMusicFooter() {
    return (
        <div className='flex items-center gap-3'>
            <Image src='/album.png' width={56} height={56} alt='Album' />
            <div className='flex flex-col'>
                <strong className='font-normal'>album</strong>
                <span className='text-xs text-zinc-400 '>
                    album aleatorio
                </span>
            </div>
        </div>
    )
}