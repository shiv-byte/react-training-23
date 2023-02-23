import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blogs from './Components/Components';
import InfoBlog from "./Components/InfoBlog.js";
import LeftBlogs from "./Components/LeftBlogs.js";
import "./index.css";

const blogHeadingData = {
  imageSrc: "images/blog/woods.jpg",
  heading: 'TITLE HEADING inside Tags',
  desc: 'Desc',
  date: 'Sep 4, 2023',
  content: 'Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.'
}
const blogEntryData = {
 imageSrc:"images/blog/bridge.jpg",
 heading:'BLOG ENTRY Route tags',
 desc:'Desc',
 date:'April 7, 2022',
 content:'Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.'
}

const infoBlogData = {
  title: 'Shiv Yadav',
  imageSrc: 'images/blog/avatar_1.jpg',
  content: 'Just me, myself and I, exploring the universe of uknownment. I have a heart of love and a interest of lorem ipsum and mauris neque quam blog. I want to share my world with you.'
}

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Blogs/>} />
          <Route path='blogTitle' element={ <LeftBlogs {...blogHeadingData} />} />
          <Route path='blogEntry' element={ <LeftBlogs {...blogEntryData} />} />
          <Route path='blogName' element={<InfoBlog {...infoBlogData} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
