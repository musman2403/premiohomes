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
        price: 'Starting at PKR 12.5M',
        description: 'A beautifully designed open-concept studio featuring floor-to-ceiling windows with stunning urban views. The space blends living and sleeping areas seamlessly, with a modern fully-equipped kitchen, premium finishes, and high-quality appliances.',
        features: ['Floor-to-Ceiling Windows', 'Premium Finishes', 'In-Unit Layout', 'Spacious Closet', 'Elegant Flooring', 'Smart Home Ready'],
        available: 'Booking Open',
    },
    {
        id: 'two-bed',
        title: 'Two Bedrooms',
        img: twoBedImg,
        beds: 2,
        baths: 2,
        sqft: '1,800',
        slide: 'slide-up',
        price: 'Starting at PKR 18.5M',
        description: 'Spacious two-bedroom apartment with an expansive open floor plan, perfect for modern living. Each bedroom offers its own en-suite bathroom, generous closet space, and natural light. The gourmet kitchen features premium finishes and a functional layout.',
        features: ['Private En-Suite Bathrooms', 'Gourmet Kitchen Layout', 'Balcony with City View', 'In-Unit Layout', 'Elegant Flooring', 'Built-In Storage'],
        available: 'Booking Open',
    },
    {
        id: 'three-bed',
        title: 'Three Bedrooms',
        img: threeBedImg,
        beds: 3,
        baths: 2,
        sqft: '2,400',
        slide: 'slide-right',
        price: 'Starting at PKR 24.5M',
        description: 'Our most spacious residence featuring three generous bedrooms and a grand open living area. Designed for families, this home offers panoramic views, a professional-grade kitchen, and abundant natural light throughout every room.',
        features: ['Panoramic City Views', 'Professional-Grade Kitchen', 'Oversized Primary Suite', 'Private Terrace', 'In-Unit Layout', 'Double Vanity Bathrooms'],
        available: 'Register Interest',
    },
];

export default apartments;
