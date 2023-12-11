import React from "react";
import image from "./IMG-20191117-WA0002.jpg";
import { Link } from 'react-router-dom';

class Portfolio extends React.Component {
  render() {

    return (
      <body>
        <div class="heading">
          <div class="jumbotron text-center">
            <h1 class="display-4 jumbotron">Kumaran</h1>
            <h5 class="myoccupation">Website Developer</h5>


            <ul class="nav nav-pills nav-justified m-5 " id="navigation">
              <li class="nav-item">
                <a class="nav-link text-decoration-none border border-primary" href="#Home">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-decoration-none border border-primary" href="#Project">
                  Project
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-decoration-none border border-primary" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div><br/>

          <div class="container">
            <div class="row">
              <div class="col-sm-4">
                <div class="rounded-circle">
                  <img
                    src={image}
                    class="rounded-circle"
                    alt="myk"
                    width="180px"
                    height="200px"
                  />
                </div>
                <br />
              </div>
              <div class="col-sm-8">
                <h2 class="myskills">Career objective</h2>
                <br />
                <p class="skills" style={{width: '700px'}} >
                  To work in a professional environment where I can find myself
                  in decisive opportunities for creating value added career for
                  myself and extend quality service to my organzations.
                </p>
              </div>
            </div>
          </div>
        </div>


        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <h2 class="myskills">Techncal Skills</h2>
              <br />
              <ul class="skills">
                <li>Front end languages - HTML, CSS, Javascript, React JS</li>
                <li>Backend languages - Nodejs, Express</li>
                <li>Database - Mongo DB</li>
              </ul>
            </div>

            <div class="col-sm-6" >
              <h2 class="myskills">Certification</h2>
              <br />
              <ul class="skills">
                <li>C,C++ certified for CSC</li>
                <li>React JS certified for Elysium academy</li>
              </ul>
            </div>
            
            <div class="col-sm-12"><br /><br />
              <h2 class="myskills" id='Project'>Myproject</h2>
              <br /><br />
              <div>
                <table class="table table-light table-striped">
                  <thead>
                    <tr>
                      <th>Project Title</th>
                      <th>Project Tools</th>
                      <th>Project link</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Fetch API</td>
                      <td>HTML, CSS, Javascript, React JS, @blueprintjs/core</td>
                      <td>
                        <nav>
                           <Link to="../FetchAPI">Run Project</Link>
                         </nav>
                      </td>
                    </tr>
                    <tr>
                      <td>Redux Form</td>
                      <td>HTML, CSS, Javascript, Bootstrap, React JS</td>
                      <td>
                        <nav>
                           <Link to="../Reduxform">Run Project</Link>
                         </nav>
                      </td>
                    </tr>
                    <tr>
                      <td>Count Redux</td>
                      <td>HTML, CSS, Javascript, React JS</td>
                      <td>
                        <nav>
                           <Link to="../Count">Run Project</Link>
                         </nav>
                      </td>
                    </tr>
                    <tr>
                      <td>Guess Number</td>
                      <td>HTML, CSS, Javascript, React JS</td>
                      <td>
                         <nav>
                           <Link to="../Guess">Run Project</Link>
                         </nav>
                      </td>
                    </tr>
                    <tr>
                      <td>Calculator </td>
                      <td>HTML, CSS, Javascript, React JS</td>
                      <td>
                         <nav>
                           <Link to="../Calculator">Run Project</Link>
                         </nav>
                      </td>
                    </tr>
                  </tbody>
                </table><br /><br /><br />
              </div>
            </div>

            <div class="col-sm-12">
              <h2 class="myskills">Education qualification</h2>
              <br /><br />
              <div>
                <table class="table table-light table-striped">
                  <thead>
                    <tr>
                      <th>Degree</th>
                      <th>School/College</th>
                      <th>Y.O.P</th>
                      <th>Percentage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>B.E (ECE)</td>
                      <td>Solamalai college of Engneering</td>
                      <td>2023</td>
                      <td>76%</td>
                    </tr>
                    <tr>
                      <td>HSC</td>
                      <td>Sourastra Boys Higher Secondary</td>
                      <td>2019</td>
                      <td>70%</td>
                    </tr>
                    <tr>
                      <td>SSLC</td>
                      <td>Sourastra Boys Higher Secondary</td>
                      <td>2017</td>
                      <td>84%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div class="jumbotron text-center" id="footer">
            <ul class="nav justified-content-center">
              <li class="nav-item">
                <a
                  href="https://www.linkedn.com/"
                  class="fa fa-linkedin nav-link"
                  style={{ color: "blue" }}
                />
              </li>
              <li class="nav-item">
                <a
                  href="https://www.youtube.com/"
                  class="fa fa-youtube nav-link"
                  style={{ color: "blue" }}
                />
              </li>
              <li class="nav-item">
                <a
                  href="https://www.github.com/"
                  class="fa fa-gthub nav-link"
                  style={{ color: "blue" }}
                />
              </li>
              <li class="nav-item">
                <a
                  href="https://www.instagram.com/"
                  class="fa fa-instagram nav-link"
                  style={{ color: "blue" }}
                />
              </li>
              <li class="nav-item">
                <a
                  href="https://www.facebook.com/"
                  class="fa fa-facebook nav-link"
                  style={{ color: "blue" }}
                />
              </li>
              <li class="nav-item">
                <a
                  href="https://www.twitter.com/"
                  class="fa fa-twitter nav-link"
                  style={{ color: "blue" }}
                />
              </li>
            </ul>
          </div>
        </div>
      </body>
    );
  }
}
export default Portfolio;
