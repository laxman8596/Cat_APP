import React,{useState} from 'react';


const Cat = () => {
    let colorbtnlightgreyoff ={
        backgroundColor: "lightgray",
    }
   
    let colorbtnred = {
        backgroundColor:"red",
    }
    let colorbtngreen = {
        backgroundColor:"green"
    }
    const [bluboff, setBluboff] = useState("https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png")
    // const [blubon, setBlubon] = useState("https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png")
    const [cat, setCat] = useState("https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png")
    const [switchtext, setSwitchtext] = useState("Switched On");
    const [btncoloroff, setBtncoloroff] = useState(false)
    const [btncoloron, setBtncoloron] = useState(true)
   
   
   
    const handelBluboff = ()=>{
        setBluboff("https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png");
        setCat("https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png");
        setSwitchtext("Switched off")
        setBtncoloroff(true)
        setBtncoloron(false)
       
    }
    const handelBlubon = ()=>{
        setBluboff("https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png");
        setCat("https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png");
        setSwitchtext("Switched on");
        setBtncoloroff(false)
        setBtncoloron(true)
        

    }  
  return (
    <>
    <div class="dark-background text-center">
      <div>
        <img
        src={bluboff}
          className="bulbImage"
          id="bulbImage"
        />
      </div>
      <div>
        <img
          src={cat}
          class="cat-image"
          id="catImage"
        />
      </div>
      <div class="d-flex flex-row justify-content-center pt-5">
        <div class="switch-board">
          <h1 class="switch-status" id="switchStatus">{switchtext}</h1>
          <button class="off-switch" style={btncoloroff ? colorbtnred : colorbtnlightgreyoff} id="offSwitch" onClick={handelBluboff}>
            OFF
          </button>
          <button class="on-switch" style={btncoloron ? colorbtngreen : colorbtnlightgreyoff}  id="onSwitch" onClick={handelBlubon} >
            ON
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Cat