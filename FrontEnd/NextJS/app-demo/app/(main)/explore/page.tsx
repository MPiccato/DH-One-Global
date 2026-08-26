import ExploreTabs from "@/app/components/explore/ExploreTabs";
import exploreAPI from "@/app/services/explore/explore.service";

const ExplorePage = async ({searchParams}:{searchParams?: {[key:string]: string | undefined}}) => {

    const hashesPromise = exploreAPI.getTrendingHashtags(0, 20);
    const userPromise = exploreAPI.getFollowRecomendations(0, 5);

    

    // Wait for both promises to resolve
    const [hashes,users] = await Promise.all([hashesPromise, userPromise]);
    return (
        <>
            <main className="flex flex-col bg-gray-100 p-4 text-black">
                <section className="flex flex-col mb-6">

                    <ExploreTabs hashtags={hashes} 
                                users={users}
                                initialTab={searchParams?.type}
                    />
               

                </section>
            </main>
        
        
        </>
    )
}
export default ExplorePage;