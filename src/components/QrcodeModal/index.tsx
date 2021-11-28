import Modal from 'react-modal';
import closeImg from '../../assets/close.svg'

Modal.setAppElement('#root')

interface QrcodeModalPropos{
    isOpen: boolean;
    queueItemId: number;
    onRequestClose: () => void;
}

export function QrcodeModal({isOpen, onRequestClose, queueItemId} : QrcodeModalPropos) {
    var QRCode = require('qrcode.react');
    const url = "https://tcc-queue-front.herokuapp.com/user/queue?queueItemId=" + queueItemId

    return (
        <Modal 
        isOpen={isOpen} 
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        >
            <button type="button" onClick={onRequestClose} className="react-modal-close">
                <img src={closeImg} alt="Fecha"/>
            </button>

            <QRCode value={url} />
        </Modal>
    )
}