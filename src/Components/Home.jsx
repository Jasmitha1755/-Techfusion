
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// function Home() {
//   const [commentInput, setCommentInput] = useState("");
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/posts")
//       .then((response) => {
//         console.log("Posts data:", response.data);
//         setPosts(response.data);
//       })
//       .catch((error) => console.error("Error fetching posts:", error));
//   }, []);

//   const handleLike = (postId) => {
//     axios
//       .post(`http://localhost:5000/api/posts/like/${postId}`)
//       .then((response) => {
//         const updatedPosts = posts.map((post) =>
//           post._id === postId ? response.data : post
//         );
//         setPosts(updatedPosts);
//       })
//       .catch((error) => console.error("Error liking post:", error));
//   };

//   const handleAddComment = (postId, commentText) => {
//     axios
//       .post(`http://localhost:5000/api/posts/comment/${postId}`, {
//         text: commentText,
//       })
//       .then((response) => {
//         const updatedPosts = posts.map((post) =>
//           post._id === postId ? response.data : post
//         );
//         setPosts(updatedPosts);
//       })
//       .catch((error) => console.error("Error adding comment:", error));
//   };

//   return (
//     <div className="home">
//       <h2>Recent Posts</h2>
//       {posts.length === 0 ? (
//         <p>No posts found.</p>
//       ) : (
//         posts.map((post) => (
//           <div key={post._id} className="post">
//             <h3>{post.title}</h3>
//             <p>{post.content}</p>
//             {post.file && (
//               <div>
//                 {post.file.includes(".mp4") ? (
//                   <video width="320" height="240" controls>
//                     <source
//                       src={`http://localhost:5000/uploads/${post.file}`}
//                       type="video/mp4"
//                     />
//                     Your browser does not support the video tag.
//                   </video>
//                 ) : (
//                   <img
//                     src={`http://localhost:5000/uploads/${post.file}`}
//                     alt="Post Media"
// 					style={{width:"900px",height:"590px",paddingLeft:"45px",paddingRight:"45px"}}
//                   />
//                 )}
//               </div>
//             )}
//             <p>Likes: {post.likes}</p>
//             <button onClick={() => handleLike(post._id)}>Like</button>
//             <p>Comments: {post.comments.length}</p>
//             <ul>
//               {post.comments.map((comment, index) => (
//                 <li key={index}>{comment.text}</li>
//               ))}
//             </ul>
//             <input
//               type="text"
//               placeholder="Add a comment"
//               className="comment-input"
//               value={commentInput}
//               onChange={(e) => setCommentInput(e.target.value)}
//             />
//             <button
//               onClick={() => handleAddComment(post._id, commentInput)}
//               className="comment-button"
//             >
//               Add Comment
//             </button>
//           </div>
//         ))
//       )}
//       <Link to="/createpost" className="comment-button" >Create Post</Link>

//       {/* CSS Styles */}
//       <style>
//         {`
//           .home {
//             padding: 45px;
// 			width: 1350px;
//           }

//           .post {
//             margin-bottom: 20px;
//             border: 1px solid #ccc;
//             padding: 40px;
//             border-radius: 5px;
//           }

//           .post h3 {
//             margin-top: 0;
//           }

//           .post p {
//             margin-bottom: 10px;
//           }

//           .post img {
//             max-width: 100%;
//           }

//           .post video {
//             max-width: 100%;
//           }

//           .comment-input {
//             margin-top: 10px;
//             margin-right: 10px;
//             padding: 5px;
//             width: 300px;
//           }

//           .comment-button {
//             margin-top: 10px;
//             padding: 5px 10px;
//             background-color: #007bff;
//             color: #fff;
//             border: none;
//             border-radius: 5px;
//             cursor: pointer;
//           }
//         `}
//       </style>
//     </div>
//   );
// }

// export default Home;











// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// function Home() {
//   const [commentInput, setCommentInput] = useState("");
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/posts")
//       .then((response) => {
//         console.log("Posts data:", response.data);
//         // Reverse the order of posts to display the newest posts first
//         setPosts(response.data.reverse());
//       })
//       .catch((error) => console.error("Error fetching posts:", error));
//   }, []);

//   const handleLike = (postId) => {
//     axios
//       .post(`http://localhost:5000/api/posts/like/${postId}`)
//       .then((response) => {
//         const updatedPosts = posts.map((post) =>
//           post._id === postId ? response.data : post
//         );
//         setPosts(updatedPosts);
//       })
//       .catch((error) => console.error("Error liking post:", error));
//   };

//   const handleAddComment = (postId, commentText) => {
//     axios
//       .post(`http://localhost:5000/api/posts/comment/${postId}`, {
//         text: commentText,
//       })
//       .then((response) => {
//         const updatedPosts = posts.map((post) =>
//           post._id === postId ? response.data : post
//         );
//         setPosts(updatedPosts);
//       })
//       .catch((error) => console.error("Error adding comment:", error));
//   };

//   return (
//     <div className="home">
//       <h2>Recent Posts</h2>
//       {posts.length === 0 ? (
//         <p>No posts found.</p>
//       ) : (
//         posts.map((post) => (
//           <div key={post._id} className="post">
//             <h3>{post.title}</h3>
//             <p>{post.content}</p>
//             {post.file && (
//               <div>
//                 {post.file.includes(".mp4") ? (
//                   <video width="320" height="240" controls>
//                     <source
//                       src={`http://localhost:5000/uploads/${post.file}`}
//                       type="video/mp4"
//                     />
//                     Your browser does not support the video tag.
//                   </video>
//                 ) : (
//                   <img
//                     src={`http://localhost:5000/uploads/${post.file}`}
//                     alt="Post Media"
// 					style={{width:"900px",height:"590px",paddingLeft:"45px",paddingRight:"45px"}}
//                   />
//                 )}
//               </div>
//             )}
//             <p>Likes: {post.likes}</p>
//             <button onClick={() => handleLike(post._id)}>Like</button>
//             <p>Comments: {post.comments.length}</p>
//             <ul>
//               {post.comments.map((comment, index) => (
//                 <li key={index}>{comment.text}</li>
//               ))}
//             </ul>
//             <input
//               type="text"
//               placeholder="Add a comment"
//               className="comment-input"
//               value={commentInput}
//               onChange={(e) => setCommentInput(e.target.value)}
//             />
//             <button
//               onClick={() => handleAddComment(post._id, commentInput)}
//               className="comment-button"
//             >
//               Add Comment
//             </button>
//           </div>
//         ))
//       )}
//       <Link to="/createpost" className="comment-button">
//         Create Post
//       </Link>

//       {/* CSS Styles */}
//       <style>
//         {`
//           .home {
//             padding: 45px;
//             width: 1350px;
//           }

//           .post {
//             margin-bottom: 20px;
//             border: 1px solid #ccc;
//             padding: 40px;
//             border-radius: 5px;
//           }

//           .post h3 {
//             margin-top: 0;
//           }

//           .post p {
//             margin-bottom: 10px;
//           }

//           .post img {
//             max-width: 100%;
//           }

//           .post video {
//             max-width: 100%;
//           }

//           .comment-input {
//             margin-top: 10px;
//             margin-right: 10px;
//             padding: 5px;
//             width: 300px;
//           }

//           .comment-button {
//             margin-top: 10px;
//             padding: 5px 10px;
//             background-color: #007bff;
//             color: #fff;
//             border: none;
//             border-radius: 5px;
//             cursor: pointer;
//           }
//         `}
//       </style>
//     </div>
//   );
// }

// export default Home;










// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// function Home() {
//   const [commentInput, setCommentInput] = useState("");
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/posts")
//       .then((response) => {
//         console.log("Posts data:", response.data);
//         // Reverse the order of posts to display the newest posts first
//         setPosts(response.data.reverse());
//       })
//       .catch((error) => console.error("Error fetching posts:", error));
//   }, []);

//   const handleLike = (postId) => {
//     axios
//       .post(`http://localhost:5000/api/posts/like/${postId}`)
//       .then((response) => {
//         const updatedPosts = posts.map((post) =>
//           post._id === postId ? response.data : post
//         );
//         setPosts(updatedPosts);
//       })
//       .catch((error) => console.error("Error liking post:", error));
//   };

//   const handleAddComment = (postId, commentText) => {
//     axios
//       .post(`http://localhost:5000/api/posts/comment/${postId}`, {
//         text: commentText,
//       })
//       .then((response) => {
//         const updatedPosts = posts.map((post) =>
//           post._id === postId ? response.data : post
//         );
//         setPosts(updatedPosts);
//       })
//       .catch((error) => console.error("Error adding comment:", error));
//   };

//   return (
//     <div className="home">
//       <Link to="/createpost" className="comment-button">
//         Create Post
//       </Link>
//       <h2>Recent Posts</h2>
//       {posts.length === 0 ? (
//         <p>No posts found.</p>
//       ) : (
//         posts.map((post) => (
//           <div key={post._id} className="post">
//             <h3>{post.title}</h3>
//             <p>{post.content}</p>
//             {post.file && (
//               <div style={{paddingLeft:"50px"}}>
//                 {post.file.includes(".mp4") ? (
//                   <video width="320" height="240" controls>
//                     <source
//                       src={`http://localhost:5000/uploads/${post.file}`}
//                       type="video/mp4"
//                     />
//                     Your browser does not support the video tag.
//                   </video>
//                 ) : (
//                   <img
//                     src={`http://localhost:5000/uploads/${post.file}`}
//                     alt="Post Media"
// 					style={{width:"700px",height:"500px",paddingLeft:"45px",paddingRight:"45px"}}
//                   />
//                 )}
//               </div>
//             )}
//             <p>Registered: {post.likes}</p>
//             <button onClick={() => handleLike(post._id)}>Registered</button>
//             <p>Comments: {post.comments.length}</p>
//             <ul>
//               {post.comments.map((comment, index) => (
//                 <li key={index}>{comment.text}</li>
//               ))}
//             </ul>
//             <input
//               type="text"
//               placeholder="Add a comment"
//               className="comment-input"
//               value={commentInput}
//               onChange={(e) => setCommentInput(e.target.value)}
//             />
//             <button
//               onClick={() => handleAddComment(post._id, commentInput)}
//               className="comment-button"
//             >
//               Add Comment
//             </button>
//           </div>
//         ))
//       )}

//       {/* CSS Styles */}
//       <style>
//         {`
//           .home {
//             padding: 45px;
//             width: 1350px;
//           }

//           .post {
//             margin-bottom: 20px;
//             border: 1px solid #ccc;
//             padding-top: 40px;
// 			padding-bottom:40px;
// 			padding-left:45px;
// 			padding-right:45px;
//             border-radius: 5px;
// 			width:900px;
//           }

//           .post h3 {
//             margin-top: 0;
// 			font-size:30px;
//           }

//           .post p {
//             margin-bottom: 10px;
// 			font-size:20px;
//           }

//           .post img {
//             max-width: 100%;
//           }

//           .post video {
//             max-width: 100%;
//           }

//           .comment-input {
//             margin-top: 10px;
//             margin-right: 10px;
//             padding: 5px;
//             width: 300px;
//           }

//           .comment-button {
//             margin-top: 10px;
//             padding: 5px 10px;
//             background-color: #007bff;
//             color: #fff;
//             border: none;
//             border-radius: 5px;
//             cursor: pointer;
//           }
//         `}
//       </style>
//     </div>
//   );
// }

// export default Home;









// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// function Home() {
//   const [commentInput, setCommentInput] = useState("");
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/posts")
//       .then((response) => {
//         console.log("Posts data:", response.data);
        
//         setPosts(response.data.reverse());
//       })
//       .catch((error) => console.error("Error fetching posts:", error));
//   }, []);

//   const handleLike = (postId) => {
//     axios
//       .post(`http://localhost:5000/api/posts/like/${postId}`)
//       .then((response) => {
//         const updatedPosts = posts.map((post) =>
//           post._id === postId ? response.data : post
//         );
//         setPosts(updatedPosts);
//       })
//       .catch((error) => console.error("Error liking post:", error));
//   };

//   const handleAddComment = (postId, commentText) => {
//     axios
//       .post(`http://localhost:5000/api/posts/comment/${postId}`, {
//         text: commentText,
//       })
//       .then((response) => {
//         const updatedPosts = posts.map((post) =>
//           post._id === postId ? response.data : post
//         );
//         setPosts(updatedPosts);
//       })
//       .catch((error) => console.error("Error adding comment:", error));
//   };



// // const handleDelete = (postId) => {
// //   const updatedPosts = posts.filter((post) => post._id !== postId);
// //   setPosts(updatedPosts);
// // };




//   return (
//     <div className="home">
//       <div className="sidebar">
//         {/* Sidebar content */}
//         <Link><h2 >USER</h2></Link>
// 		    <Link><h2 >PROFILE</h2></Link>
//         <h2>HOME</h2>
// 		    {/* <h2>CREATE POST</h2> */}
//         <Link to="/createpost"><h2>CREATE POST</h2></Link>
// 		    <Link><h2 >SETTINGS</h2></Link>

//         {/* Add your sidebar content here */}
//       </div>
//       <div className="content">
//         <Link to="/createpost" className="comment-button">
//           Create Post
//         </Link>
//         <h2>Recent Posts</h2>
//         {posts.length === 0 ? (
//           <p>No posts found.</p>
//         ) : (
//           posts.map((post) => (
//             <div key={post._id} className="post">
//               <h3>{post.title}</h3>
//               <p>{post.content}</p>
//               {post.file && (
//                 <div style={{ paddingLeft: "50px" }}>
//                   {post.file.includes(".mp4") ? (
//                     <video width="320" height="240" controls>
//                       <source
//                         src={`http://localhost:5000/uploads/${post.file}`}
//                         type="video/mp4"
//                       />
//                       Your browser does not support the video tag.
//                     </video>
//                   ) : (
//                     <img
//                       src={`http://localhost:5000/uploads/${post.file}`}
//                       alt="Post Media"
//                       style={{
//                         width: "700px",
//                         height: "00px",
//                         paddingLeft: "45px",
//                         paddingRight: "45px",
//                       }}
//                     />
//                   )}
//                 </div>
//               )}
//               <p>Registered: {post.likes}</p>
//               <button onClick={() => handleLike(post._id)}>Registered</button>
//               <p>Comments: {post.comments.length}</p>
//               <ul>
//                 {post.comments.map((comment, index) => (
//                   <li key={index}>{comment.text}</li>
//                 ))}
//               </ul>
//               <input
//                 type="text"
//                 placeholder="Add a comment"
//                 className="comment-input"
//                 value={commentInput}
//                 onChange={(e) => setCommentInput(e.target.value)}
//               />
//               <button
//                 onClick={() => handleAddComment(post._id, commentInput)}
//                 className="comment-button"
//               >
//                 Add Comment
//               </button>
//                 {/* <button
//                   onClick={() => handleDelete(post._id)}
//                   className="delete-button"
//                 >
//                   Delete
//                 </button> */}
//             </div>
//           ))
//         )}
//       </div>

//       {/* CSS Styles */}
//       <style>
//         {`
//           .home {
//             display: flex;
//             width: 100%;
//           }

//           .sidebar {
// 			position: fixed;
//             top: 0; /* Adjust this value to set the distance from the top */
//             left: 0; /* Adjust this value to set the distance from the left */
//             width: 300px;
//             height: 100vh;
//             background-color: #046B7E;
//             padding: 20px;
// 			position: -webkit-sticky;
// 			position: sticky;
//           }

//           .content {
//             flex: 1;
//             padding: 45px;
//             width: 100%;
// 			padding-left:100px;
//           }

//           .post {
//             margin-bottom: 20px;
//             border: 1px solid #ccc;
//             padding-top: 40px;
//             padding-bottom: 40px;
//             padding-left: 45px;
//             padding-right: 45px;
//             border-radius: 5px;
//             width: 900px;
//           }

//           .post h3 {
//             margin-top: 0;
//             font-size: 30px;
//           }

//           .post p {
//             margin-bottom: 10px;
//             font-size: 20px;
//           }

//           .post img {
//             max-width: 100%;
//           }

//           .post video {
//             max-width: 100%;
//           }

//           .comment-input {
//             margin-top: 10px;
//             margin-right: 10px;
//             padding: 5px;
//             width: 300px;
//           }

//           .comment-button {
//             margin-top: 10px;
//             padding: 5px 10px;
//             background-color: #007bff;
//             color: #fff;
//             border: none;
//             border-radius: 5px;
//             cursor: pointer;
//           }
//         `}
//       </style>
//     </div>
//   );
// }

// export default Home;





















// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// function Home() {
//   const [commentInput, setCommentInput] = useState("");
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/posts")
//       .then((response) => {
//         console.log("Posts data:", response.data);
        
//         setPosts(response.data.reverse());
//       })
//       .catch((error) => console.error("Error fetching posts:", error));
//   }, []);

//   const handleLike = (postId) => {
//     axios
//       .post(`http://localhost:5000/api/posts/like/${postId}`)
//       .then((response) => {
//         const updatedPosts = posts.map((post) =>
//           post._id === postId ? response.data : post
//         );
//         setPosts(updatedPosts);
//       })
//       .catch((error) => console.error("Error liking post:", error));
//   };

//   const handleAddComment = (postId, commentText) => {
//     axios
//       .post(`http://localhost:5000/api/posts/comment/${postId}`, {
//         text: commentText,
//       })
//       .then((response) => {
//         const updatedPosts = posts.map((post) =>
//           post._id === postId ? response.data : post
//         );
//         setPosts(updatedPosts);
//       })
//       .catch((error) => console.error("Error adding comment:", error));
//   };

//   return (
//     <div className="home">
//       <div className="sidebar">
//         {/* Sidebar content */}
//         <Link><h2 >USER</h2></Link>
// 		    <Link><h2 >PROFILE</h2></Link>
//         <h2>HOME</h2>
// 		    {/* <h2>CREATE POST</h2> */}
//         <Link to="/createpost"><h2>CREATE POST</h2></Link>
// 		    <Link><h2 >SETTINGS</h2></Link>

//         {/* Add your sidebar content here */}
//       </div>
//       <div className="content">
//         <Link to="/createpost" className="comment-button">
//           Create Post
//         </Link>
//         <h2>Recent Posts</h2>
//         {posts.length === 0 ? (
//           <p>No posts found.</p>
//         ) : (
//           posts.map((post) => (
//             <div key={post._id} className="post">
//               <h3>{post.title}</h3>
//               <p>{post.content}</p>
//               {post.file && (
//                 <div style={{ paddingLeft: "50px" }}>
//                   {post.file.includes(".mp4") ? (
//                     <video width="320" height="240" controls>
//                       <source
//                         src={`http://localhost:5000/uploads/${post.file}`}
//                         type="video/mp4"
//                       />
//                       Your browser does not support the video tag.
//                     </video>
//                   ) : (
//                     <img
//                       src={`http://localhost:5000/uploads/${post.file}`}
//                       alt="Post Media"
//                       style={{
//                         width: "700px",
//                         height: "500px",
//                         paddingLeft: "45px",
//                         paddingRight: "45px",
//                       }}
//                     />
//                   )}
//                 </div>
//               )}
//               <p>Registered: {post.likes}</p>
//               <button onClick={() => handleLike(post._id)}>Registered</button>
//               <p>Comments: {post.comments.length}</p>
//               <ul>
//                 {post.comments.map((comment, index) => (
//                   <li key={index}>{comment.text}</li>
//                 ))}
//               </ul>
//               <input
//                 type="text"
//                 placeholder="Add a comment"
//                 className="comment-input"
//                 value={commentInput}
//                 onChange={(e) => setCommentInput(e.target.value)}
//               />
//               <button
//                 onClick={() => handleAddComment(post._id, commentInput)}
//                 className="comment-button"
//               >
//                 Add Comment
//               </button>
//             </div>
//           ))
//         )}
//       </div>

//       {/* CSS Styles */}
//       <style>
//         {`
//           .home {
//             display: flex;
//             width: 100%;
//           }

//           .sidebar {
// 			position: fixed;
//             top: 0; /* Adjust this value to set the distance from the top */
//             left: 0; /* Adjust this value to set the distance from the left */
//             width: 300px;
//             height: 100vh;
//             background-color: #046B7E;
//             padding: 20px;
// 			position: -webkit-sticky;
// 			position: sticky;
//           }

//           .content {
//             flex: 1;
//             padding: 45px;
//             width: 100%;
// 			padding-left:100px;
//           }

//           .post {
//             margin-bottom: 20px;
//             border: 1px solid #ccc;
//             padding-top: 40px;
//             padding-bottom: 40px;
//             padding-left: 45px;
//             padding-right: 45px;
//             border-radius: 5px;
//             width: 900px;
//           }

//           .post h3 {
//             margin-top: 0;
//             font-size: 30px;
//           }

//           .post p {
//             margin-bottom: 10px;
//             font-size: 20px;
//           }

//           .post img {
//             max-width: 100%;
//           }

//           .post video {
//             max-width: 100%;
//           }

//           .comment-input {
//             margin-top: 10px;
//             margin-right: 10px;
//             padding: 5px;
//             width: 300px;
//           }

//           .comment-button {
//             margin-top: 10px;
//             padding: 5px 10px;
//             background-color: #007bff;
//             color: #fff;
//             border: none;
//             border-radius: 5px;
//             cursor: pointer;
//           }
//         `}
//       </style>
//     </div>
//   );
// }

// export default Home;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [commentInput, setCommentInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/posts")
      .then((response) => {
        console.log("Posts data:", response.data);
        setPosts(response.data.reverse());
      })
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  const handleLike = (postId) => {
    axios
      .post(`http://localhost:5000/api/posts/like/${postId}`)
      .then((response) => {
        const updatedPosts = posts.map((post) =>
          post._id === postId ? response.data : post
        );
        setPosts(updatedPosts);
      })
      .catch((error) => console.error("Error liking post:", error));
  };

  const handleAddComment = (postId, commentText) => {
    axios
      .post(`http://localhost:5000/api/posts/comment/${postId}`, {
        text: commentText,
      })
      .then((response) => {
        const updatedPosts = posts.map((post) =>
          post._id === postId ? response.data : post
        );
        setPosts(updatedPosts);
      })
      .catch((error) => console.error("Error adding comment:", error));
  };

  const handleDelete = (postId) => {
    const updatedPosts = posts.filter((post) => post._id !== postId);
    setPosts(updatedPosts);
  };


  return (
    <div className="home">
      <div className="sidebar">
        {/* Sidebar content */}
        <Link to="/user"><h2>USER</h2></Link>
        <Link to="/Profile"><h2>PROFILE</h2></Link>
        <h2>HOME</h2>
        <Link to="/createpost"><h2>CREATE POST</h2></Link>
        <Link to="/settings"><h2>SETTINGS</h2></Link>

        {/* Add your sidebar content here */}
      </div>
      <div className="content">
        <Link to="/createpost" className="comment-button">
          Create Post
        </Link>
        <h2>Recent Posts</h2>
        {posts.length === 0 ? (
          <p>No posts found.</p>
        ) : (
          posts.map((post) => (
            <div key={post._id} className="post">
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              {post.file && (
                <div style={{ paddingLeft: "50px" }}>
                  {post.file.includes(".mp4") ? (
                    <video width="320" height="240" controls>
                      <source
                        src={`http://localhost:5000/uploads/${post.file}`}
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      src={`http://localhost:5000/uploads/${post.file}`}
                      alt="Post Media"
                      style={{
                        width: "700px",
                        height: "400px",
                        paddingLeft: "45px",
                        paddingRight: "45px",
                      }}
                    />
                  )}
                </div>
              )}
              <p>Registered: {post.likes}</p>
              <button onClick={() => handleLike(post._id)}>Like</button>
              <p>Comments: {post.comments.length}</p>
              <ul>
                {post.comments.map((comment, index) => (
                  <li key={index}>{comment.text}</li>
                ))}
              </ul>
              <input
                type="text"
                placeholder="Add a comment"
                className="comment-input"
                value={commentInput}
                onChange={(e) => setCommentInput(e.target.value)}
              />
              <button
                onClick={() => handleAddComment(post._id, commentInput)}
                className="comment-button"
              >
                Add Comment
              </button>
              <button className="deletebutton" onClick={() => handleDelete(post._id)}>Delete</button>
            </div>
          ))
        )}
      </div>

      {/* CSS Styles */}
      <style>
        {`

          .deletebutton{
            margin-left: 360px;
          }
          .home {
            display: flex;
            width: 100%;
          }

          .sidebar {
            position: fixed;
            top: 0;
            left: 0;
            width: 300px;
            height: 100vh;
            background-color: #046B7E;
            padding: 20px;
            position: -webkit-sticky;
            position: sticky;
          }

          .content {
            flex: 1;
            padding: 45px;
            width: 100%;
            padding-left: 100px;
          }

          .post {
            margin-bottom: 20px;
            border: 1px solid #ccc;
            padding-top: 40px;
            padding-bottom: 40px;
            padding-left: 45px;
            padding-right: 45px;
            border-radius: 5px;
            width: 900px;
          }

          .post h3 {
            margin-top: 0;
            font-size: 30px;
          }

          .post p {
            margin-bottom: 10px;
            font-size: 20px;
          }

          .post img {
            max-width: 100%;
          }

          .post video {
            max-width: 100%;
          }

          .comment-input {
            margin-top: 10px;
            margin-right: 10px;
            padding: 5px;
            width: 300px;
          }

          .comment-button {
            margin-top: 10px;
            padding: 5px 10px;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
}

export default Home;