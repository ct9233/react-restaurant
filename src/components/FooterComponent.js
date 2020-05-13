import React from 'react';

function Footer(props) {
    return (
        <footer className='site-footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-4 col-sm-3 offset-2 offset-sm-1'>
                        <h5>Links</h5>
                        <ul className='list-unstyled'>
                            <li><a href='#'>Home</a></li>
                            <li><a href='#'>Menu</a></li>
                            <li><a href='#'>Story</a></li>
                            <li><a href='#'>Contact</a></li>
                        </ul>
                    </div>
                    <div className='col-4 text-center'>
                        <h5>Social</h5>
                        <a className='btn btn-social-icon btn-twitter' href='http://twitter.com/'> <i className='fa fa-twitter' /></a>{' '}
                        <a className='btn btn-social-icon btn-pinterest' href='http://pinterest.com/'> <i className='fa fa-pinterest' /></a>{' '}
                        <a className='btn btn-social-icon btn-instagram' href='http://instagram.com/'> <i className='fa fa-instagram' /></a>
                    </div>
                    <div className='col-12 col-sm-4 text-center'>
                        <a role='button' className='btn btn-link' href='tel:+19999999999'> <i className='fa fa-phone' /> 999-999-9999</a> {<br />}
                        <a role='button' className='btn btn-link' href='#'> <i className='fa fa-map-marker' /> 9999 NW 100th Ave. {<br />} Anytown, USA 12345 </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;