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
import { Link } from 'react-router-dom'


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
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
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
<h2 className='text-center rob  pt-2'  id="explore">Explore Our Cars</h2>
  <img className='img-fluid' src="https://pngimg.com/d/tesla_car_PNG13.png" width={1000} id="car-photo"></img>
</div>

<div class="start-button w40 bg5">
     <div className='wrapper'>
      <a href="#explores">Start</a>

     </div>
</div>



<div className="explore container p-5" id='explores' >

<h2 className='text-center rob cl2 pt-3'  id="explore">Explore Our Teams</h2>
<div   class=" flex  ">
   
  <div className='flex'>

   <Link to='/astra'> <div class="cardbox " data-aos="fade-right" data-aos-duration="1000">
      
        <img src={astra}  class="card-img-top" alt="..."/>
     
      <div class="card-overlay ">
        <h5 class="card-title pop">Team Astra</h5>
        <p class="card-text"> Solar Kart Racing Team: Powering Innovation, Racing towards Sustainability </p>
      </div>
    </div></Link>
  </div> 




  
   <Link to="/brainiacs"> <div class="cardbox" data-aos="fade-left" data-aos-duration="1000">
 
        <img src={Brainiacs}  class="card-img-top p-5" alt="..."/>
      
      <div class="card-overlay">
       <div className='wrap'></div>
        <h5 class="card-title pop">Team Brainiacs</h5>
        <p class="card-text">Brainiacs - Ekart Racing  : Fueling Passion, Driving Excellence </p>
      </div>

    </div> </Link>

  
  
</div>


</div>

  
  <div className='container-fluid journey' id="background">

    
  <h2 className='text-center rob cl2 pt-3'>Our Journey</h2>
  <div className="container p-5">
  <div className="row text-center">
           <div className="col-md-3">
           <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                <h3><CountUp end={100} enableScrollSpy scrollSpyDelay={100}/>+</h3>
                <p>Students</p>
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
           <i class="fa-solid fa-handshake"></i>
           <h3><CountUp end={12} enableScrollSpy scrollSpyDelay={100}/>+</h3>
                <p>Sponsorship</p>
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

