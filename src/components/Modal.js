
function Modal(props) {

    function cancelHandler(){
        props.onCancel();
    }

    function confirmHandler(){
        props.onConfirm();
    }

    return (
        <div className="modal">
            <p>Are your sure?</p>
            <button className="btn btn--alt" onClick={cancelHandler}>Cancel</button>
            <button className="btn" onClick={confirmHandler}>Confrim</button>
        </div>
    );
};

export default Modal;