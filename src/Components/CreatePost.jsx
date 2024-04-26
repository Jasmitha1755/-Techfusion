// // CreatePost.js
// import React, { useState } from "react";
// import axios from "axios";

// function CreatePost() {
// 	const [newPost, setNewPost] = useState({
// 		title: "",
// 		content: "",
// 		file: null,
// 	});

// 	const handleInputChange = (event) => {
// 		const { name, value } = event.target;
// 		setNewPost({ ...newPost, [name]: value });
// 	};

// 	const handleFileChange = (event) => {
// 		setNewPost({ ...newPost, file: event.target.files[0] });
// 	};

// 	const handlePostSubmit = () => {
// 		const formData = new FormData();
// 		formData.append("title", newPost.title);
// 		formData.append("content", newPost.content);
// 		formData.append("file", newPost.file);

// 		axios
// 			.post("http://localhost:5000/api/posts", formData)
// 			.then((response) => {
// 				setNewPost({ title: "", content: "", file: null });
// 			})
// 			.catch((error) => console.error("Error creating post:", error));
// 	};

// 	return (
// 		<div className="create-post">
// 			<h2>Create a Post</h2>
// 			<input
// 				type="text"
// 				name="title"
// 				placeholder="Title"
// 				value={newPost.title}
// 				onChange={handleInputChange}
// 			/>
// 			<textarea
// 				name="content"
// 				placeholder="Content"
// 				value={newPost.content}
// 				onChange={handleInputChange}
// 			></textarea>
// 			<input type="file" name="file" onChange={handleFileChange} />
// 			<button onClick={handlePostSubmit}>Post</button>
// 		</div>
// 	);
// }

// export default CreatePost;







// import React, { useState } from "react";
// import axios from "axios";

// function CreatePost() {
// 	const [newPost, setNewPost] = useState({
// 		title: "",
// 		content: "",
// 		file: null,
// 	});

// 	const handleInputChange = (event) => {
// 		const { name, value } = event.target;
// 		setNewPost({ ...newPost, [name]: value });
// 	};

// 	const handleFileChange = (event) => {
// 		setNewPost({ ...newPost, file: event.target.files[0] });
// 	};

// 	const handlePostSubmit = () => {
// 		const formData = new FormData();
// 		formData.append("title", newPost.title);
// 		formData.append("content", newPost.content);
// 		formData.append("file", newPost.file);

// 		axios
// 			.post("http://localhost:5000/api/posts", formData)
// 			.then((response) => {
// 				setNewPost({ title: "", content: "", file: null });
// 			})
// 			.catch((error) => {
// 				console.error("Error creating post:", error);
// 				alert("Failed to create post. Please try again.");
// 			});
// 	};

// 	return (
// 		<div className="create-post">
// 			<h2>Create a Post</h2>
// 			<input
// 				type="text"
// 				name="title"
// 				placeholder="Title"
// 				value={newPost.title}
// 				onChange={handleInputChange}
// 			/>
// 			<textarea
// 				name="content"
// 				placeholder="Content"
// 				value={newPost.content}
// 				onChange={handleInputChange}
// 			></textarea>
// 			<input type="file" name="file" onChange={handleFileChange} />
// 			<button onClick={handlePostSubmit}>Post</button>
// 		</div>
// 	);
// }

// export default CreatePost;












// import React, { useState } from "react";
// import axios from "axios";

// function CreatePost() {
//   const [newPost, setNewPost] = useState({
//     title: "",
//     content: "",
//     file: null,
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setNewPost({ ...newPost, [name]: value });
//   };

//   const handleFileChange = (event) => {
//     setNewPost({ ...newPost, file: event.target.files[0] });
//   };

//   const handlePostSubmit = () => {
//     const formData = new FormData();
//     formData.append("title", newPost.title);
//     formData.append("content", newPost.content);
//     formData.append("file", newPost.file);

//     axios
//       .post("http://localhost:5000/api/posts", formData)
//       .then((response) => {
//         setNewPost({ title: "", content: "", file: null });
//       })
//       .catch((error) => {
//         console.error("Error creating post:", error);
//         alert("Failed to create post. Please try again.");
//       });
//   };

//   return (
//     <div className="create-post">
//       <h2>Create a Post</h2>
//       <input
//         type="text"
//         name="title"
//         placeholder="Title"
//         value={newPost.title}
//         onChange={handleInputChange}
//         className="create-input"
//       />
//       <textarea
//         name="content"
//         placeholder="Content"
//         value={newPost.content}
//         onChange={handleInputChange}
//         className="create-textarea"
//       ></textarea>
//       <input
//         type="file"
//         name="file"
//         onChange={handleFileChange}
//         className="create-file"
//       />
//       <button onClick={handlePostSubmit} className="create-button">
//         Post
//       </button>

//       {/* CSS Styles */}
//       <style>
//         {`
//           .create-post {
//             max-width: 500px;
//             margin-left: 560px;
//             padding: 20px;
//             border: 1px solid #ccc;
//             border-radius: 5px;
//           }

//           .create-post h2 {
//             text-align: center;
//             margin-bottom: 20px;
//           }

//           .create-input,
//           .create-textarea,
//           .create-file,
//           .create-button {
//             display: block;
//             width: 100%;
//             margin-bottom: 10px;
//             padding: 8px;
//             font-size: 16px;
//             border: 1px solid #ccc;
//             border-radius: 5px;
//             box-sizing: border-box;
//           }

//           .create-button {
//             background-color: #007bff;
//             color: #fff;
//             border: none;
//             cursor: pointer;
//           }
//         `}
//       </style>
//     </div>
//   );
// }

// export default CreatePost;










// import React, { useState } from "react";
// import axios from "axios";

// function CreatePost() {
//   const [newPost, setNewPost] = useState({
//     title: "",
//     content: "",
//     file: null,
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setNewPost({ ...newPost, [name]: value });
//   };

//   const handleFileChange = (event) => {
//     setNewPost({ ...newPost, file: event.target.files[0] });
//   };

//   const handlePostSubmit = () => {
//     const formData = new FormData();
//     formData.append("title", newPost.title);
//     formData.append("content", newPost.content);
//     formData.append("file", newPost.file);

//     axios
//       .post("http://localhost:5000/api/posts", formData)
//       .then((response) => {
//         setNewPost({ title: "", content: "", file: null });
//       })
//       .catch((error) => {
//         console.error("Error creating post:", error);
//         alert("Failed to create post. Please try again.");
//       });
//   };

//   return (
//     <div className="create-post-layout">
//       {/* Sidebar */}
//       <div className="sidebar">
//         {/* Add content for sidebar here */}
//         Sidebar content
//       </div>

//       {/* Main content area */}
//       <div className="main-content">
//         <div className="create-post">
//           <h2>Create a Post</h2>
//           <input
//             type="text"
//             name="title"
//             placeholder="Title"
//             value={newPost.title}
//             onChange={handleInputChange}
//             className="create-input"
//           />
//           <textarea
//             name="content"
//             placeholder="Content"
//             value={newPost.content}
//             onChange={handleInputChange}
//             className="create-textarea"
//           ></textarea>
//           <input
//             type="file"
//             name="file"
//             onChange={handleFileChange}
//             className="create-file"
//           />
//           <button onClick={handlePostSubmit} className="create-button">
//             Post
//           </button>
//         </div>
//       </div>

//       {/* CSS Styles */}
//       <style>
//         {`
//           .create-post-layout {
//             display: flex;
//             justify-content: space-between;
//             max-width: 1000px;
//             margin: 0 auto;
//           }

//           .sidebar {
//             width: 350px;
// 			height: 100vh;
//             background-color: #f0f0f0;
//             padding: 20px;
//           }

//           .main-content {
//             flex-grow: 1;
//             margin-left: 20px;
//           }

//           .create-post {
//             max-width: 500px;
//             padding: 20px;
//             border: 1px solid #ccc;
//             border-radius: 5px;
//           }

//           .create-post h2 {
//             text-align: center;
//             margin-bottom: 20px;
//           }

//           .create-input,
//           .create-textarea,
//           .create-file,
//           .create-button {
//             display: block;
//             width: 100%;
//             margin-bottom: 10px;
//             padding: 8px;
//             font-size: 16px;
//             border: 1px solid #ccc;
//             border-radius: 5px;
//             box-sizing: border-box;
//           }

//           .create-button {
//             background-color: #007bff;
//             color: #fff;
//             border: none;
//             cursor: pointer;
//           }
//         `}
//       </style>
//     </div>
//   );
// }

// export default CreatePost;










// import React, { useState } from "react";
// import axios from "axios";

// function CreatePost() {
//   const [newPost, setNewPost] = useState({
//     title: "",
//     content: "",
//     file: null,
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setNewPost({ ...newPost, [name]: value });
//   };

//   const handleFileChange = (event) => {
//     setNewPost({ ...newPost, file: event.target.files[0] });
//   };

//   const handlePostSubmit = () => {
//     const formData = new FormData();
//     formData.append("title", newPost.title);
//     formData.append("content", newPost.content);
//     formData.append("file", newPost.file);

//     axios
//       .post("http://localhost:5000/api/posts", formData)
//       .then((response) => {
// 		//setPosts([response.data, ...posts]);
//         setNewPost({ title: "", content: "", file: null });
//       })
//       .catch((error) => {
//         console.error("Error creating post:", error);
//         alert("Failed to create post. Please try again.");
//       });
//   };

//   return (
//     <div className="create-post-layout">
//       {/* Sidebar */}
//       <div className="sidebar">
//         {/* Add content for sidebar here */}
//         <h2>USER</h2>
// 		<h2>PROFILE</h2>
// 		<h2>
//         HOME
//         </h2>	
// 		<h2>CREATE POST</h2>
// 		<h2>SETTINGS</h2>
//       </div>

//       {/* Main content area */}
//       <div className="main-content">
//         <div className="create-post-container">
//           <div className="create-post" style={{width:"500px",height:"600px"}}>
//             <h2 style={{height:"60px"}}>Create a Post</h2>
//             <input
//               type="text"
//               name="title"
//               placeholder="Title"
//               value={newPost.title}
//               onChange={handleInputChange}
//               className="create-input"
// 			  style={{marginTop:"50px",marginBottom:"50px",height:"48px"}}
//             />
//             <textarea
//               name="content"
//               placeholder="Content"
//               value={newPost.content}
//               onChange={handleInputChange}
//               className="create-textarea"
// 			  style={{height:"138px"}}
//             ></textarea>
//             <input
//               type="file"
//               name="file"
//               onChange={handleFileChange}
//               className="create-file"
// 			  style={{marginTop:"50px",height:"87px",paddingTop:"29px"}}
//             />
//             <button onClick={handlePostSubmit} className="create-button" style={{marginTop:"60px",height:"48px",fontSize:"21px"}}>
//               POST
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* CSS Styles */}
//       <style>
//         {`
//           .create-post-layout {
//             display: flex;
//             justify-content: space-between;
            
//             margin: 0 auto;
//           }

//           .sidebar {
//             width: 350px;
//             height: 100vh;
//             background-color: #046B7E;
//             padding: 20px;
//           }

//           .main-content {
//             flex-grow: 1;
//             margin-left: 400px;
//             display: flex;
//             justify-content: center;
//             align-items: center;
//           }

//           .create-post-container {
//             max-width: 500px;
//             margin: 0 auto; /* Center the container */
//           }

//           .create-post {
//             padding: 20px;
//             border: 1px solid #ccc;
//             border-radius: 5px;
//           }

//           .create-post h2 {
//             text-align: center;
//             margin-bottom: 20px;
//           }

//           .create-input,
//           .create-textarea,
//           .create-file,
//           .create-button {
//             display: block;
//             width: 100%;
//             margin-bottom: 10px;
//             padding: 8px;
//             font-size: 16px;
//             border: 1px solid #ccc;
//             border-radius: 5px;
//             box-sizing: border-box;
//           }

//           .create-button {
//             background-color: #007bff;
//             color: #fff;
//             border: none;
//             cursor: pointer;
//           }
//         `}
//       </style>
//     </div>
//   );
// }

// export default CreatePost;







import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Import Link from React Router

function CreatePost() {
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    file: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handleFileChange = (event) => {
    setNewPost({ ...newPost, file: event.target.files[0] });
  };

  const handlePostSubmit = () => {
    const formData = new FormData();
    formData.append("title", newPost.title);
    formData.append("content", newPost.content);
    formData.append("file", newPost.file);

    axios
      .post("http://localhost:5000/api/posts", formData)
      .then((response) => {
		//setPosts([response.data, ...posts]);
        setNewPost({ title: "", content: "", file: null });
      })
      .catch((error) => {
        console.error("Error creating post:", error);
        alert("Failed to create post. Please try again.");
      });
  };

  return (
    <div className="create-post-layout">
      {/* Sidebar */}
      <div className="sidebar">
        {/* Add content for sidebar here */}
        <Link><h2>USER</h2></Link>
		<Link><h2>PROFILE</h2></Link>
		<Link to="/Home"><h2>HOME</h2></Link> {/* Link to the home page */}
		<h2>CREATE POST</h2>
		<Link><h2>SETTINGS</h2></Link>
      </div>

      {/* Main content area */}
      <div className="main-content">
        <div className="create-post-container">
          <div className="create-post" style={{width:"500px",height:"600px"}}>
            <h2 style={{height:"60px"}}>Create a Post</h2>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={newPost.title}
              onChange={handleInputChange}
              className="create-input"
			  style={{marginTop:"50px",marginBottom:"50px",height:"48px"}}
            />
            <textarea
              name="content"
              placeholder="Content"
              value={newPost.content}
              onChange={handleInputChange}
              className="create-textarea"
			  style={{height:"138px"}}
            ></textarea>
            <input
              type="file"
              name="file"
              onChange={handleFileChange}
              className="create-file"
			  style={{marginTop:"50px",height:"87px",paddingTop:"29px"}}
            />
            <button onClick={handlePostSubmit} className="create-button" style={{marginTop:"60px",height:"48px",fontSize:"21px"}}>
              POST
            </button>
          </div>
        </div>
      </div>

      {/* CSS Styles */}
      <style>
        {`
          .create-post-layout {
            display: flex;
            justify-content: space-between;
            
            margin: 0 auto;
          }

          .sidebar {
            width: 350px;
            height: 100vh;
            background-color: #046B7E;
            padding: 20px;
          }

          .main-content {
            flex-grow: 1;
            margin-left: 400px;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .create-post-container {
            max-width: 500px;
            margin: 0 auto; /* Center the container */
          }

          .create-post {
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
          }

          .create-post h2 {
            text-align: center;
            margin-bottom: 20px;
          }

          .create-input,
          .create-textarea,
          .create-file,
          .create-button {
            display: block;
            width: 100%;
            margin-bottom: 10px;
            padding: 8px;
            font-size: 16px;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-sizing: border-box;
          }

          .create-button {
            background-color: #007bff;
            color: #fff;
            border: none;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
}

export default CreatePost;
