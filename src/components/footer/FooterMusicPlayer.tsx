
import { AlbumMusicFooter } from "./AlbumMusicFooter";
import { VolumeMusicFooter } from "./VolumeMusicFoorter";

export function FooterMusicPlayer() {
    return (
        <footer className='bg-zinc-800 border-t border-zinc-700 py-4 px-6 '>
            <AlbumMusicFooter />
            <FooterMusicPlayer />
            <VolumeMusicFooter />
        </footer>
    )
}