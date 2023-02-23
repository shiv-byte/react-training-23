import LeftBlogs from "./LeftBlogs.js";
import InfoBlog from "./InfoBlog.js"
import PopularPost from "./PopularPost.js"
import Tags from "./Tags.js"

const blogHeadingData = {
    imageSrc: "images/blog/woods.jpg",
    heading: 'TITLE HEADING',
    desc: 'Desc',
    date: 'Sep 4, 2023',
    content: 'Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.'
  }
  const blogEntryData = {
   imageSrc:"images/blog/bridge.jpg",
   heading:'BLOG ENTRY',
   desc:'Desc',
   date:'May 7, 2022',
   content:'Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.'
  }

const infoBlogData = {
    title: 'Shiv Yadav',
    imageSrc: 'images/blog/avatar_1.jpg',
    content: 'Just me, myself and I, exploring the universe of uknownment. I have a heart of love and a interest of lorem ipsum and mauris neque quam blog. I want to share my world with you.'
}

const tagsData = {
    heading: 'Tags',
    blogTitle: 'Blog Title',
    blogEntry: 'Blog Entry',
    blogName: 'Blog Name'
}

function Blogs(){
    return (
        <div>
            <div className="heading">
                <h1><b>MY BLOG</b></h1>
                <p>Welcome to the blog of <span>Shiv</span></p>
            </div>
            <div class="content">
            <div className="left-blog-content">
                <LeftBlogs {...blogHeadingData} />
                <LeftBlogs {...blogEntryData} />
            </div>
            <div class="right-blog-content">
                <InfoBlog {...infoBlogData} />
                <PopularPost />
                <Tags {...tagsData} />
            </div>
            </div>
        </div>
    )
}

export default Blogs;