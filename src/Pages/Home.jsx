import React from "react";
import { Link } from "react-router-dom";

const Home = () => {

    return (
        <div>

            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item">
                        <img class="d-block w-100" src="https://s3-us-west-2.amazonaws.com/media.forumbee.com/i/96611901-29ba-444a-b140-d9f1f31c9d0e/h/547.png" alt="First slide" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Build Your Knowledge</h5>
                            <p>Learn & Grow</p>
                        </div>
                    </div>
                    <div class="carousel-item  active">
                        <img class="d-block w-100" src="https://s3-us-west-2.amazonaws.com/media.forumbee.com/i/0451ed98-b52f-4b21-a56b-e46c73f660fd/h/547.png" alt="Second slide" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Build Your Knowledge</h5>
                            <p>Learn & Grow</p>
                        </div>

                    </div>

                    <div class="carousel-item">
                        <img class="d-block w-100" src="https://s3-us-west-2.amazonaws.com/media.forumbee.com/i/2e9088c3-2f5d-4e79-9675-87ce87878e06/h/547.png" alt="Third slide" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Build Your Knowledge</h5>
                            <p>Learn & Grow</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="https://s3-us-west-2.amazonaws.com/media.forumbee.com/i/5edd90c6-ef62-4b19-bc37-fa30afd9df09/h/547.png" alt="Third slide" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Build Your Knowledge</h5>
                            <p>Learn & Grow</p>
                        </div>
                    </div>

                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
            <div class="section margin-top_50">
                <div className="home-about">
                    <div class="row">
                        <div class="col-md-6 layout_padding_2">
                            <div class="full">
                                <div class="heading_main_text_align_left">
                                    <h2><span>Welcome To</span> Education</h2>
                                </div>
                                <div class="full">
                                    <p>Education is an art of life which makes our life easy and better. We can also term education as another form of knowledge. A child is born ignorant but he learns various skills and techniques, all are various types of education.<br></br>

Evidence of education in India can be seen from the Vedic period. In Hinduism, children use to start their education from the age of 5, whereas in Buddhism it was 8 years. It is an education that inspires us well and helps us to brighten our future.<br></br>

</p>
                                </div>
                                <div class="full">
                                    <a class="hvr-radial-out button-theme" href="#">About more</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="full">
                                <img className="homeimgpersonalied" src="https://us.123rf.com/450wm/snhandini/snhandini1806/snhandini180600130/103386845-never-stop-learning-and-never-give-up-inspirational-quote-.jpg?ver=6" alt="#" />

                            </div>
                        </div>

                    </div>
                </div>
                <div className="home-about">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="full">
                                <img className="homeimgpersonalied" src="https://elearningindustry.com/wp-content/uploads/2020/03/how-to-effectively-conduct-classes-online-1.png" alt="#" />

                            </div>
                        </div>
                        <div class="col-md-6 layout_padding_2">
                            <div class="full">
                                <div class="heading_main_text_align_left">
                                    <h2><span>Personalized Portals For Students, Teachers, Parents</span></h2>
                                </div>
                                <div class="full">
                                    <p>Classter streamlines communication between all stakeholders: students, teachers, parents and administrative staff, with dedicated web portal for any type of end-user. Keeping your students and parents engaged with the academic process is a crucial factor in each students’ success. Teachers can intervene early and assure that no student-at-risk has been left behind. Classter school management solution offers a personalized portal to each type of user, ensuring that your institution is always engaged with teachers, students, and their parents.

                                    </p>
                                </div>
                                <div class="full">
                                    <a class="hvr-radial-out button-theme" href="#">About more</a>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                <div className="home-about">
                    <div class="row">

                        <div class="col-md-6 layout_padding_2">
                            <div class="full">
                                <div class="heading_main_text_align_left">
                                    <h2><span>Track your students progress</span></h2>
                                </div>
                                <div class="full">
                                    <p>Want to know the student's detailed growth report? We've got you covered. Our platform generates detailed profile based on his attendance, homework, exam reports, fee payments & much more, so that you can analyze the student's behavior & growth.
                                    </p>
                                </div>
                                <div class="full">
                                    <a class="hvr-radial-out button-theme" href="#">About more</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="full">
                                <img className="homeimgpersonalied" src="https://wida.wisc.edu/sites/default/files/Website/Teach/Teach-BR.png" alt="#" />

                            </div>
                        </div>

                    </div>
                </div>
                <div className="home-about">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="full">
                                <img className="homeimghpy" src="https://static.vecteezy.com/system/resources/previews/006/181/413/non_2x/education-distance-education-internet-studying-e-learning-remote-learning-flat-illustration-online-classes-training-courses-tutorials-home-learning-design-for-mobile-and-web-graphics-vector.jpg" alt="#" />

                            </div>
                        </div>
                        <div class="col-md-6 layout_padding_2">
                            <div class="full">
                                <div class="heading_main_text_align_left">
                                    <h2><span>Some words from our happy schools</span></h2>
                                </div>
                                <div class="full">
                                    <p>Education is a doorway to success. It is the key that unlocks multiple doors of vast opportunities that leads to the pathway of success.<br></br>

                                        Education is a highly essential tool that helps you irrespective of the age- whether you are a child or a grown-up. Education is a class of learning and is achieved through the four walls of the school as well as at the playground. Every situation and activity we see or experience teaches us something.
                                        <br></br>
                                        Education opens the door of opportunities for an individual to choose. It imparts our perception and directs us the right path with multiple viewpoints and opens the runways the success.                                    </p>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>
                <div className="mission">
                    <div className="col-md-6 layout_padding_2">
                        <div class="home-col-md-3">
                            <h1>Our Mission</h1>

                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <div>
                            <div className="homedivtitle">
                                <h4>We Are Mission Driven</h4>
                            </div>
                            <div className="homedivdet">
                                <p>Students always come first. We are here to improve the education of students. Our focus is on the whole student - we build tools that ultimately help enrich both their intellectual and emotional growth. We do this by empowering the greatest learning resource that students have at school: educators.</p>
                            </div>
                        </div>
                        <div>
                            <div className="homedivtitle">
                                <h4>We Are Always Asking Educators</h4>
                            </div>
                            <div className="homedivdet">
                                <p>We look for and identify innovative best practices that are happening in schools. We then build our tools to allow schools to more easily adopt these best practices, if the schools feel it is right for them.</p>
                            </div>
                        </div>
                        <div>
                            <div className="homedivtitle">
                                <h4>Educators, Parents, and Students Define the Problems We Solve</h4>
                            </div>
                            <div className="homedivdet">
                                <p>Our product designs are based on research done at schools. Our product development process starts and ends by interviewing each constituency in schools (administrators, teachers, students, and parents) and creatively developing solutions that empower the school and parents. While this approach requires enormous amounts of time and energy, we feel it necessary to produce a world-class software platform with real impact on schools and students.</p>
                            </div>
                        </div>
                        <div>
                            <div className="homedivtitle">
                                <h4>We Incorporate Progressive Best Practices to Improve Student Outcomes</h4>
                            </div>
                            <div className="homedivdet">
                                <p>We look for and identify innovative best practices that are happening in schools. We then build our tools to allow schools to more easily adopt these best practices, if the schools feel it is right for them.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div>

            </div>
        </div>
    )
}

export default Home;