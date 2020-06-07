// rendering more than one UI elements based on a set of data
function NumberList(props) {
    const numbers = props.numbers;
    // such lists shud have a key mandatorily to keep it unique for react to recognise.
    return (
        <ul>
            {numbers.map((number) =>
                <ListItem key={number.toString()} value={number} />
            )}
        </ul>
    );
}

// 1. if it list is single no key needed.
// 2. if list is created via map key is mandatory
// 3. Keys must be unique amoung siblings. can repeat in other block of elements.
// 4. Keys cannot be accessed as props
const content = posts.map((post) =>
  <Post
    key={post.id}
    id={post.id}
    title={post.title} />
);
// props.id can be accessed in Post.js. but props.key is not accessible

