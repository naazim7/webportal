import React from 'react'

function Footer() {
    return (
        <div>
            <>
  <footer style={{ backgroundColor: "#0C4A6E" }} className="p-t-75 p-b-32 text-white">
    <div className="container-fluid">
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* First Column: Logo */}
          <div className="col-md-3">
            <img src="https://cu.ac.bd/assets/image/culogo.png" alt="Logo" className="footer-logo" height={"auto"} width={"100px"}/>
          </div>

          {/* Second Column: Important Links */}
          <div className="col-md-3">
            <h5>Important Links</h5>
            <ul className="list-unstyled">
              <li><a href="#">Result Processing</a></li>
              <li><a href="#">NOC / GO</a></li>
              <li><a href="#">Apply for a Leave</a></li>
              {/* Add more links as needed */}
            </ul>
          </div>

          {/* Third Column: Social Links */}
          <div className="col-md-3">
            <h5>Social Links</h5>
            <ul className="list-unstyled">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
              {/* Add more social links as needed */}
            </ul>
          </div>

          {/* Fourth Column: Contact Info */}
          <div className="col-md-3">
            <h5>Contact Us</h5>
            <p>Jobra, Hathazari</p>
            <p>Email: contact@cu.ac.bd</p>
          </div>
        </div>
      </div>
    </footer>
      
    </div>
  </footer>
  <footer style={{ backgroundColor: "#6B0E10",padding:"15px" }} className=" p-4">
    <div className="container-fluid">
      <div className="row justify-content-center">
        <p style={{ color: "white" }} className=" txt-center">
          © University of Chittagong. Chittagong 4331. Bangladesh
          {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
        </p>
      </div>
    </div>
  </footer>
</>

        </div>
    )
}

export default Footer
