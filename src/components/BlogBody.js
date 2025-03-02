import React,{useState} from 'react';
import './BlogBody.css';
function BlogBody() {
    const [title,setTitle]=useState('');
    const [posts,setPosts]=useState([]);
    const [body,setBody]=useState('');
    const [date,setDate]=useState('');
    const [time,setTime]=useState('');
    function handleTitleChange(event) {
        console.log("Current title:",title);
        setTitle(event.target.value);
    }
    const currentDateTime=new Date().toLocaleString();
    function handlePost() {
        if(title===''){
            alert("Please enter a title");
            return;// this will prevent the function from executing further.
        }
        alert("This is a new post!");
        const newPost={title:title,body:body,date:date,time:time};
        console.log("New Post Object:",newPost);
        setPosts([...posts,newPost]);
        setTitle('');
        setBody('');
        setDate('');
        setTime('');
    }
    function handleBody(event) {
        setBody(event.target.value);
    }
    function handleDeletePost(indexToRemove) {
        const confirmed=window.confirm("Are you sure you want to delete this post");
        if(!confirmed) return;
        // Approach: Filter out the post at the given index
        const updatedPosts=posts.filter((_, index)=> index!== indexToRemove);
        setPosts(updatedPosts); 
    }
    return (
        <main>
            <h2>Create a New Blog Post</h2>
            <p>Begin with the history of karate</p>
            <form>
                <label>
                    Title:
                    <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        placeholder="Enter bolg title"
        />
        Body:
        <input
        type="text"
        value={body}
        onChange={handleBody}
        placeholder="write your blog content here..."
        />
        <input
        type="date"
        value={date}
        onChange={(e)=>setDate(e.target.value)}
        />
        <input
        type="time"
        value={time}
        onChange={(e)=>setTime(e.target.value)}
        />
                </label>
                <br/><br/>
                <button type="button" onClick={handlePost}>Post</button>
            </form>
            {posts.map((post,index)=>(
                <div key={index}>
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                    <p>Blog posted at{currentDateTime}</p>
                    <button onClick={()=>handleDeletePost(index)}>Delete</button>
                </div>
            ))}
        </main>
    );
}
export default BlogBody;