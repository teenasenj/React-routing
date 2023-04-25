




import girldess from './image_shoping/girldess.png'; 

import { useState } from "react";
const About =()=>{
const[a, seta]=useState(0);

function add (){
 seta(a+2)
  }
function sub (){
	seta(a-2)}
return(
  <>
     <div class="container text-center">
  <div class="row">
    <div class="col">
		</div>  

	<div class="col">

  <img class="ms-auto p-2 " src={girldess}></img>
  <br></br>
  <br></br>
   Rs.250
  <br></br><br></br>
  <button type="button" class="btn btn-primary">Add Cart</button>
  <br></br>
  <br></br>
  
  <h5>Onclick Event</h5>
  <button onClick={add}>+</button>
  <button onClick={sub}>-</button>
   {a}
<br></br>
<br></br>
<br></br>

</div>
<div class="col">
</div>
</div>
</div>
</>
) 
}

export default  About ;