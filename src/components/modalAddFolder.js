import closeImg from "../assets/close.png";
import "../style/modal.css";
function ModalAddFolder({ isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <div className="modal-container">
          <p className="modal-name">폴더 추가</p>
          <img src={closeImg} alt="closeImg" onClick={onClose} />
          <input placeholder="내용 입력" />
          <button>추가하기</button>
        </div>
      )}
    </>
  );
}
export default ModalAddFolder;
