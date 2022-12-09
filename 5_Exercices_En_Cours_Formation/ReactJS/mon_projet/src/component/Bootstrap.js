import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ExempleBouton() {
  return (
    <section>
      <Button variant="light"> bouton</Button>
      <Button variant="primary"> bouton</Button>
      <Button variant="danger"> bouton</Button>
      <Button variant="warning"> bouton</Button>
      <Button variant="info"> bouton</Button>

      <div
        className="modal show"
        style={{ display: "block", position: "initial", color: "red" }}
      >
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Modal body text goes here.</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    </section>
  );
}
export default ExempleBouton;
