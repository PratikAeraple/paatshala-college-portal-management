import React, { useState }from "react";
import Header from './../header/Header'
import Navbar from './../navbar/Navbar'

function Feepayment() {

      return (
      <div>
        <Header />
        <Navbar />
      <div className="Main-header box"><h1>Fee Payment</h1></div>
      <div className="box2">
      <div className="abc">
      <a href="https://pages.razorpay.com/pl_J13cJXC3az6eGB/view" target="_blank" ><button class="button">
          <span>First year </span></button></a>
      </div>
      <div className="abc">
      <a href="https://pages.razorpay.com/pl_J13u0hDSDcYBJj/view" target="_blank"><button class="button">
          <span>second year </span></button></a>
      </div>
      <div className="abc">
      <a href="https://pages.razorpay.com/pl_J13vmehcQULv3Z/view" target="_blank"><button class="button">
          <span>Third year </span></button></a>
      </div>
      </div>
      </div>
      )
}

export default Feepayment;