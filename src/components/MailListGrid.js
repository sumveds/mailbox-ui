import React, { Component } from 'react';

import { Table, Row, Col} from 'reactstrap';

export default class MailListGrid extends Component {

	render() {
    const mailList = this.props.emails.map((item) => {
      return (
        <Col key={item.id} md={12} style={ {paddingTop: '30px'} }>
        <Table hover size="sm">
          <tbody>
            <tr>
              <td scope="row">{item.from.name}</td>
              <td>{item.subject}</td>
              <td>{(new Date(item.sentAt)).toDateString()}</td>
            </tr>
          </tbody>
          </Table>
        </Col>
        );
    }); 

		return(<Row>
      {mailList}
    </Row>);
	}
}
