import React from 'react';


const HomePage = () => {
  return (
  
    <div className='home'>

  <h1 className='welcome-text'>Welome to the home of best Pizza & Burgers in town. </h1>

  <div className='box-container'>
      <div className='box maroon'>
        <h1 className='box-title'>OFFERS</h1>
      <hr className='line' />
      <div className='box-content'>
       Spend R150 or more and get free delivery
        </div>
     


      </div>
      <div className='box dark-green'>
      <h1 className='box-title'> SPECIALS</h1>
      <hr className='line' />
      <div className='box-content'>
        Buy any large classic pizza and get 1 burger meal for free on sunday's
        </div>
    

      </div>
      </div>
    </div>
    );
}

export default HomePage;
