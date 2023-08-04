// Write your JS code here
import {Component} from "react"
import Loader from "react-loader-spinner"
import "./index.css"
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from "../BlogItem"

class BlogList extends Component{
    state = {blogsData: [], isLoading: true}


    componentDidMount(){
        this.getBlogsData()
    }

    getBlogsData = async () => {
        const response = await fetch("https://apis.ccbp.in/blogs")
        const data = await response.json()
        
        const updatedData = data.map(eachBlog => ({
            id: eachBlog.id,
            imageUrl: eachBlog.image_url,
            avatarUrl: eachBlog.avatar_url,
            title: eachBlog.title,
            topic: eachBlog.topic,
            author: eachBlog.author
        }))
        
        this.setState({blogsData: updatedData, isLoading:false})
    } 

    renderBlogItem = () => {
        const {blogsData, isLoading} = this.state

        return (<ul className="blog-items-container"> 
                    {blogsData.map(eachBlog => <BlogItem blogData={eachBlog} key={eachBlog.id}/> )}
                </ul>)
    }

    render(){
        const {blogsData, isLoading} = this.state

        return(
            <div>
                {isLoading?  (<div data-testid="loader">
                                <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
                                </div>) : (this.renderBlogItem())}
            </div>
        )
    }
} 

export default BlogList