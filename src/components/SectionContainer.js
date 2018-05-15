import React, { Component } from 'react';

import { Row, Col} from 'reactstrap';

import MailListGrid from './MailListGrid';
import ComposeMailForm from './ComposeMailForm';

export default class SectionContainer extends Component {

	render() {

		return(
      <Row>
        {(this.props.activeSection !== 'Compose') && 
                        <MailListGrid emails={this.props.emails}/>}
        {(this.props.activeSection === 'Compose') && 
                        <ComposeMailForm/>}
      </Row>);
	}
}
