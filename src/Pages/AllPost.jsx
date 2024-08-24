import { useState,useEffect  } from 'react'
import React from 'react'
import service from '../Appwrite/Config'
import { Container, Postcard } from '../Component'
function AllPost() {
    const [post,setPost] = useState([]);
    useEffect(() => {
        service.getPosts([]).then((posts)=> {
            if(posts) {
                setPost(posts.documents)
            }
        })  
    },[])
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {post.map((post)=>(
                        <div key={post.$id} className='py-2 w-1/4'>
                            <Postcard post={post}/>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPost
