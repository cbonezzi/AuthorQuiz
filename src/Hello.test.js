
import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

function Hello(props) {
  return <h1>Hello at {props.now}</h1>
}

const moment = new Date(1588946400000);

describe("When setting up testing", () => {

  let result;
  beforeAll(() => {
    result = Hello({now: moment.toISOString()});
  });
  
  it("it is h1", () => {
    expect(result.type).toBe("h1");
  });

  it("has children", () => {
    expect(result.props.children).toBeTruthy();
  });
});

describe("When testing with ReactDOM", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Hello now={moment.toISOString()} />, div);
  });
});

Enzyme.configure({ adapter: new Adapter() });

describe("When tesitng with Enzyme", ()=> { 
  it("renders a h1", () => {
    const wrapper = shallow(<Hello now={moment.toISOString()} />);
    expect(wrapper.find("h1").length).toBe(1);
  });
});
