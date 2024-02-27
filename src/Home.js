import React from 'react'
import { useEffect,useState } from 'react'
import './Home.css'
import sport from './assets/kart-4312121_1920.jpg'
import car from './assets/car.jpg'
import Brainiacs from './assets/BRAINIACS LOGO copy.png'
import   astra from './assets/Astra final Logo nobg.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import CountUp from 'react-countup';


AOS.init();

const Home = () => {

 
  return (
    <div>
       
        <nav class="navbar navbar-expand-md  fixed-top">
            
  <div class="container-fluid  " >

    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
     <i class="fa-solid fa-bars text-white"></i>
    </button>
    
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title white" id="offcanvasNavbarLabel">Inovate Ignite</h5>
        <i  data-bs-dismiss="offcanvas" aria-label="Close" class="fa-solid fa-xmark close-btn offclose"></i>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
          <li class="nav-item " data-bs-dismiss="offcanvas">
            <a class="nav-link " aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item "  data-bs-dismiss="offcanvas">
            <a class="nav-link " href="#explore">Explore</a>
          </li>
          <li class="nav-item "  data-bs-dismiss="offcanvas">
            <a class="nav-link " href="#contact">Contact us</a>
          </li>
          
        </ul>
      
      </div>
    </div>
  </div>
</nav>



<div class='cars'>
<h2 className='text-center rob cl pt-2'  id="explore">Explore Our Cars</h2>
  <img src={car} id="car-photo"></img>
</div>





<div className="explore container" >
<div   class=" row">
    <h2 className='text-center rob cl pt-3'  id="explore">Explore Our Teams</h2>
  <div class="col-md-6">
    <div class="card">
      <div class="team-hover">
        <img src={astra}  class="card-img-top" alt="..."/>
      </div>
      <div class="card-body" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500">
        <h5 class="card-title pop">Team Astra</h5>
        <p class="card-text"> Solar Kart Racing Team: Powering Innovation, Racing towards Sustainability </p>
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <div class="card">
      <div class="team-hover">
        <img src={Brainiacs}  class="card-img-top" alt="..."/>
      </div>
      
      <div class="card-body" data-aos="fade-down" data-aos-easing="linear"     data-aos-duration="500">
       <div className='wrap'></div>
        <h5 class="card-title pop">Team Brainiacs</h5>
        <p class="card-text">Brainiacs - Ekart Racing  : Fueling Passion, Driving Excellence </p>
      </div>
    </div>
  </div>
</div>


</div>

  
  <div className='container-fluid journey' id="background">

    
  <h2 className='text-center rob cl pt-3'>Our Journey</h2>
  <div className="container p-5">
  <div className="row text-center">
           <div className="col-md-3">
           <i class="fa-solid fa-trophy"></i>
                <h3><CountUp end={100} enableScrollSpy scrollSpyDelay={100}/>+</h3>
                <p>Championship Wins</p>
           </div>
           <div className="col-md-3">
           <i class="fa-solid fa-car"></i>
           <h3><CountUp end={10} enableScrollSpy scrollSpyDelay={100}/>+</h3>
                <p>Cars Made </p>
           </div>
           <div className="col-md-3">
           <i class="fa-solid fa-award"></i>
           <h3><CountUp end={120} enableScrollSpy scrollSpyDelay={100}/>+</h3>
           
                <p>Awards Won</p>
           </div>
           <div className="col-md-3">
           <i class="fa-solid fa-lightbulb"></i>
           <h3><CountUp end={40} enableScrollSpy scrollSpyDelay={100}/>+</h3>
                <p>Innovation Awards</p>
           </div>
         </div>
      </div>
       

  </div>



  {/* contact page */}

<div className="container-fluid container" id='contact'>



<h2 className='text-center rob cl pt-3'>Contact</h2>
<div class="contactus">
  <div id="contact-astra">
 <p className='cl'><i class="fa-regular fa-envelope"></i> astra@gmail.in</p>
 <p > Follow us On :  <br/><i class="fa-brands fa-x-twitter"></i><br/><i class="fa-brands fa-facebook"></i><br/><i class="fa-brands fa-instagram"></i><br/><i class="fa-brands fa-linkedin"></i>  </p>
  </div>
  <div id="contact-braniaces">
<p className='cl'><i class="fa-regular fa-envelope"></i> astra@gmail.in</p>
 <p > Follow us On :  <br/><i class="fa-brands fa-x-twitter"></i><br/><i class="fa-brands fa-facebook"></i> <br/><i class="fa-brands fa-instagram"></i><br/> <i class="fa-brands fa-linkedin"></i>  </p>
  </div>
</div>
 <p><br/><br/><i class="fa-solid fa-location-dot"> </i > Sri krishna College of Engineering And Technology Kuniyamuthur, Tamil Nadu 641008 </p>
</div>

</div>
  )
}

export default Home
