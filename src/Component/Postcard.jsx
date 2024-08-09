import React from 'react'
import appwriteService from '../Appwrite/Config'
import {Link} from "react-router-dom"
function Postcard({$id,title,featuredImaege}) {
    return (
        <Link to={`/post/${$id}`}>
            <div className='w-ful; bg-gray-100 rounded-xl p-4'>
                <div className='w-full justify-center mb-4'>
                    <img src={appwriteService.getFilePreview(featuredImaege)} alt={title}
                        className='rounded-xl'
                    />
                </div>
                <h2 className='text-xl font-bold'>{title}</h2>
            </div>
        </Link>
    )
}

export default Postcard
