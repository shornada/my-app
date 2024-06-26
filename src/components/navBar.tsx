import React, { useState } from 'react';
import { Container, Content, ClosedSideBar, OpenSideBar } from "./styles";
import '@fortawesome/fontawesome-free/css/all.css';
import { MdOutlineHelp } from "react-icons/md";
import { GrNodes } from "react-icons/gr";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { IoGrid } from "react-icons/io5";
import { CurrentView } from "../App";

interface SideBarProps {
  toggleView: (view: CurrentView) => void; 
  openHelpModal: () => void; 
  closeHelpModal: () => void; 
  isHelpModalOpen: boolean; 
}

/**
 * Component representing the sidebar navigation.
 * @param toggleView - Function to toggle between graph and grid views.
 * @param openHelpModal - Function to open the help modal.
 * @param closeHelpModal - Function to close the help modal.
 * @param isHelpModalOpen - Flag indicating whether the help modal is open or closed.
 */
export function SideBar({ toggleView, openHelpModal, closeHelpModal, isHelpModalOpen }: SideBarProps) {
  const [sideBar, setSideBar] = useState(false);
  const [selectedItem, setSelectedItem] = useState<CurrentView>('graph');

  /**
   * Toggles the sidebar between open and closed states.
   */
  const handleChangeSideBar = () => {
    setSideBar(!sideBar);
  };

  /**
   * Handles the change of the selected view.
   * @param view - The selected view ('graph' or 'grid').
   */
  const handleViewChange = (view: CurrentView) => {
    toggleView(view);
    setSelectedItem(view);
    setSideBar(false);
    closeHelpModal();
  };

  /**
   * Handles the click event for the help button.
   * Opens the help modal.
   */
  const handleHelpClick = () => {
    openHelpModal();
    setSideBar(false);
  };

  /**
   * Closes the help modal by clicking on the navigation bar.
   */
  const handleCloseHelpByNavBar = () => {
    setSideBar(false);
    if (!isHelpModalOpen) {
      openHelpModal(); // Reopen help modal if it was not open before
    }
  };
  
  return (
    <Container>
      <Content>
        {!sideBar ? (
          <ClosedSideBar>
            <nav>
              <button onClick={handleChangeSideBar}>
                <BsArrowRight />
              </button>
              <ul>
                <li>
                  <a href="#" title="Graf" onClick={() => handleViewChange('graph')} className={selectedItem === 'graph' ? 'selected' : ''}>
                    <GrNodes />
                  </a>
                </li>
                <li>
                  <a href="#" title="Dlaždice" onClick={() => handleViewChange('grid')} className={selectedItem === 'grid' ? 'selected' : ''}>
                    <IoGrid />
                  </a>
                </li>
                <li>
                  <a href="#" title="Nápověda" onClick={handleHelpClick} className={selectedItem === 'help' ? 'selected' : ''}>
                    <MdOutlineHelp />
                  </a>
                </li>
              </ul>
            </nav>
          </ClosedSideBar>
        ) : (
          <OpenSideBar>
            <section>
              <nav>
                <span>
                  <button onClick={handleChangeSideBar}>
                    <BsArrowLeft />
                  </button>
                </span>
                <ul>
                  <li>
                    <a href="#" title="Graf" onClick={() => handleViewChange('graph')} className={selectedItem === 'graph' ? 'selected' : ''}>
                      <GrNodes />
                      <p>Graf</p>
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Dlaždice" onClick={() => handleViewChange('grid')} className={selectedItem === 'grid' ? 'selected' : ''}>
                      <IoGrid />
                      <p>Dlaždice</p>
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Nápověda" onClick={handleHelpClick} className={selectedItem === 'help' ? 'selected' : ''}>
                      <MdOutlineHelp />
                      <p>Nápověda</p>
                    </a>
                  </li>
                </ul>
              </nav>
            </section>
            <aside onClick={handleCloseHelpByNavBar} />
          </OpenSideBar>
        )}
      </Content>
    </Container>
  );
}
