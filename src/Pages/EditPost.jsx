import React, { useEffect, useState } from 'react'
import { Container,PostForm } from '../Component'
import service from '../Appwrite/Config'
import { useNavigate, useParams } from 'react-router-dom'
function EditPost() {
    const [post,setPost] = useState([])
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(()=> {
        if(slug){
            service.getPost(slug).then((post)=>{
                if(post) {
                    setPost(post)
                }
            })
        } else {
            navigate('/');
        }
    },[slug,navigate])
    return post ? (
        <div className='py-9'>
            <Container>
                <PostForm post={post}/>
            </Container>
        </div>
    ) : null
}

export default EditPost
