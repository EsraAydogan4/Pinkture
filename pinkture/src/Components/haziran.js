import React, { Component } from "react";

class PinAddingPage extends Component {
state = {
pin: {
imageUrl: "",
title: "",
description: ""
}
};

handleChange = (event) => {
this.setState({
[event.target.name]: event.target.value
});
};

handleSubmit = (event) => {
event.preventDefault();


// Add the pin to the list of pins
this.props.addPin(this.state.pin);

// Close the pin adding page
this.props.closePinAddingPage();

};

render() {
return (
<div>
<h2>Add Pin</h2>
<form onSubmit={this.handleSubmit}>
<input name="imageUrl" type="text" placeholder="Image URL" value={this.state.pin.imageUrl} onChange={this.handleChange} />
<input name="title" type="text" placeholder="Title" value={this.state.pin.title} onChange={this.handleChange} />
<input name="description" type="text" placeholder="Description" value={this.state.pin.description} onChange={this.handleChange} />
<button type="submit">Add Pin</button>
</form>
</div>
);
}
}

class MainPage extends Component {
state = {
isPinAddingPageOpen: false
};

handleOpenPinAddingPage = () => {
this.setState({
isPinAddingPageOpen: true
});
};

handleClosePinAddingPage = () => {
this.setState({
isPinAddingPageOpen: false
});
};

render() {
const { isPinAddingPageOpen } = this.state;


return (
  <div>
    <button onClick={this.handleOpenPinAddingPage}>Add Pin</button>
    {isPinAddingPageOpen && (
      <PinAddingPage
        addPin={this.addPin}
        closePinAddingPage={this.handleClosePinAddingPage}
      />
    )}
  </div>
);

}
}