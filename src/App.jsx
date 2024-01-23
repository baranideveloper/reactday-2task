import React from 'react';
import './App.css'



function App() {

  return (
    <div>
      <div class="row" id='maincard'>
        <div class="card" id='card1'>
          <div class="card-body">
            <h6 class="fw-normal" >FREE</h6>
            <h2 class="card-title"><i class="fa-solid fa-dollar-sign"></i>0/month</h2>
            <p class="text-start"><i class="fa-solid fa-check"></i> Single User</p>
            <p class="text-start"><i class="fa-solid fa-check"></i> 50GB Storage</p>
            <p class="text-start"><i class="fa-solid fa-check"></i> Unlimited Public Projects</p>
            <p class="text-start"><i class="fa-solid fa-check"></i> Community Access</p>
            <p class="text-start"><i class="fa-solid fa-xmark"></i> Unlimited Private Projects </p>
            <p class="text-start"><i class="fa-solid fa-xmark"></i> Dedicated Phone Support</p>
            <p class="text-start"><i class="fa-solid fa-xmark"></i> Free Subdomain</p>
            <p class="text-start"><i class="fa-solid fa-xmark"></i> Monthly Status Reports</p>
            <a href="#" id='buttons' class="btn btn-primary">BUTTON</a>
          </div>
        </div>
        <div class="card" id='card2' >
          <div class="card-body">
            <h6 class="fw-normal" >PLUS</h6>
            <h2 class="card-title"><i class="fa-solid fa-dollar-sign"></i>9/month</h2>
            <p class="text-start"><i class="fa-solid fa-check"></i> 5 Users</p>
            <p class="text-start"><i class="fa-solid fa-check"></i> 50GB Storage</p>
            <p class="text-start"><i class="fa-solid fa-check"></i> Unlimited Public Projects</p>
            <p class="text-start"><i class="fa-solid fa-check"></i> Community Access</p>
            <p class="text-start"><i class="fa-solid fa-check"></i> Unlimited Private Projects </p>
            <p class="text-start"><i class="fa-solid fa-check"></i> Dedicated Phone Support</p>
            <p class="text-start"><i class="fa-solid fa-check"></i> Free Subdomain</p>
            <p class="text-start"><i class="fa-solid fa-xmark"></i> Monthly Status Reports</p>
            <a href="#" id='buttons' class="btn btn-primary ">BUTTON</a>
          </div>
        </div>
        <div class="card" id='card3'>
          <div class="card-body">
            <h6 class="fw-normal" >PRO</h6>
            <h2 class="card-title"><i class="fa-solid fa-dollar-sign"></i>49/month</h2>
            <p class="text-start"><i class="fa-solid fa-check"></i> Unlimited Users</p>
            <p class="text-start"><i class="fa-solid fa-check"></i> 50GB Storage</p>
            <p class="text-start"><i class="fa-solid fa-check"></i> Unlimited Public Projects</p>
            <p class="text-start"><i class="fa-solid fa-check"></i> Community Access</p>
            <p class="text-start"><i class="fa-solid fa-check"></i> Unlimited Private Projects </p>
            <p class="text-start"><i class="fa-solid fa-check"></i> Dedicated Phone Support</p>
            <p class="text-start"><i class="fa-solid fa-check"></i> Free Subdomain</p>
            <p class="text-start"><i class="fa-solid fa-check"></i> Monthly Status Reports</p>
            <button id='buttons' class="btn btn-primary ">BUTTON</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
