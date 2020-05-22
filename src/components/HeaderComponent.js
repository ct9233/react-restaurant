import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem,
	Jumbotron, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
			isNavOpen: false,
			isModalOpen: false
		};
		this.toggleNav = this.toggleNav.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
	}
	
	toggleModal() {
		this.setState({
			isModalOpen: !this.state.isModalOpen
		});
	}

    render() {
        return (
			<React.Fragment>
				<Jumbotron fluid>
					<div className='container'>
						<div className='row'>
							<div className='col pl-1'>
								<img
									src='/assets/images/ristorante_header.jpg'
									height='140'
									align='left'
									className='rounded'
									alt='Ristorante'
								/>
							</div>
						</div>
					</div>
				</Jumbotron>
				<Navbar dark sticky='top' expand='md'>
					<NavbarBrand className='mr-md-2' href='/'>
						<img
							src='/assets/images/R-blue-large-letters.jpg'
							height='35'
							width='35'
							alt='Ristorante Logo'
						/>
					</NavbarBrand>
					<NavbarToggler onClick={this.toggleNav} />
					<Collapse isOpen={this.state.isNavOpen} navbar>
						<Nav navbar>
							<NavItem>
								<NavLink
									className='nav-link'
									to='/home'
									activeStyle={{ color: "#488cf3" }}>
									<i className='fa fa-home fa-lg' /> Home
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink
									className='nav-link'
									to='/menu'
									activeStyle={{ color: "#488cf3" }}>
									<i className='fa fa-list-alt fa-lg' /> Menu
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink
									className='nav-link'
									to='/story'
									activeStyle={{ color: "#488cf3" }}>
									<i className='fa fa-info fa-lg' /> Story
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink
									className='nav-link'
									to='/contact'
									activeStyle={{ color: '#488cf3' }}>
									<i className='fa fa-address-card fa-lg' /> Contact
								</NavLink>
							</NavItem>
						</Nav>
						<span className='ml-auto'>
							<Button 
								onClick={this.toggleModal}
								style={{color: 'black', backgroundColor: '#488cf3', borderColor: 'darkslategrey'}}>
								Make Reservation
							</Button>
						</span>
					</Collapse>
				</Navbar>
				<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} centered>
					<ModalHeader toggle={this.toggleModal}>
						Reservation
					</ModalHeader>
					<ModalBody>

					</ModalBody>
				</Modal>
			</React.Fragment>
		);
    }
}

export default Header;