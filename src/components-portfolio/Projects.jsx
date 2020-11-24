import React from 'react'
import web from '../images/fsm_project.jpg';
import web1 from '../images/coffee.jpg';
import web2 from '../images/work6.jpg';
import web3 from '../images/coworking.png';
import web4 from '../images/todolist.png';
import web5 from '../images/cei.jpg';

function Projects() {
    return (
        <>
         <section class="work section" id="work">
                <h2 class="section-title">My Recent Works</h2>

                <div class="work__container bd-grid">
                    <div class="work__img">
                        <img src={web} alt="" />
                       <center><p class="about__text"><a href="https://fsmbuddy.com/" target="_blank" class="home__title-color">FSM Website (ReactJS)  </a></p></center>
                    </div>

                    <div class="work__img">
                        <img src={web1} alt="" />
                        <center><p class="about__text"><a href="https://coffeenest.herokuapp.com/" target="_blank" class="home__title-color">Coffee Website (ReactJS)  </a></p></center>
                    </div>
                    <div class="work__img">
                        <img src={web2} alt="" />
                        <center><p class="about__text"><a href="https://note-keep-app.herokuapp.com/" target="_blank" class="home__title-color">Note Keep App (ReactJS)  </a></p></center>
                    </div>
                    <div class="work__img">
                        <img src={web3} alt="" />
                        <center><p class="about__text"><a href="https://36inc.in/" target="_blank" class="home__title-color">Chhattisgarh 36inc Website  </a></p></center>
                    </div>
                    <div class="work__img">
                        <img src={web4} alt="" />
                        <center><p class="about__text"><a href="https://todo-memo-app-react.herokuapp.com/" target="_blank" class="home__title-color">To Do List App (ReactJS)  </a></p></center>
                    </div>
                    <div class="work__img">
                        <img src={web5} alt="" />
                        
                        <center><p class="about__text"><a href="http://cei.cgstate.gov.in/" target="_blank" class="home__title-color">Chief Electrical Inspectorate Web Portal  </a></p></center>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects
