import './blog.css';
import React, {Fragment} from 'react';
import Heading from '../Common/heading';
import SimpleCard from './blogCard';




const Blog = () => {
    return (
        <Fragment >
            <Heading title={'Blog'} />
            <SimpleCard />
        </Fragment>
    )
} 

export default Blog;