import React, { Component } from "react";
import moment from "moment";
import { Form, Button } from "react-bootstrap";
import { bindActionCreators } from "react-redux";
import { connect } from "react-redux";
import { addReminder, deleteReminder, clearReminder } from "./actions";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }
  handleClick() {
    this.props.addReminder(this.state.text, this.state.dueDate);
  }
  deleteReminder(id) {
    this.props.deleteReminder(id);
  }
  handleReminders() {
    const { reminders } = this.props;
    console.log("reminders is ", reminders);
    return (
      <ul className="list-group col-sm-4">
        {reminders.map((reminder) => {
          return (
            <li key={reminder.id} className="list-group-item">
              <div>{reminder.text}</div>
              <div>
                <em>{moment(new Date(reminder.dueDate)).fromNow()}</em>
              </div>
              <div
                className="delete-button"
                onClick={() => this.deleteReminder(reminder.id)}
              >
                {" "}
                X
              </div>
            </li>
          );
        })}
      </ul>
    );
  }

  render() {
    console.log("ini props terbaru ", this.props);
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
            <Form.Control
              type="datetime-local"
              onChange={(event) =>
                this.setState({ dueDate: event.target.value })
              }
            />
            <Button
              className="button"
              variant="success"
              type="button"
              onClick={() => this.handleClick()}
            >
              Add
            </Button>
          </Form.Group>
        </Form>
        {this.handleReminders()}
        <Button
          className="button"
          variant="danger"
          type="button"
          onClick={() => this.props.clearReminder()}
        >
          cleaar
        </Button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    reminders: state,
  };
}

export default connect(mapStateToProps, {
  addReminder,
  deleteReminder,
  clearReminder,
})(App);
