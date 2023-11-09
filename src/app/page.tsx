
import { MainNavAside } from '@/components/mainNavAside/MainNavAside';
import { CreateAndLiked } from '@/components/createAndLiked/CreateAndLiked';
import { PlayerMusicFooter } from '@/components/footer/PlayerMusicFooter';
import { PlaylistNav } from '@/components/playlistNav/PlaylistNav';
import { MainLayout } from '@/components/main/MainLayout';

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
          <MainNavAside />
          <CreateAndLiked />
          <PlaylistNav />

        </aside>
        <MainLayout />
      </div>
      <PlayerMusicFooter />
    </div>
  )
}
