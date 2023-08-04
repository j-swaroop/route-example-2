// Write your JS code here
import {Component} from "react"
import Loader from "react-loader-spinner"
import "./index.css"
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'


class BlogItemDetails extends Component{
    state = {blogItemDetails: {}, isLoading: true}

    componentDidMount(){
        this.getBlogItemData()
    }

    getBlogItemData = async () => {
        const {match} = this.props
        const {params} = match
        const {id} = params
        
        const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
        const data = await response.json()
        
        const updatedData = {
            id: data.id,
            author: data.author,
            avatarUrl: data.avatar_url,
            content: data.content,
            imageUrl: data.image_url,
            title: data.title,
            topic: data.topic
        }

        this.setState({blogItemDetails: updatedData, isLoading: false})
    }

    renderBlogItemDetails = () => {
        const {blogItemDetails} = this.state
        const {id, author, avatarUrl, imageUrl, title, topic, content} = blogItemDetails
        return(
            <>
                <h1 className="blog-item-title"> {title} </h1>
                <div className="blog-item-author-avatar-container"> 
                    <img className="blog-item-avatar" src={avatarUrl}/>
                    <p className="blog-item-author"> {author} </p>
                </div>
                <img alt={title} className="blog-item-image" src={imageUrl}/>
                <p className="blog-item-content"> {content} </p>
            </>
        )
    }

    render(){
        const {blogItemDetails, isLoading} = this.state
        const {id, author, avatarUrl, imageUrl, title, topic, content} = blogItemDetails
        
        return(
            <div className="blog-item-details-container"> 
               {isLoading? (<div data-testid="loader">
                                <Loader data-testid="loader" className="loader" type="TailSpin" color="#00bfff" height={50} width={50} />
                            </div>) : (this.renderBlogItemDetails())}
            </div>
        )
    }
}

export default BlogItemDetails