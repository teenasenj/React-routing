
import girldess from './image_shoping/girldess.png'; 
import grldress1 from './image_shoping/grldress1.png'; 
import grldress2 from './image_shoping/grldress2.png'; 
import { useState } from "react";
const Girlsdress =()=>{
const[a, seta]=useState(0);

function add (){
 seta(a+2)
  }
function sub (){seta(a-2)}
return(
  <>
       
  <div class="flex">
    <div>
   &nbsp;&nbsp;
  <img class="ms-auto p-2" src={girldess}></img>
  <br></br>
  <br></br> &nbsp;&nbsp;
  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs.250
  <br></br><br></br>
  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
  <button type="button" class="btn btn-primary">Add Cart</button>
  <br></br>&nbsp;&nbsp;
  <br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
  <button onClick={add}>+</button>
  <button onClick={sub}>-</button>
{a}
</div>
<div>
   &nbsp;&nbsp;
  <img class="ms-auto p-2" src={grldress1}></img>
  <br></br>
  <br></br> &nbsp;&nbsp;
  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs.250
  <br></br><br></br>
  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
  <button type="button" class="btn btn-primary">Add Cart</button>
  <br></br>&nbsp;&nbsp;
  <br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
  <button onClick={add}>+</button>
  <button onClick={sub}>-</button>
{a}
</div>
<div>
   &nbsp;&nbsp;
  <img class="ms-auto p-2" src={grldress2}></img>
  <br></br>
  <br></br> &nbsp;&nbsp;
  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs.250
  <br></br><br></br>
  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
  <button type="button" class="btn btn-primary">Add Cart</button>
  <br></br>&nbsp;&nbsp;
  <br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
  <button onClick={add}>+</button>
  <button onClick={sub}>-</button>
{a}
</div>
<div>
   &nbsp;&nbsp;
  <img class="ms-auto p-2" src={girldess}></img>
  <br></br>
  <br></br> &nbsp;&nbsp;
  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs.250
  <br></br><br></br>
  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
  <button type="button" class="btn btn-primary">Add Cart</button>
  <br></br>&nbsp;&nbsp;
  <br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
  <button onClick={add}>+</button>
  <button onClick={sub}>-</button>
{a}
</div>
</div>
</>
) 
}
export default  Girlsdress ;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        