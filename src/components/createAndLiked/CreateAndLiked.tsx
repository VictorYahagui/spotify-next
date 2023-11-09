import { Heart, Plus } from "lucide-react";

export function CreateAndLiked() {
    return (
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
    )
}