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
                        <h2>Nápověda</h2>
                        <ul>
                            <li>Tato aplikace slouží studentům studijního programu SIT k získání informací o předmětech v rámci studia.</li>
                            <li>Hlavním prvkem je graf předmětů, kde je znázorněna logická návaznost předmětů tohoto studijního programu.</li>
                            <li>Aplikace také umožňuje v grafu zvolit jeden nebo více předmětů, jejichž detail se zobrazí pod grafem.
                                <ul>
                                    <li>V detailu se nacházejí základní informace o předmětu, jeho obsah a také předpokládané rozložení náročnosti během semestru.</li>
                                </ul>
                            </li>
                        </ul>
                        <button onClick={onClose} className="close-button">Zavřít</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Help;
