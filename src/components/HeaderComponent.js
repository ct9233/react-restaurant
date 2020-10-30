import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem,
	Jumbotron, Button, Modal, ModalHeader, ModalBody, Label, Col, Row } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Control, Form, Errors } from 'react-redux-form';

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const isNumber = val => !isNaN(+val);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isNavOpen: false,
			isModalOpen: false,
			firstName: '',
			lastName: '',
			phoneNum: '',
			email: '',
			requests: '',
			touched: {
				firstName: false,
				lastName: false,
				phoneNum: false,
				email: false,
			},
		};
		this.toggleNav = this.toggleNav.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	toggleNav() {
		this.setState({
			isNavOpen: !this.state.isNavOpen,
		});
	}

	toggleModal() {
		this.setState({
			isModalOpen: !this.state.isModalOpen,
		});
	}

	handleSubmit(values) {
		this.props.resetReservationForm();
		this.props.postReservation(values);
	}

	render() {
		return (
			<React.Fragment>
				<Jumbotron fluid>
					<div className='container'>
						<div className='row'>
							<div className='col pl-1'>
								<img
									src={`${process.env.PUBLIC_URL}/assets/images/ristorante_header.jpg`}
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
									activeStyle={{ color: '#488cf3' }}>
									<i className='fa fa-home fa-lg' /> Home
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink
									className='nav-link'
									to='/menu'
									activeStyle={{ color: '#488cf3' }}>
									<i className='fa fa-list-alt fa-lg' /> Menu
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink
									className='nav-link'
									to='/story'
									activeStyle={{ color: '#488cf3' }}>
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
							{/* <Button
								onClick={this.toggleModal}
								style={{
									color: 'black',
									backgroundColor: '#488cf3',
									borderColor: 'darkslategrey',
								}}>
								Make Reservation
							</Button> */}
						</span>
					</Collapse>
				</Navbar>
				<Modal
					isOpen={this.state.isModalOpen}
					toggle={this.toggleModal}
					centered>
					<ModalHeader toggle={this.toggleModal}>Reservation</ModalHeader>
					<ModalBody>
						<Form
							model='reservationForm'
							onSubmit={(values) => this.handleSubmit(values)}>
							<Row className='form-group'>
								<Label htmlFor='firstName' md={2}>
									First Name
								</Label>
								<Col md={10}>
									<Control.text
										model='.firstName'
										id='firstName'
										name='firstName'
										placeholder='First Name'
										className='form-control'
										validators={{
											required,
											minLength: minLength(2),
											maxLength: maxLength(15),
										}}
									/>
									<Errors
										className='text-danger'
										model='.firstName'
										show='touched'
										component='div'
										messages={{
											required: 'Required',
											minLength: 'Must be at least 2 characters',
											maxLength: 'Must be 15 characters or less',
										}}
									/>
								</Col>
							</Row>
							<Row className='form-group'>
								<Label htmlFor='lastName' md={2}>
									Last Name
								</Label>
								<Col md={10}>
									<Control.text
										model='.lastName'
										id='lastName'
										name='lastName'
										placeholder='Last Name'
										className='form-control'
										validators={{
											required,
											minLength: minLength(2),
											maxLength: maxLength(15),
										}}
									/>
									<Errors
										className='text-danger'
										model='.lastName'
										show='touched'
										component='div'
										messages={{
											required: 'Required',
											minLength: 'Must be at least 2 characters',
											maxLength: 'Must be 15 characters or less',
										}}
									/>
								</Col>
							</Row>
							<Row className='form-group'>
								<Label htmlFor='phoneNum' md={2}>
									Phone
								</Label>
								<Col md={10}>
									<Control.text
										model='.phoneNum'
										id='phoneNum'
										name='phoneNum'
										placeholder='Phone number'
										className='form-control'
										validators={{
											required,
											minLength: minLength(10),
											maxLength: maxLength(15),
											isNumber,
										}}
									/>
									<Errors
										className='text-danger'
										model='.phoneNum'
										show='touched'
										component='div'
										messages={{
											required: 'Required',
											minLength: 'Must be at least 10 numbers',
											maxLength: 'Must be 15 numbers or less',
											isNumber: 'Must be a number',
										}}
									/>
								</Col>
							</Row>
							<Row className='form-group'>
								<Label htmlFor='email' md={2}>
									Email
								</Label>
								<Col md={10}>
									<Control.text
										model='.email'
										id='email'
										name='email'
										placeholder='Email'
										className='form-control'
										validators={{
											required,
											validEmail,
										}}
									/>
									<Errors
										className='text-danger'
										model='.email'
										show='touched'
										component='div'
										messages={{
											required: 'Required',
											validEmail: 'Invalid email address',
										}}
									/>
								</Col>
							</Row>
							<Row className='form-group'>
								<Label htmlFor='requests' md={2}>
									Special Requests
								</Label>
								<Col md={10}>
									<Control.textarea
										model='.requests'
										id='requests'
										name='requests'
										rows='5'
										className='form-control'
									/>
								</Col>
							</Row>
							<Row className='form-group'>
								<Col md={{ size: 10, offset: 2 }}>
									<Button type='submit' color='primary'>
										Submit Reservation
									</Button>
								</Col>
							</Row>
						</Form>
					</ModalBody>
				</Modal>
			</React.Fragment>
		);
	}
}

export default Header;