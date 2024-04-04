import { useState } from "react";

import { Container, Content, ClosedSideBar, OpenSideBar } from "./styles";
import '@fortawesome/fontawesome-free/css/all.css';
import { MdOutlineHelp } from "react-icons/md";
import { GrNodes } from "react-icons/gr";
import { IoGridOutline } from "react-icons/io5";



import {
	DiReact,
} from "react-icons/di";


import {
	BsArrowRight,
	BsArrowLeft,
} from "react-icons/bs";



interface SideBarProps {
    toggleView: (view: 'graph' | 'grid'|'help') => void;
  }
  
  export function SideBar({ toggleView }: SideBarProps) {
    const [sideBar, setSideBar] = useState(false);
  
    const handleChangeSideBar = () => {
      setSideBar(!sideBar);
    };
  
    const handleViewChange = (view: 'graph' | 'grid'|'help') => {
      toggleView(view);
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
                    <a href="#" title="Graf" onClick={() => handleViewChange('graph')}>
                    <GrNodes />
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Dlaždice" onClick={() => handleViewChange('grid')}>
                    <IoGridOutline />
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Nápověda" onClick={() => handleViewChange('help')}>
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
                      <a href="#" title="Graf" onClick={() => handleViewChange('graph')}>
                      <GrNodes />
                        <p>Graf</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Dlaždice" onClick={() => handleViewChange('grid')}>
                      <IoGridOutline />
                        <p>Dlaždice</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Nápověda" onClick={() => handleViewChange('help')}>
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