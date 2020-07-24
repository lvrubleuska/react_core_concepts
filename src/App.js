import React from 'react';

let greetingCreateElement = React.createElement("div", null, "Hello World");
let GreetingFunctionalComponent = () => <div>Hello World</div>;

class GreetingComponent extends React.Component {
  render() {
    return <div>Hello World</div>;
  }
}

class GreetingPureComponent extends React.PureComponent {
  render() {
    return <div>Hello World</div>;
  }
}

export { greetingCreateElement, GreetingFunctionalComponent, GreetingComponent, GreetingPureComponent };
