import React from "react";
import neon from './assets/neon.jpg'

const Home = (props) => {
    return (
 <section>
    <h4>This is a {props.type} blog page</h4>
 <img src={neon} title="neon Image" width={200}/> 
</section>
    )
}

export default Home