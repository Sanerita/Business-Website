import React from 'react';


function Shop() {

  const buttons = document.querySelectorAll('.button');
  const menus = document.querySelectorAll('.menu');
  
  const highlight = document.createElement('span');
  document.body.appendChild(highlight);
  highlight.classList.add('highlight');
  
  // Set initial dimensions and position of 'highlight' based on activeButton coords 
  function initialHightlightLocation() {
    const activeButton = document.querySelector('.button--is-active');
    const activeButtonCoords = activeButton.getBoundingClientRect();
  
    const initialCoords = {
      width: activeButtonCoords.width,
      height: activeButtonCoords.height,
      left: activeButtonCoords.left + window.scrollX,
      top: activeButtonCoords.top + window.scrollY
    }
  
    highlight.style.width = `${initialCoords.width}px`;
    highlight.style.height = `${initialCoords.height}px`;
    highlight.style.transform = `translate(${initialCoords.left}px, ${initialCoords.top}px)`;
  }
  
  function handleClick(e) {
    e.preventDefault();
  
    buttons.forEach(button => button.classList.remove('button--is-active'));
    this.classList.add('button--is-active');
  
    // Set current dimensions and position of 'highlight' based on the clicked button 
    const buttonCoords = this.getBoundingClientRect();
    const coords = {
      width: buttonCoords.width,
      height: buttonCoords.height,
      left: buttonCoords.left + window.scrollX,
      top: buttonCoords.top + window.scrollY
    }
    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
  
    // Show the menu associated to the clicked button
    const targetMenu = document.querySelector(`#${this.dataset.target}`);
    menus.forEach(menu => {
      menu.classList.remove('menu--is-visible');
      targetMenu.classList.add('menu--is-visible');
    })
  }
  
  window.addEventListener('load', initialHightlightLocation);
  window.addEventListener('resize', initialHightlightLocation);
  buttons.forEach(button => button.addEventListener('click', handleClick));

  return (
    <div className='shop'>
       <h2>Shop</h2>

       <div class="wrapper">

<h2 className='our-menu'>Our Menu</h2>

<div className="buttons-container">
  <a href="pizzaMenu" className="button button--is-active" data-target="pizzaMenu">Pizzas</a>
  <a href="burgerMenu" className="button" data-target="burgerMenu">Burgers</a>
  <a href="drinksMenu" className="button" data-target="drinksMenu">Drinks</a>
</div>

{/* Start Pizza Menu  */}
<div className="menu menu--is-visible" id="pizzaMenu">
  <div className="item">
    <div className="item__header">
      <h3 className="item__title">Greek Pizza</h3>
      <span className="item__dots"></span>
      <span className="item__price">R69</span>
    </div>
    <p className="item__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quos harum officia eaque nobis ut.</p>
  </div>

  <div className="item">
    <div className="item__header">
      <h3 className="item__title">Cheese & mashroom Pizza</h3>
      <span className="item__dots"></span>
      <span className="item__price">R120 </span>
    </div>
    <p className="item__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quos harum officia eaque nobis ut.</p>
  </div>

  <div className="item">
    <div className="item__header">
      <h3 className="item__title">spicy Chicken Pizza</h3>
      <span className="item__dots"></span>
      <span className="item__price">R150</span>
    </div>
    <p className="item__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quos harum officia eaque nobis ut.</p>
  </div>

  <div className="item">
    <div className="item__header">
      <h3 className="item__title">Pepperoni Pizza</h3>
      <span className="item__dots"></span>
      <span className="item__price">R75</span>
    </div>
    <p className="item__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quos harum officia eaque nobis ut.</p>
  </div>
</div>
 {/* End Pizza Menu  */}

{/* Start burger Menu  */}
<div className="menu" id="burgerMenu">
  <div className="item">
    <div className="item__header">
      <h3 className="item__title">Cheeze Burger</h3>
      <span className="item__dots"></span>
      <span className="item__price">R89</span>
    </div>
    <p className="item__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quos harum officia eaque nobis ut.</p>
  </div>

  <div className="item">
    <div className="item__header">
      <h3 className="item__title">Beef Burger</h3>
      <span className="item__dots"></span>
      <span className="item__price">R150</span>
    </div>
    <p className="item__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quos harum officia eaque nobis ut.</p>
  </div>

  <div className="item">
    <div className="item__header">
      <h3 className="item__title">Chicken Burger</h3>
      <span className="item__dots"></span>
      <span className="item__price">R120</span>
    </div>
    <p className="item__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quos harum officia eaque nobis ut.</p>
  </div>

  <div className="item">
    <div className="item__header">
      <h3 className="item__title">Vegeterian Burger</h3>
      <span className="item__dots"></span>
      <span className="item__price">R120</span>
    </div>
    <p className="item__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quos harum officia eaque nobis ut.</p>
  </div>
</div> 
 {/* End burger Menu  */}

 {/* Start drinks Menu  */}
<div className="menu" id="drinksMenu">
  <div className="item">
    <div className="item__header">
      <h3 className="item__title">Draft & Lager Beers </h3>
      <span className="item__dots"></span>
      <span className="item__price">R50</span>
    </div>
    <p className="item__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quos harum officia eaque nobis ut.</p>
  </div>

  <div className="item">
    <div className="item__header">
      <h3 className="item__title">ciders</h3>
      <span className="item__dots"></span>
      <span className="item__price">R25</span>
    </div>
    <p className="item__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quos harum officia eaque nobis ut.</p>
  </div>

  <div className="item">
    <div className="item__header">
      <h3 className="item__title">Milk Shakes</h3>
      <span className="item__dots"></span>
      <span className="item__price">R32</span>
    </div>
    <p className="item__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quos harum officia eaque nobis ut.</p>
  </div>

  <div className="item">
    <div className="item__header">
      <h3 className="item__title">Fizzy Drinks</h3>
      <span className="item__dots"></span>
      <span className="item__price">R16</span>
    </div>
    <p className="item__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quos harum officia eaque nobis ut.</p>
  </div>
</div> 
 {/* End drinks Menu  */}

</div>
 {/* End Wrapper  */}
       

    </div>
  );
}

export default Shop;
