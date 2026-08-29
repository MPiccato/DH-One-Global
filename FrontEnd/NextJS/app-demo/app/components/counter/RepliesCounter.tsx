
type RepliesCounterType = {
    count: number;
    onClick?: () => void;
}
const RepliesCounter = ({count}:RepliesCounterType) => {
  if (count == 0) {
    return <div className="link-primary" onClick={()=>onclick}>Sé el primero en responder</div>
  }
  const label = count > 1 ? "respuestas":"respuesta";
  return (
    <div onClick={()=>onclick}>{count} {label}</div>
  )
}

export default RepliesCounter