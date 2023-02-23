import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import InfoBlog from "./InfoBlog.js";
import LeftBlogs from "./LeftBlogs.js";

const blogHeadingData = {
    heading: 'TITLE HEADING',
    description: 'Title description',
    date: 'Sep 4, 2023',
    content: 'Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.',
    imageSrc: "images/blog/woods.jpg",
    button: 'Comments',
}
const blogEntryData = {
   heading:'BLOG ENTRY',
   description:'Title description',
   date:'April 7, 2022',
   content:'Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.',
   imageSrc:"images/blog/bridge.jpg",
   button: 'Comments',
}

const infoBlogData = {
    title: 'Shiv Yadav',
    imageSrc: 'images/blog/avatar_1.jpg',
    content: 'Just me, myself and I, exploring the universe of uknownment. I have a heart of love and a interest of lorem ipsum and mauris neque quam blog. I want to share my world with you.'
}

function Tags(props){
    return(
        <>
            <div class="container">
            <div class="tags">
                <h3>{props.heading}</h3>
                <div>
                <Link className="blogTitle" to='blogTitle'>{props.blogTitle}</Link>
                <Link className="blogEntry" to='blogEntry'>{props.blogEntry}</Link>
                <Link className="blogName" to='blogName'>{props.blogName}</Link>
                </div>
            </div>
            </div>
        </>
    );
}

export default Tags;