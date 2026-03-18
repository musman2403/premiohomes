import studioImg from '../assets/images/studio.webp';
import twoBedImg from '../assets/images/two-bed.webp';
import threeBedImg from '../assets/images/three-bed.webp';

const apartments = [
    {
        id: 'studio-one-bed',
        title: 'Studio, One Bedroom',
        img: studioImg,
        beds: 1,
        baths: 1,
        sqft: '1,300',
        slide: 'slide-left',
        price: '$1,850/mo',
        description: 'A beautifully designed open-concept studio featuring floor-to-ceiling windows with stunning mountain views. The space blends living and sleeping areas seamlessly, with a modern fully-equipped kitchen, quartz countertops, and premium stainless steel appliances.',
        features: ['Floor-to-Ceiling Windows', 'Quartz Countertops', 'In-Unit Washer/Dryer', 'Walk-In Closet', 'Hardwood Floors', 'Smart Home Technology'],
        available: 'Available Now',
    },
    {
        id: 'two-bed',
        title: 'Two Bedrooms',
        img: twoBedImg,
        beds: 2,
        baths: 2,
        sqft: '2,400',
        slide: 'slide-up',
        price: '$2,950/mo',
        description: 'Spacious two-bedroom apartment with an expansive open floor plan, perfect for roommates or a home office setup. Each bedroom offers its own en-suite bathroom, generous closet space, and natural light. The gourmet kitchen features a large island and premium finishes.',
        features: ['Private En-Suite Bathrooms', 'Gourmet Kitchen Island', 'Balcony with Mountain View', 'In-Unit Washer/Dryer', 'Hardwood Floors', 'Built-In Storage'],
        available: 'Available Now',
    },
    {
        id: 'three-bed',
        title: 'Three Bedrooms',
        img: threeBedImg,
        beds: 3,
        baths: 2,
        sqft: '2,900',
        slide: 'slide-right',
        price: '$3,750/mo',
        description: 'Our most spacious residence featuring three generous bedrooms and a grand open living area. Designed for families or those who love entertaining, this home offers panoramic views, a chef-grade kitchen, and abundant natural light throughout every room.',
        features: ['Panoramic Mountain Views', 'Chef-Grade Kitchen', 'Oversized Primary Suite', 'Private Terrace', 'In-Unit Washer/Dryer', 'Double Vanity Bathrooms'],
        available: 'Move in Mar 2026',
    },
];

export default apartments;
