export function PostsIndex(props) {
  return (
    <div>
      <h1>All Posts</h1>
      {props.posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <img src={post.image} />
          <p>{post.body}</p>
          <button onClick={() => props.onSelectPost(post)}>More info</button>
        </div>
      ))}
    </div>
  );
}
