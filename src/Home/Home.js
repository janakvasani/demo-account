import { useEffect, useState } from 'react';
import './Home.scss';

function Home() {

    var i = 0;
    var txt = '';
    var speed = 50;

    useEffect(() => {
        function typeWriter() {
            if (i < txt.length) {
                document.getElementById("demo").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }
        typeWriter()

    },)



    return (
        <div className="home ">
            <div className="home-title">
                <div className="heading">
                    <div className="main-title anim-typewriter" >
                        <h1 className='type-writer'>Make beautiful images,</h1>
                    </div>
                    <div className="main-title anim-typewriter-1" >
                        <h1 id='type-writer'>
                            with the magic of AI</h1>
                    </div>

                    <div className="main-title anim-typewriter" >
                        <p className='type-writer'>Create winning product pages, ads, social media posts and more, within minutes.</p>
                    </div>
                    <div className="main-title anim-typewriter-1" >
                        <p id='type-writer'>
                            No design skills needed.</p>
                    </div>
                </div>
                <div className="description" id="description-text">
                </div>
            </div>

            <div className="search-inp">
                <div className="input-box">
                    <form className="nosubmit">
                        <input className="nosubmit" type="search" placeholder="Search..." />
                    </form>
                </div>
                <div className="h-bt">
                    <button>Genrate your Ai</button>
                </div>
            </div>
        </div>
    );
}

export default Home;


