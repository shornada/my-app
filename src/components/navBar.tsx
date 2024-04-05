import { useState } from "react";

import { Container, Content, ClosedSideBar, OpenSideBar } from "./styles";
import '@fortawesome/fontawesome-free/css/all.css';
import { MdOutlineHelp } from "react-icons/md";
import { GrNodes } from "react-icons/gr";


import {
  BsArrowRight,
  BsArrowLeft,
} from "react-icons/bs";
import { IoGrid } from "react-icons/io5";
import { CurrentView } from "../App";



interface SideBarProps {
  toggleView: (view: 'graph' | 'grid' | 'help') => void;
}

export function SideBar({ toggleView }: SideBarProps) {
  const [sideBar, setSideBar] = useState(false);
  const [selectedItem, setSelectedItem] = useState<CurrentView>('graph'); // State to store the selected item


  const handleChangeSideBar = () => {
    setSideBar(!sideBar);
};

const handleViewChange = (view: CurrentView) => {
    toggleView(view);
    setSelectedItem(view); // Update the selected item when changing views
    setSideBar(false); // Close the sidebar after changing the view
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
              {/* Links principais do app */}
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
                  <a href="#" title="Nápověda" onClick={() => handleViewChange('help')} className={selectedItem === 'help' ? 'selected' : ''}>
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
                {/* Icones principais do app */}
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
                  <a href="#" title="Nápověda" onClick={() => handleViewChange('help')} className={selectedItem === 'help' ? 'selected' : ''}>
                      <MdOutlineHelp />
                      <p>Nápověda</p>
                    </a>
                  </li>
                </ul>
              </nav>
            </section>
            <aside onClick={handleChangeSideBar} />
          </OpenSideBar>
        )}
      </Content>
    </Container>
  );
}