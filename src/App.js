import logo from './logo.svg';
import './App.css';
import { Navbar, Nav, Card, Button } from "react-bootstrap";
import AteecaLogo from "./assets/ateecalogo.png"
import Ateeca1 from "./assets/ateeca1.jpg"
import Ateeca2 from "./assets/ateeca2.jpeg"
import staff from "./assets/staffing.jpg"
import pay from "./assets/payrolling.jpg"
import it from "./assets/it.jfif"
import group from "./assets/group.png"
import insurence from "./assets/insurence.png"
import b from "./assets/b&f.jpg"
import pharma from "./assets/pharma.webp"
import energy from "./assets/energy2.webp"
import web from "./assets/wbence.png"
import nm from "./assets/nmsdc.png"
import hexa from "./assets/hexa.jpg"
import stati from "./assets/static.jpg"
import location from "./assets/location.webp"
import phone from "./assets/phone.png"
import abc from "./assets/print.webp"
import mail from "./assets/mail.png"
import corona from "./assets/corona.jpg"
function App() {
  return (
    <div className="App">
      <div id="back1">
      <Navbar className="navbars">
        <img id="images" src={AteecaLogo}></img>
        <Navbar.Brand id="texts" href="#home">Home</Navbar.Brand>
        <Navbar.Brand id="texts">About Us</Navbar.Brand>
        <Navbar.Brand id="texts">Services</Navbar.Brand>
        <Navbar.Brand id="texts">Industry</Navbar.Brand>
        <Navbar.Brand id="texts">Technology</Navbar.Brand>
        <Navbar.Brand id="texts">Careers</Navbar.Brand>
        <Navbar.Brand id="texts">Contact</Navbar.Brand>
      </Navbar>
      <hr id="hr1"></hr>
        <div id="heading">
          <div>
          <h2>Get Your</h2>
          <h2>Dream Job</h2>
          <p>Paragraphs are often made up of several sentences. There are usually between three and eight sentences. Paragraphs can begin with an indentation (about five spaces), or by missing a line out, and then starting again. This makes it easier to see when one paragraph ends and another begins.</p>
          <div id="know">
          <h4>Know More</h4><h5>Get in Touch</h5></div>
          </div>
          <img src={Ateeca1}></img>
          </div>
        </div>
      <div id="ome">
        <div id="first">
            <img src={Ateeca2}></img>
            <div>
              <h3>WELCOME TO</h3>
              <h1>ATEECA</h1>
              <p>Paragraphs are often made up of several sentences. There are usually between three and eight sentences. Paragraphs can begin with an indentation (about five spaces), or by missing a line out, and then starting again. This makes it easier to see when one paragraph ends and another begins.</p>
              <h4>Read More</h4>
            </div>
        </div>
        <hr></hr>
        <div id="three">
        <div id="second">
        <Card id="card1" border="primary">
        <Card.Img id="i1" variant="top" src={staff} />
          
          </Card>
          <br />

          <Card id="card1" border="secondary">
          <Card.Img id="i1" variant="top" src={pay} />
          
          </Card>
          <br />

          <Card id="card1" border="success">
          <Card.Img id="i1" variant="top" src={it} />
          
          </Card>
          <br />

          <Card id="card1" border="danger">
            <Card.Header><b>RECRUITMENT PROCESS OUTSOURCING</b></Card.Header>
            <Card.Body>
            <Card.Text>
                  Some quick example text to build on the card title and make up the bulk
                    of the card's content.Some quick example text to build on the card title and make up the bulk
                    of the card's content.Some quick example text to build on the card title and make up the bulk
                    of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
        </div>
        <div>
          <img id="group" src={group}></img>
        </div>
        </div>
      
      </div>
      <div id="hari">
        <h2>INDUSTRIES</h2>
        <div id="cards">
        <Card id="card2">
            <Card.Img id="im1" variant="top" src={insurence} />
            <Card.Body>
              <Card.Title>INSURANCE</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button id="button" variant="primary">Read More</Button>
            </Card.Body>
        </Card>
        <Card id="card2">
            <Card.Img id="im1" variant="top" src={b} />
            <Card.Body>
              <Card.Title>BANKING & FINANCE</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button id="button" variant="primary">Read More</Button>
            </Card.Body>
        </Card>
        </div>
        <div id="cards">
        <Card id="card2">
            <Card.Img id="im1" variant="top" src={pharma} />
            <Card.Body>
              <Card.Title>PHARMA & LIFE SCIENCES</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button id="button" variant="primary">Read More</Button>
            </Card.Body>
        </Card>
        <Card id="card2">
            <Card.Img id="im1" variant="top" src={energy} />
            <Card.Body>
              <Card.Title>ENERGY & UTILITIES</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button id="button" variant="primary">Read More</Button>
            </Card.Body>
        </Card>
        </div>
      </div>
      <div id="five">
          <h2>FACTS & FIGURES</h2>
          <div id="facts">
            <div id="gf">
              <h1>15+</h1>
              <p>YEARS IN BUSSINESS</p>
            </div>
            <div id="gf">
              <h1>80+</h1>
              <p>FRONTLINE SO CLIENTS</p>
            </div>
            <div id="gf">
              <h1>10+</h1>
              <p>COUNTRIES</p>
            </div>
            <div id="gf">
              <h1>12K+</h1>
              <p>EMPLOYEES STAFFED</p>
            </div>
          </div>
      </div>
      <div id="six">
        <h2>CERTIFICATIONS</h2>
        <div id="lk">
        <div id="kl">
            <img src={web}></img>
            <p>Certified as Women - Owned Business(MWBE) by women bussines enterprise national council (WBENC). </p>
        </div>
        <div id="kl">
            <img src={nm}></img>
            <p>Certified by the NMSDC as MBE(a women owned minority company)</p>
        </div>
        </div>
      </div>
      <div id="seven">
        <h1>CLIENTS</h1>
          <div id="san">
            <img src={hexa}></img>
            <img src={stati}></img>
          </div>
      </div>
      <div id="eight">
        <h2>TESTIMONIAL</h2>
        <div id="ok">
          <p>"with all most 15year of excellence and experience at ateeca we have been endouvring to accumulate constantly to stay upto date and meet the dynamic exsisting market and gartifying our customers."</p>
          <div id="ok1">
          <p>"with all most 15year of excellence and experience at ateeca we have been endouvring to accumulate constantly to stay upto date and meet the dynamic exsisting market and gartifying our customers."</p>
          <h6>By-</h6>
          <h6>KESAVA KIRAN</h6>
          <h6>IT Manager</h6>
          </div>
        </div>
      </div>
      <div id="nine">
        <h1>GET IN TOUCH</h1>
        <div id="vk">
          <div>
            <h3>CORPORATE ADDRESS:</h3>
            <hr></hr>
            <div id="last">
            <img src={location}></img>
            <p>1-39,1st Line, pasalur(V), pedda pappur(M), Anantapur(Dist), AP.</p>
            </div>
            <div id="last">
            <img src={phone}></img>
            <div>
              <p>+91 8179336794,</p>
              <p>+91 8247453233</p>
            </div>
            </div>
            <div id="last">
            <img src={abc}></img>
            <p>FAQ(DOB)16-06-99</p>
            </div>
            <div id="last">
            <img src={mail}></img>
            <p>kk@gmail.com</p>
            </div>
            <h2>Registered Address:</h2>
            <hr></hr>
            <div id="last">
            <img src={location}></img>
            <p>1-39,1st Line, pasalur(V), pedda pappur(M), Anantapur(Dist), AP.</p>
            </div>
            <div id="last">
            <img src={phone}></img>
            <div>
              <p>+91 8179336794,</p>
              <p>+91 8247453233</p>
            </div>
            </div>
          </div>
          <div id="sandeep">
            <h2>News</h2>
            <hr></hr>
            <div id="last1">
            <img src={corona}></img>
              <div>
              <h2>Pharma & Life Sciences</h2>
              <p>The Indian pharmaceutical industry is one that is very closely tied to the fabric of society. ... The life sciences sector comprises the pharmaceutical, biotech, and healthcare segments. This sector is increasingly achieving positive revenues globally, helped by buoyant growth in emerging markets.</p>
              <h6>Read MOre....</h6>
              </div>
            </div>
            <div id="last1">
            <img src={corona}></img>
              <div>
              <h2>Pharma & Life Sciences</h2>
              <p>The Indian pharmaceutical industry is one that is very closely tied to the fabric of society. ... The life sciences sector comprises the pharmaceutical, biotech, and healthcare segments. This sector is increasingly achieving positive revenues globally, helped by buoyant growth in emerging markets.</p>              
              <h6>Read More....</h6>
              </div>
            </div>
          </div>
          <div id="harsha">
            <h2>INDUSTRY FOCUS</h2>
            <hr></hr>
            <p>Insurance</p>
            <p>Banking & Finance</p>
            <p>Pharma & Life sciences</p>
            <p>Energy</p>
            <p>Telecom</p>
            <p>Media</p>
            <br/>
            <h2>TECHNOLOGY FOCUS</h2>
            <hr></hr>
            <p>icrosoft</p>
            <p>Java Technologies</p>
            <p>19M As/400</p>
            <p>Database</p>
            <p>Training</p>
          </div>
        </div>
      </div>
      <div id="footer">
        <p>@Copyrights 2020. kk, All Rights are under the harsha vardhan.</p>
      </div>
      <div id="luc">
      <hr></hr>
      <h2>End</h2>
      <hr></hr>
      </div>
    </div>
  );
}

export default App;
