import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { bindActionCreators } from "react-redux";
import { connect } from "react-redux";
import { addReminder } from "./actions";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }
  handleClick() {
    this.props.addReminder(this.state.text);
  }
  handleReminders() {
    const { reminders } = this.props;
    console.log("reminders is ", reminders);
    return (
      <ul className="list-group col-sm-4">
        {reminders.map((reminder) => {
          return (
            <li key={reminder.id}>
              <div>{reminder.text}</div>
            </li>
          );
        })}
      </ul>
    );
  }
  render() {
    return (
      <div className="App">
        <Form className="mt-5">
          <Form.Group className="mb-1" controlId="formBasicPassword">
            <Form.Label className="title">Reminder</Form.Label>
            <Form.Control
              className="input"
              type="text"
              placeholder="add reminder"
              onChange={(event) => this.setState({ text: event.target.value })}
            />
          </Form.Group>
          <Button
            className="button"
            variant="success"
            type="button"
            onClick={() => this.handleClick()}
          >
            Add
          </Button>
        </Form>
        {this.handleReminders()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    reminders: state,
  };
}

export default connect(mapStateToProps, { addReminder })(App);
