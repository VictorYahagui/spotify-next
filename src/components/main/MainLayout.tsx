
import { PrevAndNext } from "../GlobalComponets/PrevAndNext";
import { PlaylistMadeFor } from "./PlaylistMadeFor";
import { PlaylistRandom } from "./PlaylistRandom";

export function MainLayout() {
    return (<main className='flex-1 p-6'>
        <PrevAndNext />
        <h1 className='font-semibold text-4xl mt-10'>Good Afternoon</h1>
        <PlaylistRandom />
        <h2 className='font-semibold text-2xl mt-10'>Made For</h2>
        <PlaylistMadeFor />
    </main>)
}