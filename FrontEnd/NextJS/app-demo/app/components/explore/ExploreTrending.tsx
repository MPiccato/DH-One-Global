
import PostsCounter from "../counter/PostsCounter";


const ExploreTrending = () => {
  return (
    <div>
        <div>
            <h4>#Trending #!</h4>
            <div>
                <PostsCounter count={10}/>
            </div>
        </div>
        <div>
            <h4>#Trending #2</h4>
            <div>
                <PostsCounter count={6}/>
            </div>
        </div>
        <div>
            <h4>#Trending #3</h4>
            <div>
                <PostsCounter count={4}/>
            </div>
        </div>
    </div>
  )
}

export default ExploreTrending;