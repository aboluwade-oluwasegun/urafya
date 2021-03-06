import React, {Component} from "react";
import Modal from "react-bootstrap/Modal";
  
export class ChangePasswordModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oldpassword: '',
      newpassword: '',
      confirmpassword: '',
     

    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  
  }
  

  render() {
    
    return (
      <Modal
        {...this.props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h5 className="modal-title">Change Password </h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-body" id="orderDetails">
            <div className="card shadow mb-4">
              <div className="card-body">
                <form className="" method="POST" action="" id="regform" name="regform" enctype="multipart/form-data" onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <div className="form-row">
                      <div className="col-md-12 mb-15 pl-50">
                        <label for="opass">Old Password</label>
                        <input className="form-control" name="oldpassword" id="oldpassword" value={this.state.oldpassword} onChange={this.handleChange} readonly  />
                      </div>
                    </div>

                    <hr />
                    <div className="form-group">
                      <div className="form-row">
                        <div className="col-md-6 mb-15 pr-50">
                          <label for="npass">New Password:</label>
                          <input type="text" className="form-control" id="newpassword" name="newpassword" value={this.state.newpassword} onChange={this.handleChange} placeholder="" required />
                        </div>
                        <div className="col-md-6 mb-15 px-25">
                          <label for="cpass">Confirm Password:</label>
                          <input type="text" className="form-control" id="confirmpassword" name="confirmpassword" value={this.state.confirmpassword} onChange={this.handleChange} placeholder="e.g. Martin" required />
                        </div>
                      </div>
                    </div>
                              
                    <br></br>
                    <div className="d-flex">
                      <button type="submit" className="btn btn-primary mybtn" id="btnreg" name="btnreg">
                        <i className="fas fa-fw fa-user-lock"></i> Edit Password</button>
                    </div>
                        
                    <input type="hidden" name="MM_insert" value="regform" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.props.onHide}>Close</button>
        </Modal.Footer>
      </Modal>
    );
  }
}
export default ChangePasswordModal;