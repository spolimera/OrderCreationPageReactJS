import React, {Component} from 'react';
import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from '../reducers/mapping';
import {Modal} from 'react-bootstrap';

class OrderDetails extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="orderDetails">
          <Modal
                show={true}
                container={this}
                aria-labelledby="contained-modal-title">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title">Order Status</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Order (<a href={'https://play2win-dev-ed.my.salesforce.com/'+ this.props.state.SelectedProducts.order.Id}>{this.props.state.SelectedProducts.order.Name}</a>) have created successfully...
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetails);
