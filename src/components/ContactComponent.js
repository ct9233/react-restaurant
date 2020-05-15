import React from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import { Link } from 'react-router-dom';

function Contact(props) {
    return (
			<React.Fragment>
				<div className='container'>
					<div className='row ml-auto my-5'>
						<div className='col-md-4 offset-1 offset-md-0 py-3 align-self-center'>
							<Card style={{ borderColor: 'darkslategrey' }}>
								<CardHeader
									className='text-center'
									style={{ color: 'black', borderColor: 'black' }}>
									<h3>Our Contact Info</h3>
								</CardHeader>
								<CardBody
									className='text-center'
									style={{ color: 'black', backgroundColor: '#3b5686' }}>
									<a
										role='button'
										className='btn btn-link contact-btn'
										style={{ color: 'navy' }}
										href='tel:+19999999999'>
										{' '}
										<i className='fa fa-phone'> </i> 999-999-9999
									</a>{' '}
									<br />
									<Link to='/contact' style={{ color: 'navy' }}>
										{' '}
										<i className='fa fa-map-marker'> </i> 9999 NW 100th Ave.{' '}
										<br /> Anytown, USA 12345{' '}
									</Link>
								</CardBody>
							</Card>
						</div>
						<div className='col col-md-7 offset-1' id='mapWindow'>
							<iframe
								title='Location Map'
								src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d989.6768341322639!2d-98.78705691485213!3d38.361835920888545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87a38a5476f1dc01%3A0xbcba90bd38c16e1a!2s3504%2010th%20St%2C%20Great%20Bend%2C%20KS%2067530!5e0!3m2!1sen!2sus!4v1582950853305!5m2!1sen!2sus'
								width='400'
								height='300'
								frameborder='0'
								style={{ border: 0 }}
								allowfullscreen=''
							/>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
}

export default Contact;