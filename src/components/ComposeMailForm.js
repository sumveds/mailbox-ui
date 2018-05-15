import React, { Component } from 'react';

import { Row, Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';

export default class ComposeMailForm extends Component {
	render() {
		return (
				<Col md={12}>
					<Form>
				        <FormGroup>
				          <Label for="senderEmail">Email</Label>
				          <Input type="email" name="senderEmail" id="senderEmail"/>
				        </FormGroup>
				        <FormGroup>
				          <Label for="subject">Subject</Label>
				          <Input type="text" name="subject" id="subject" placeholder="Entering subject is mandatory" />
				        </FormGroup>
				        <FormGroup>
				          <Label for="mailBody">Mail Body</Label>
				          <Input type="textarea" name="mailBody" id="mailBody" />
				        </FormGroup>
				        <FormGroup>
				          <Label for="attachedFile">Attach</Label>
				          <Input type="file" name="attachedFile" id="attachedFile" />
				        </FormGroup>
				        <Button color="primary" style={{float: 'right'}}>Submit</Button>
				    </Form>
				</Col>
		);
	}
}