import React, { useEffect, useRef, useState } from 'react';

interface HelpProps {
    isOpen: boolean;
    onClose: () => void;
}

const Help: React.FC<HelpProps> = ({ isOpen, onClose }) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const [closeOnOutsideClick, setCloseOnOutsideClick] = useState(true);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (closeOnOutsideClick && modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose, closeOnOutsideClick]);

    const handleHelpButtonClick = () => {
        onClose();
        setCloseOnOutsideClick(false);
    };

    return (
        <div className={isOpen ? "modal-overlay open" : "modal-overlay"}>
            {isOpen && (
                <div ref={modalRef} className="modal">
                    <div className='modal-content'>
                        <h2>Help</h2>
                        <p>This is the help content.</p>
                        <button onClick={onClose} className="close-button">Zavřít</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Help;
