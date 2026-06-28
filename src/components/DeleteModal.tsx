export default function DeleteModal({ isOpen, onClose, onConfirm }: { isOpen: boolean; onClose: () => void; onConfirm: () => void }) {
  return (
    <dialog open={isOpen} className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Confirm Delete</h3>
        <p className="py-4">Are you sure you want to remove this expense?</p>
        <div className="modal-action">
          <button className="btn btn-ghost" onClick={onClose}>Cancel</button>
          <button className="btn btn-error" onClick={onConfirm}>Delete</button>
        </div>
      </div>
    </dialog>
  );
}