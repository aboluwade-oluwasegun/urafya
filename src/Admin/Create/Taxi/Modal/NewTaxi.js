import React  from "react";
import Modal from "react-bootstrap/Modal";
  
const NewTaxiModal = props => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         <h5 className="modal-title">Add New Taxi Service </h5>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-body" id="orderDetails">
            <div className="card shadow mb-4">
              <div className="card-body">
                <form className="" method="POST" action="" id="regform" name="regform" enctype="multipart/form-data">
                  <div className="form-group">
                    <div className="form-row">
                      <div className="col-md-12 mb-15 pr-50">
                          <label for="tname">Name:</label>
                          <input type="text" className="form-control" id="tname" name="tname" placeholder="" required/>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="form-row">
                      <div className="col-md-12 mb-15 pl-50">
                          <label for="pnum">Phone Number</label>
                          <input type="text" className="form-control" id="pnum" name="pnum" placeholder="" required/>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="form-row">
                      <div className="col-md-12 mb-15 pl-50">
                          <label for="aweb">Website</label>
                          <input type="text" className="form-control" id="aweb" name="aweb" placeholder="e.g. www.abc.com" required/>
                      </div>
                    </div>
                  </div>
                        
                  <br/>
                  <div className="d-flex">
                    <button type="submit" className="btn btn-primary mybtn" id="btnreg" name="btnreg"><i className="fas fa-fw fa-save"></i> Add Taxi Service</button>
                  </div>
                  
                  <input type="hidden" name="MM_insert" value="regform"/>
                </form>
              </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
             <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={props.onHide}>Close</button>
      </Modal.Footer>
    </Modal>
  );
}
export default NewTaxiModal;