import { createPortal } from "react-dom";
import { BiSolidUserCircle, BiSolidCity } from "react-icons/bi";
import { MdEmail, MdLocalPhone } from "react-icons/md";
import { useContext } from "react";
import { UsersContext } from "../context";
import "./styles.css";

export const Modal = () => {
  const { selectedUser, handleSelectedUser } = useContext(UsersContext);

  return selectedUser ? (
    createPortal(
      <div className="modal-container" onClick={() => handleSelectedUser()}>
        <div className="modal-content">
          <img className="avatar-img" src={selectedUser.image} alt="imagen" />
          <div className="information-container">
            <div className="info-detail-container">
              <BiSolidUserCircle />
              <p>{`${selectedUser.title}. ${selectedUser.name} ${selectedUser.lastName}`}</p>
            </div>
            <div className="info-detail-container">
              <BiSolidCity />
              <p>{`${selectedUser.city} - ${selectedUser.country}`}</p>
            </div>
            <div className="info-detail-container">
              <MdEmail />
              <p>{selectedUser.email}</p>
            </div>
            <div className="info-detail-container">
              <MdLocalPhone />
              <p>{selectedUser.phone}</p>
            </div>
          </div>
          <button className="close-modal-btn">X</button>
        </div>
      </div>,
      document.getElementById("modal")!
    )
  ) : (
    <></>
  );
};
