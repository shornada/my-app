import { useState } from "react";

import { Container, Content, ClosedSideBar, OpenSideBar } from "./styles";

import {
	DiReact,
} from "react-icons/di";

import {
	IoNotificationsSharp,
} from "react-icons/io5";

import {
	MdSettings
} from "react-icons/md";

import {
	BsArrowRight,
	BsArrowLeft,
} from "react-icons/bs";

import {
	RiLogoutCircleRLine
} from "react-icons/ri";

import logoImg from "../assets/logo.svg";


interface SideBarProps {
    toggleView: (view: 'graph' | 'grid') => void;
  }
  
  export function SideBar({ toggleView }: SideBarProps) {
    const [sideBar, setSideBar] = useState(false);
  
    function handleChangeSideBar() {
      setSideBar((prevState) => !prevState);
    }
  
    const handleViewChange = (view: 'graph' | 'grid') => {
      toggleView(view);
      handleChangeSideBar();
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
                      <DiReact />
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Dlaždice" onClick={() => handleViewChange('grid')}>
                      <DiReact />
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
                        <DiReact />
                        <p>Graf</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Dlaždice" onClick={() => handleViewChange('grid')}>
                        <DiReact />
                        <p>Dlaždice</p>
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