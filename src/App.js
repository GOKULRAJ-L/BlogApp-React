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
      "title": "Understanding the Dangers",
      "body": "Learn about the harmful effects of drug abuse on physical and mental health. Stay informed to make smart choices for a healthier life."
    },
    {
      "id": 2,
      "title": "Peer Support and Influence",
      "body": "Explore the impact of peer pressure and how to resist it. Build a supportive network to encourage positive choices and discourage substance abuse."
    },
    {
      "id": 3,
      "title": "Effective Communication",
      "body": "Enhance your communication skills to express concerns and seek help. Open conversations play a crucial role in preventing and addressing drug-related issues."
    },
    {
      "id": 4,
      "title": "Recognizing Warning Signs",
      "body": "Educate yourself on the warning signs of drug abuse in individuals. Early detection can lead to timely intervention and support for those in need."
    },
    {
      "id": 5,
      "title": "Building Resilience",
      "body": "Discover strategies to build resilience and cope with life's challenges without turning to substances. Resilient individuals are better equipped to resist the temptation of drugs."
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
      <Header name ="Prototype"/>
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

