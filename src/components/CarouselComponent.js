import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const slides = [
	{
        src: {`${process.env.PUBLIC_URL}/assets/images/carousel_food.jpg`},
        altText: 'Food Image',
        header: 'Food',
        key: '1'
    },
    {
        src: {`${process.env.PUBLIC_URL}/assets/images/carousel_drink.jpg`},
        altText: 'Drink Image',
        header: 'Drink',
        key: '2'
    },
    {
        src: {`${process.env.PUBLIC_URL}/assets/images/carousel_dessert.jpg`},
        altText: 'Dessert Image',
        header: 'Dessert',
        key: '3'
    },
    {
        src: {`${process.env.PUBLIC_URL}/assets/images/carousel_pizza.jpg`},
        altText: 'Pizza Image',
        header: 'And PIZZA!!',
        key: '4'
	},
];

const MainCarousel = () => <UncontrolledCarousel items={slides} />;

export default MainCarousel;