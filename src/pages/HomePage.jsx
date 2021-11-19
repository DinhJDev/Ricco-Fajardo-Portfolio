import React, { useState, useEffect } from "react";
import Scroll from "../components/Scroll";
import Button from "../components/Button";

function HomePage() {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return(
        <>
            <Scroll />
            <section className="Parallax">
                <div 
                    className="Parallax_background"
                    style={{transform: `translateY(${offsetY * 0.5}px)`}} 
                />
                <div 
                    className="Parallax_box"
                    style={{transform: `translateY(${offsetY * 0.8}px)`}}
                >
                    <div className="Parallax_content">
                        <div className="Parallax_content_heading">
                            <h2 className="Parallax_content_heading_caption">Voice Actor</h2>
                            <h1 className="Parallax_content_heading_text">Ricco Fajardo</h1>
                        </div>
                        <div className="Parallax_content_heading_content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            doloremagna aliqua. Ut enim ad minim veniam, quis
                        </div>
                        <Button />
                    </div>
                </div>
            </section>
        </>
    );
}

export default HomePage;