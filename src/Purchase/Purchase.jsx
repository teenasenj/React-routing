import Boy_dress1 from './image_shoping/Boy_dress1.png'; 
import React from 'react'

class Counter extends React.Component {

	render() {
		return(
      
			<div>
		<h3>		Toggle concept</h3><Button text = "Buy Now 50% offer"> </Button>
			</div>
		)
	}
}

class Button extends React.Component
{
	state = {
		textflag: false,
	}
	
	ToggleButton() {
		this.setState(
			{textflag : !this.state.textflag}
		);
	}

	render() {
		return(
			<div><img class="ms-auto p-2 " src={ Boy_dress1}></img>
				<button onClick={() => this.ToggleButton()}>
				{ this.state.textflag === false ? "Buy":"Add to Cart  " }
				</button>
				{!this.state.textflag && this.props.text}
			</div>
		)
	}
}









export default Counter;
