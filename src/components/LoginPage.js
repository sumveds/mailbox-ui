import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {  Modal, ModalHeader, ModalBody, 
          Form, FormGroup, Label,
          Input, Button } from 'reactstrap';
import * as appActions from '../actions/AppActions';

export class LoginPage extends Component {
/*  handleLogin = () => {
    context.history.push('/mailbox')
  };*/

	render() {
		return(
      <Modal isOpen={true}>
        <ModalHeader>Login</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="email" id="email" placeholder="universe@mailbox.com" />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input type="password" name="password" id="password" placeholder="Password is a secret" />
            </FormGroup>
            <Button color="primary" style={{float: 'right'}} href="#/mailbox">Submit</Button>
          </Form>
        </ModalBody>
      </Modal>
    );
	}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(appActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(LoginPage);