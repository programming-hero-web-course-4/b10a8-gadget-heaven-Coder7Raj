const Modal = ({ onClose, totalPrice }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <p className="mt-4 text-lg font-semibold">Total Price: ${totalPrice}</p>
        <h2 className="text-xl font-bold mb-4">Purchase Successful</h2>
        <p>Your purchase has been completed!</p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default Modal;
