import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classnames from 'classnames';

import { Input, Nav, NavItem, NavLink } from 'reactstrap';

import * as appActions from '../actions/AppActions';
import SectionContainer from './SectionContainer';
import { SECTIONS } from '../Constants';

export class MailboxPage extends Component {

	componentDidMount() {
		this.props.actions.fetchMails(this.props.activeSection);
	}

	handleSectionSelection = (sectionName) => {
	    if (this.props.activeSection !== sectionName) {
	    	this.props.actions.fetchMails(sectionName);
	    }
  	};

	render() {
		const sectionPills = SECTIONS.map((item) => {
	    return (
	        <NavItem key={item}>
        		<NavLink href="#"
        				className={classnames({ active: this.props.activeSection === item })}
          				onClick={() => { this.handleSectionSelection(item); }}>
          		{item}
          		</NavLink>
      		</NavItem>
	      );
	    });
		return(
			<div style={ {padding: '20px'}}>
				<Nav pills>
				 	{sectionPills}
	          	</Nav>
	          	<SectionContainer emails={this.props.emails}
	          					activeSection={this.props.activeSection}/>
			</div>);
	}
}

function mapStateToProps(state) {
  return {
    activeSection: state.activeSection,
    emails: state.emails
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(appActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MailboxPage);