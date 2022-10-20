export function PostsShow(props) {
  return (
    <div>
      <h1>{props.post.title}</h1>
      <img src={props.post.image}></img>
      <p>{props.post.body}</p>
    </div>
  );
}
