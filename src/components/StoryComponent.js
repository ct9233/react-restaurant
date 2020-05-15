import React from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';

function Story(props) {

    return (
        <React.Fragment>
            <div className='container-fluid'>
                <div className='row'>
                    <img className='d-block w-100' src='/assets/images/story_restaurant.jpg' alt='Story'/>
                </div>
            </div>
            <div className='container'>
                <div className='row justify-content-center py-5'>
                    <div className='col-10 col-lg-8'>
                        <Card style={{borderColor: 'darkslategrey'}}>
                            <CardHeader className='text-center' style={{color: 'black', borderColor: 'black'}}><h3>Our Story</h3></CardHeader>
                            <CardBody style={{ color: 'black', backgroundColor: '#3b5686'}}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Purus non enim praesent elementum facilisis leo vel fringilla est. Nisl vel pretium lectus quam. Est sit amet facilisis magna. In dictum non consectetur a erat nam at lectus urna. Facilisis sed odio morbi quis commodo odio aenean sed. Vitae aliquet nec ullamcorper sit amet risus nullam eget felis. </p>
                            <p>Magna etiam tempor orci eu lobortis elementum nibh. Diam in arcu cursus euismod quis viverra nibh cras. Aenean sed adipiscing diam donec adipiscing tristique risus nec. Amet venenatis urna cursus eget nunc scelerisque viverra. Eget velit aliquet sagittis id. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Tellus elementum sagittis vitae et leo duis ut. Sit amet tellus cras adipiscing enim eu. Auctor urna nunc id cursus metus aliquam eleifend. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec. Placerat in egestas erat imperdiet sed euismod nisi. In pellentesque massa placerat duis ultricies lacus. Urna duis convallis convallis tellus id. Est pellentesque elit ullamcorper dignissim cras tincidunt. Ornare arcu dui vivamus arcu. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer. Urna molestie at elementum eu facilisis sed odio morbi. </p>
                            <p>Velit laoreet id donec ultrices tincidunt arcu non. Eu augue ut lectus arcu. Et malesuada fames ac turpis egestas. Netus et malesuada fames ac. Interdum velit euismod in pellentesque. Purus in mollis nunc sed. Facilisis mauris sit amet massa vitae tortor condimentum. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Nisi scelerisque eu ultrices vitae auctor. Ut tristique et egestas quis ipsum suspendisse ultrices gravida.</p>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );

}

export default Story;