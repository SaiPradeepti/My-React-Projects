import { FaUsers, FaGlobe , FaCity, FaMapMarker, FaPhoneAlt } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'

export const aboutData = [
    {
        id: 1,
        title: 'Total customers',
        count: 35000000,
        icon: <FaUsers />

    },
    {
        id: 2,
        title: 'Countries',
        count: 1000,
        icon: <FaGlobe />

    },
    {
        id: 3,
        title: 'Cities',
        count: 50000,
        icon: <FaCity/>

    },
];

export const contactData = [
{
        id: 1,
        title: 'Address',
        info: '4545 KDFBA Road, New York City, NY, 10010',
        icon: <FaMapMarker />

    },
    {
        id: 2,
        title: 'Phone',
        info: '300-000-9999',
        icon: <FaPhoneAlt />

    },
    {
        id: 3,
        title: 'Email',
        info: 'skdfkdfhg@shfgfdjg.com',
        icon: <GrMail />

    },
]