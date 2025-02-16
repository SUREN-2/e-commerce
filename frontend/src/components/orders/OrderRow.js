import React, { useState } from "react";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";

const badgeColors = {
  "Delivered": "success",
  "Out of Delivery": "warning",
  "Shipped": "primary",
  "Order Confirmed": "info"
};

const statusOptions = {
  "Delivered": [],
  "Out of Delivery": ["Delivered"],
  "Shipped": ["Out of Delivery", "Delivered"],
  "Order Confirmed": ["Shipped", "Out of Delivery", "Delivered"]
};

const OrderRow = ({ data, apiUrl }) => {
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [status, setStatus] = useState(data.status);
  const [loading, setLoading] = useState(false);

  // Open confirmation modal
  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
    setShowConfirmModal(true);
  };

  // Confirm status change and call API
  const confirmStatusChange = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`${apiUrl}/update-status`, {
        orderId: data.oid,
        status: selectedStatus
      });

      if (response.status !== 200) {
        throw new Error("Failed to update status");
      }

      // Successfully updated status
      setStatus(selectedStatus);
      setShowConfirmModal(false);
    } catch (error) {
      console.error("Error updating status:", error);
      alert("Failed to update order status. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Order Row */}
      <tr>
        <td>{data.customerName}</td>
        <td 
          onClick={() => setShowOrderModal(true)} 
          style={{ cursor: "pointer", color: "blue" }}
        >
          {data.oid}
        </td>
        <td>{data.orderDate}</td>
        <td>{data.deliveryDate}</td>
        <td>{data.payment}</td>
        <td>₹{data.amt}</td>
        <td>
          <span className={`badge text-bg-${badgeColors[status]} me-1 p-2`}>
            {status}
          </span>
        </td>
        <td>
          <select 
            className="form-select form-select-sm edit-option"
            id={data.oid}
            value={status}
            onChange={handleStatusChange} // Opens confirmation modal
          >
            <option value="0" disabled>Edit</option>
            {statusOptions[data.status]?.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </td>
      </tr>

      {/* Order Details Modal (Opens when clicking Order ID) */}
      <Modal show={showOrderModal} onHide={() => setShowOrderModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Order Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>Customer Name:</strong> {data.customerName}</p>
          <p><strong>Order ID:</strong> {data.oid}</p>
          <p><strong>Order Date:</strong> {data.orderDate}</p>
          <p><strong>Delivery Date:</strong> {data.deliveryDate}</p>
          <p><strong>Payment:</strong> {data.payment}</p>
          <p><strong>Amount:</strong> ₹{data.amt}</p>
          <p><strong>Status:</strong> {status}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowOrderModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Confirm Status Change Modal */}
      <Modal show={showConfirmModal} onHide={() => setShowConfirmModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Status Change</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
      </Modal>
    </>
  );
};

export default OrderRow;
