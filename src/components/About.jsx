import React from 'react'

function About(props) {
    const myStyle = {
        color : props.mode === 'dark'? "white" : "#403c82",
        backgroundColor: props.mode === 'dark'? "#403c82": "white"
    }

  return (
    <div className='container my-3' style={{color : props.mode === 'dark'? "white" : "#403c82"}}>
        <h1>About Us</h1>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item" >
    <h2 className="accordion-header" style={myStyle}>
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
        <strong>Analyze your text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={myStyle}>
      <div className="accordion-body">
        Quickly transform your writing with powerful tools that count words, characters, and even estimate reading time. Whether you’re drafting an essay, polishing a blog post, or just curious about your text, TextUtils gives you instant insights.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" style={myStyle}>
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
        <strong>Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={myStyle}>
      <div className="accordion-body">
        TextUtils is completely free — no subscriptions, no hidden charges. You can access all features anytime, anywhere, making it a handy companion for students, professionals, and casual users alike.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" style={myStyle}>
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
        <strong>Browser compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={myStyle}>
      <div className="accordion-body">
        Works seamlessly across modern browsers without any installation. Just open the app in Chrome, Edge, or Firefox and start editing your text instantly. It’s lightweight, responsive, and designed to run smoothly on desktop and mobile.
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default About
