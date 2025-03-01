import React,{useState} from 'react';
import './BlogBody.css';
function BlogBody() {
    const [title,setTitle]=useState('');
    const [posts,setPosts]=useState([]);
    function handleTitleChange(event) {
        console.log("Current title:",title);
        setTitle(event.target.value);
    }
    function handlePost() {
        if(title===''){
            alert("Please enter a title");
            return;// this will prevent the function from executing further.
        }
        alert("This is a new post!");
        const newPost={title:title};
        console.log("New Post Object:",newPost);
        setTitle('');
        setPosts([...posts,newPost]);
    }
    return (
        <main>
            <h2>Create a New Blog Post</h2>
            <p>Begin with the history of the post</p>
            <form>
                <label>
                    Title:
                    <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        placeholder="Enter bolg title"
        />
                </label>
                <br/><br/>
                <label>
                    Body:
                    <textarea name="body" placeholder="Write your blog content here..."></textarea>
                </label>
                <br/><br/>
                <button type="button" onClick={handlePost}>Post</button>
            </form>
            {posts.map((post,index)=>(
                <div key={index}>
                    <h4>{post.title}</h4>
                </div>
            ))}
        </main>
    );
}
export default BlogBody;