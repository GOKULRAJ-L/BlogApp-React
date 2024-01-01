import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Missing from "./Components/Missing";
import Navbar from "./Components/Navbar";
import NewPost from "./Components/NewPost";
import PostPage from "./Components/PostPage";
import { useState,useEffect } from "react";
import { Routes,Route,useNavigate} from "react-router-dom";

function App() {
  const [post,setpost] = useState([
    {
      "id": 1,
      "title": "Introduction to JSON",
      "body": "JSON (JavaScript Object Notation) is a lightweight data-interchange format..."
    },
    {
      "id": 2,
      "title": "Getting Started with Python",
      "body": "Python is a versatile programming language known for its readability and ease of use..."
    },
    {
      "id": 3,
      "title": "Web Development Basics",
      "body": "Understanding the fundamentals of HTML, CSS, and JavaScript is crucial for web development..."
    },
    {
      "id": 4,
      "title": "Exploring Machine Learning Algorithms",
      "body": "Machine learning involves the use of algorithms that allow computers to learn patterns from data..."
    },
    {
      "id": 5,
      "title": "The Art of Data Visualization",
      "body": "Effective data visualization is essential for conveying complex information in a clear and concise manner..."
    },
    {
      "id": 6,
      "title": "Mobile App Development Trends",
      "body": "Stay updated on the latest trends in mobile app development, from cross-platform frameworks to emerging technologies..."
    },
    {
      "id": 7,
      "title": "Cybersecurity Best Practices",
      "body": "Protecting your digital assets requires implementing robust cybersecurity measures, including strong passwords and regular updates..."
    },
    {
      "id": 8,
      "title": "Healthy Living Tips",
      "body": "Maintaining a healthy lifestyle involves a balanced diet, regular exercise, and sufficient sleep..."
    },
    {
      "id": 9,
      "title": "Space Exploration and Discoveries",
      "body": "Discover the latest advancements in space exploration, from new exoplanet discoveries to cutting-edge space missions..."
    },
    {
      "id": 10,
      "title": "The Impact of Artificial Intelligence on Society",
      "body": "Explore the ethical considerations and societal impact of artificial intelligence as it becomes increasingly integrated into our daily lives..."
    }
  
  ])
  const [search,setsearch] = useState('')
  const [searchresults,setsearchresults] = useState([])
  const [title, settitle ]= useState('')
  const [body , setbody] = useState('')
  const navigate = useNavigate()
  //using useEffect
  useEffect(()=>{
    const filtereditems = post.filter(
      (posts)=>(
        ((posts.title).toLowerCase()).includes(search.toLowerCase()) || ((posts.body).toLowerCase()).includes(search.toLowerCase())
      ))
    setsearchresults(filtereditems)
  },[post, search])

  //function for submitting the post
  const handleSubmit = (e)=>{
    e.preventDefault()
    const id = post.length?post[post.length-1].id+1:1
    const newpost = {id:id,title:title,body:body}
    const updated = [...post,newpost]
    setpost(updated)
    settitle('')
    setbody('')
    navigate('/')

  }
  //fucntion for deleting the post
  const handledelete = (id)=>{
          const posts = post.filter((item)=>item.id !== id)
          setpost(posts)
          navigate('/')
  }

  





  return (
    <div className="App">
      <Header name ="BLogFlow"/>
      <Navbar search={search} setsearch ={setsearch} />
        <Routes>
            <Route path="/" element={<Home post ={searchresults}/>}/>
            <Route path="/post" element={<NewPost
            title={title}
            settitle = {settitle}
            body={body}
            setbody={setbody}
            handleSubmit={handleSubmit}  />}/>
            <Route path="/post/:id" element={<PostPage
            post={post}
            handledelete={handledelete} />}/>
            <Route path="/about" element={<About/>}/>
            <Route path="*" element={<Missing/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;

