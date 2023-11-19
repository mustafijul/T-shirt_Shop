import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tshirt = useLoaderData() ;
    return (
        <div>
            <p>I am in home now alhamdulillah </p>
            <p>total tshirts are : {tshirt.length}</p>

        </div>
    );
};

export default Home;