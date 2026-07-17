
type PostCounterType = {
    count: number;
}
const PostsCounter = ({count}:PostCounterType) => {
  const label = count > 1 ? "posteos":"posteo";
  return (
    <div>{}{count} {label}</div>
  )
}

export default PostsCounter