"use strict"

function AlertBtn(){
  const alertStyle = {
    backgroundColor:"pink",
    borderRadius:"10%",
    color:"white",
    fontSize: "34px",
    padding: "10%",
  }
  return (
    <div>
      <p style={alertStyle}>A simple primary alert—check it out!</p>
      <button style={alertStyle}>Submit</button>
    </div>
  );
}
