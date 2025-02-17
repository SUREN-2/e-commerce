import React, { useState } from "react";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import { API } from "../../lib/axios-client";

const badgeColors = {
  "Delivered": "success",
  "Pending": "warning",
  "Shipped": "primary",
  "Confirmed": "info"
};



const OrderRow = ({ data, apiUrl }) => {
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const [status, setStatus] = useState(data.status);
  const [loading, setLoading] = useState(false);

  // Open confirmation modal
//   const handleStatusChange = (event) => {
//     setSelectedId(event.target.id)
//     setSelectedStatus(event.target.value);
//     setShowConfirmModal(true);
//   };

  // Confirm status change and call API
//   const confirmStatusChange = async () => {
//     setLoading(true);
//     try {
//       const response = await API.post('/admin/updateStatus', {
//         orderId: selectedId,
//         orderStatus: selectedStatus
//       });

//       if (response.status !== 202) {
//         throw new Error("Failed to update status");
//       }

//       // Successfully updated status
//       setStatus(selectedStatus);
//       setShowConfirmModal(false);
//     } catch (error) {
//       console.error("Error updating status:", error);
//       alert("Failed to update order status. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

  return (
    <>
      {/* Order Row */}
      <tr>
      
      <td 
          onClick={() => setShowOrderModal(true)} 
          style={{ cursor: "pointer", color: "blue" }}
        >
          {data._id}
        </td>
        <td>{new Date(new Date(data.createdAt)).toISOString().slice(0, 10)}</td>
        <td>{data.shippingOption}</td>
        <td>{data.paymentMethod}</td>
        <td>{data.totalAmount}</td>
        <td >
          <span className={`badge text-bg-${badgeColors[data.status]} me-1 p-2`}>
            {data.status}
          </span>
        </td>
        
 
      </tr>

      {/* Order Details Modal (Opens when clicking Order ID) */}
      <Modal show={showOrderModal} onHide={() => setShowOrderModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Order Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
          <p><strong>Order ID:</strong> {data._id}</p>
          <p><strong>Order Date:</strong> {new Date(new Date(data.createdAt)).toISOString().slice(0, 10)}</p>
          <p><strong>Delivery Date:</strong> { new Date(new Date(data.createdAt).setDate(new Date(data.createdAt).getDate() + 3)).toISOString().slice(0, 10)}</p>
          <p><strong>Payment:</strong> {data.paymentMethod}</p>
          <p><strong>Amount:</strong> ₹{data.finalAmount}</p>
          <p><strong>Status:</strong> {data.status}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowOrderModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Confirm Status Change Modal */}
      {/* <Modal show={showConfirmModal} onHide={() => setShowConfirmModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Status Change</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Order Id : <strong>{selectedId}</strong></p>
          <p>Are you sure you want to change the status to <strong>{selectedStatus}</strong>?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowConfirmModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={confirmStatusChange} disabled={loading}>
            {loading ? "Updating..." : "Confirm"}
          </Button>
        </Modal.Footer>
      </Modal> */}
    </>
  );
};

export default OrderRow;
