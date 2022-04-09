// import Landing_Page from "./images/Landing_Page.gif"

// This will be a home page (the first page we reach when we load the website)
// It will one button which links to Rules.js, and another which takes you to Game.js
// I've set up the basic funtionality, once we have react router working, we can add
// 'onClick' functions to the buttons to direct to the right pages

 export const Home = () => {
  return ( 
    <div className="Home">
      <h1>Home</h1>
        <button>Rules</button> <button>Play!</button>
    </div>
   );
}

 

  // <div className="landing_page" style={{ backgroundImage: `url(${Landing_Page})` }}>

    // </div>