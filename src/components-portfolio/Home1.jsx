import React from 'react'
import web from '../images/darshana.jpg';

function Home1() {
    return (
        <>
        <section class="home bd-grid" id="home">
                <div class="home__data">
                    <h1 class="home__title">Hi,<br/>I'am <span class="home__title-color">Darshana</span>

                    <br/>Front End Developer</h1>

                    <a href="mailto:darshanadey120@gmail.com" class="button">Contact</a>
                </div>

                <div class="home__social">
                    <a href="https://www.linkedin.com/in/darshanadey/" target="_blank" class="home__social-icon"><i class='bx bxl-linkedin'></i></a>
                    <a href="https://www.instagram.com/sweet_darsh_/" class="home__social-icon"><i class='bx bxl-instagram' ></i></a>
                    <a href="https://github.com/deydarshana" class="home__social-icon"><i class='bx bxl-github' ></i></a>
                </div>

                <div class="home__img">    
                    <img src={web} alt="" />
                </div>
            </section>
        </>
    )
}

export default Home1
