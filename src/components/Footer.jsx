import React from "react";


const Footer = () => {

  return (
    <div>
      <footer class="footer">
        <div class="footer-left col-md-4 col-sm-6">
          <p class="about">
            <span> About the School</span> Ut congue augue non tellus bibendum, in varius tellus condimentum. In scelerisque nibh tortor, sed rhoncus odio condimentum in. Sed sed est ut sapien ultrices eleifend. Integer tellus est, vehicula eu lectus tincidunt,
            ultricies feugiat leo. Suspendisse tellus elit, pharetra in hendrerit ut, aliquam quis augue. Nam ut nibh mollis, tristique ante sed, viverra massa.
          </p>
          <div class="icons">
            <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="#"><i class="fa-brands fa-twitter"></i></a>
            <a href="#"><i class="fa-brands fa-linkedin"></i></a>
            <a href="#"><i class="fa-brands fa-instagram"></i></a>
          </div>
        </div>
        <div class="footer-center col-md-4 col-sm-6">
          <div>
            <i class="fa fa-map-marker"></i>
            <p><span> Park Street </span> Kolkata, India</p>
          </div>
          <div>
            <i class="fa fa-phone"></i>
            <p> (+91) 9021 876 543</p>
          </div>
          <div>
            <i class="fa fa-envelope"></i>
            <p><a href="#"> learn&grow@institue.com</a></p>
          </div>
        </div>
        <div class="footer-right col-md-4 col-sm-6">
          <h2> Learn&<span>Grow</span></h2>
          <p class="menu">
            <a href="#"> Home</a> |
            <a href="#"> About</a> |
            <a href="#"> News</a> |
            <a href="#"> Contact</a>
          </p>
          <p class="name"> Learn&Grow &copy; 2022</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer;