// Write your JS code here
import {Link} from "react-router-dom"
import "./index.css"

const BlogItem = (props) => {
    const {blogData} = props
    const {id, imageUrl, avatarUrl, title, topic, author} = blogData


    return(
        <Link className="blog-item-link" to={`/blogs/${id}`}>
            <li className="blog-item-container"> 
                <img className="blog-image" src={imageUrl}/>
                <div className="blogs-text-details"> 
                    <p className="topic"> {topic} </p>
                    <h1 className="title"> {title} </h1>
                    <div className="author-avatar-container">
                        <img className="avatar-image" src={avatarUrl}/>
                        <p className="author-text"> {author} </p>
                    </div>
                </div>
            </li>
        </Link>
    )
}

export default BlogItem