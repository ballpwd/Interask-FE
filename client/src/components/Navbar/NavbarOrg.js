import React, { useState } from 'react';
import Logo from '../../assets/logo.svg';
import {logout} from "../../actions/authActions" ;
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button
} from 'reactstrap';
import { connect } from 'react-redux';
import piclogout from '../../assets/leave-white.svg';

const NavbarOrg = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const {
    auth: { user },
    logout
  } = props;

  return (
    <div>
      <Navbar light expand="md" className='navorg-section'>
        <NavbarBrand href="/"><img src={Logo} style={{ width: '138px', height: '61px' }}></img></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/" className='navorg-item'>Ask</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/" className='navorg-item'>Feedback</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/" className='navorg-item'>Question</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/" className='navorg-item'>How to use</NavLink>
            </NavItem>
            </Nav>
            <Nav className="navbar-nav">
            <NavItem className="">
              <NavbarText className="nav-user" style={{color:"white"}}>Hi, {user.userName}</NavbarText>
            </NavItem>
            <NavItem>
              <Button onClick={logout}>
                <img src={piclogout} width="15px" height="15px"></img>
              </Button>
            </NavItem>
          
          </Nav>
        </Collapse>
      </Navbar>
  
    </div>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps,{logout})(NavbarOrg);
