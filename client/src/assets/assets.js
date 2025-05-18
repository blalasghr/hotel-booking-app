import icon_add from './icon-add.svg';
import icon_arrow from './icon-arrow.svg';
import icon_badge from './icon-badge.svg';
import icon_calender from './icon-calender.svg';
import icon_close from './icon-close.svg';
import icon_dashboard from './icon-dashboard.svg';
import icon_facebook from './icon-facebook.svg';
import icon_favicon from './icon-favicon.svg';
import icon_free_breakfast from './icon-free-breakfast.svg';
import icon_free_wifi from './icon-free-wifi.svg';
import icon_guests from './icon-guests.svg';
import icon_heart from './icon-heart.svg';
import icon_home from './icon-home.svg';
import icon_instagram from './icon-instagram.svg';
import icon_linkedin from './icon-linkendin.svg';
import icon_list from './icon-list.svg';
import icon_location_filled from './icon-location-filled.svg';
import icon_location from './icon-location.svg';
import icon_logo from './icon-logo.svg';
import icon_menu_close from './icon-menu-close.svg';
import icon_menu from './icon-menu.svg';
import icon_mountain from './icon-mountain.svg';
import icon_pool from './icon-pool.svg';
import icon_room_service from './icon-room-service.svg';
import icon_search from './icon-search.svg';
import icon_star_filled from './icon-star-filled.svg';
import icon_star_outlined from './icon-star-outlined.svg';
import icon_total_booking from './icon-total-booking.svg';
import icon_total_revenue from './icon-total-revenue.svg';
import icon_twitter from './icon-twitter.svg';
import icon_upload_area from './icon-upload-area.svg';
import icon_user from './icon-user.svg';
import img_exclusive_offer_card_1 from './img-exclusive-offer-card-1.png';
import img_exclusive_offer_card_2 from './img-exclusive-offer-card-2.png';
import img_exclusive_offer_card_3 from './img-exclusive-offer-card-3.png';
import img_hero from './img-hero.png';
import img_reg from './img-reg.png';
import img_room_1 from './img-room-1.png';
import img_room_2 from './img-room-2.png';
import img_room_3 from './img-room-3.png';
import img_room_4 from './img-room-4.png';

export const assets = {
   icon_add,
   icon_arrow,
   icon_badge,
   icon_calender,
   icon_close,
   icon_dashboard,
   icon_facebook,
   icon_favicon,
   icon_free_breakfast,
   icon_free_wifi,
   icon_guests,
   icon_heart,
   icon_home,
   icon_instagram,
   icon_linkedin,
   icon_list,
   icon_location_filled,
   icon_location,
   icon_logo,
   icon_menu_close,
   icon_menu,
   icon_mountain,
   icon_pool,
   icon_room_service,
   icon_search,
   icon_star_filled,
   icon_star_outlined,
   icon_total_booking,
   icon_total_revenue,
   icon_twitter,
   icon_upload_area,
   icon_user,
   img_exclusive_offer_card_1,
   img_exclusive_offer_card_2,
   img_exclusive_offer_card_3,
   img_hero,
   img_reg,
   img_room_1,
   img_room_2,
   img_room_3,
   img_room_4,
};

export const cities = ['Dubai', 'Singapore', 'New York', 'London'];

// Exclusive Offers Dummy Data
export const exclusiveOffers = [
   {
      _id: 1,
      title: 'Summer Escape Package',
      description: 'Enjoy a complimentary night and daily breakfast',
      priceOff: 25,
      expiryDate: 'Aug 31',
      image: img_exclusive_offer_card_1,
   },
   {
      _id: 2,
      title: 'Romantic Gateway',
      description: 'Special couples package including spa treatment',
      priceOff: 20,
      expiryDate: 'Sep 20',
      image: img_exclusive_offer_card_2,
   },
   {
      _id: 3,
      title: 'Luxury Retreat',
      description:
         'Book 60 days in advance and save on your stay at any of our luxury properties worldwide.',
      priceOff: 30,
      expiryDate: 'Sep 25',
      image: img_exclusive_offer_card_3,
   },
];

// Testimonials Dummy Data
export const testimonials = [
   {
      id: 1,
      name: 'John Wiley',
      address: 'Barcelona, Spain',
      image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200',
      rating: 5,
      review:
         "I've used many booking platforms before, but none compare to the personalized experience and attention to detail that QuickStay provides.",
   },
   {
      id: 2,
      name: 'Liam Johnson',
      address: 'New York, USA',
      image: '',
      rating: 4,
      review:
         'QuickStay exceeded my expectations. The booking process was seamless, and the hotels were absolutely top-notch. Highly recommended!',
   },
   {
      id: 3,
      name: 'Sophia Lee',
      address: 'Seoul, South Korea',
      image: 'https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=200',
      rating: 5,
      review:
         'Amazing service! I always find the best luxury accommodations through QuickStay. Their recommendations never disappoint!',
   },
];

// Facility Icon
export const facilityIcons = {
   'Free Wifi': assets.icon_free_wifi,
   'Free Breakfast': assets.icon_free_breakfast,
   'Room Service': assets.icon_room_service,
   'Mountain View': assets.icon_mountain,
   'Pool Access': assets.icon_pool,
};

// For Room Details Page
export const roomCommonData = [
   {
      icon: assets.icon_home,
      title: 'Clean & Safe Stay',
      description: 'A well-maintained and hygienic space just for you.',
   },
   {
      icon: assets.icon_badge,
      title: 'Enhanced Cleaning',
      description: "This host follows Staybnb's strict cleaning standards.",
   },
   {
      icon: assets.icon_location_filled,
      title: 'Excellent Location',
      description: '90% of guests rated the location 5 stars.',
   },
   {
      icon: assets.icon_heart,
      title: 'Smooth Check-In',
      description: '100% of guests gave check-in a 5-star rating.',
   },
];

// User Dummy Data
export const userDummyData = {
   _id: 'user_2unqyL4diJFP1E3pIBnasc7w8hP',
   username: 'Great Stack',
   email: 'user.greatstack@gmail.com',
   image: 'https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzJ2N2c5YVpSSEFVYVUxbmVYZ2JkSVVuWnFzWSJ9',
   role: 'hotelOwner',
   createdAt: '2025-03-25T09:29:16.367Z',
   updatedAt: '2025-04-10T06:34:48.719Z',
   __v: 1,
   recentSearchedCities: ['New York'],
};

// Hotel Dummy Data
export const hotelDummyData = {
   _id: '67f76393197ac559e4089b72',
   name: 'Urbanza Suites',
   address: 'Main Road  123 Street , 23 Colony',
   contact: '+0123456789',
   owner: userDummyData,
   city: 'New York',
   createdAt: '2025-04-10T06:22:11.663Z',
   updatedAt: '2025-04-10T06:22:11.663Z',
   __v: 0,
};

// Rooms Dummy Data
export const roomsDummyData = [
   {
      _id: '67f7647c197ac559e4089b96',
      hotel: hotelDummyData,
      roomType: 'Double Bed',
      pricePerNight: 399,
      amenities: ['Room Service', 'Mountain View', 'Pool Access'],
      images: [img_room_1, img_room_2, img_room_3, img_room_4],
      isAvailable: true,
      createdAt: '2025-04-10T06:26:04.013Z',
      updatedAt: '2025-04-10T06:26:04.013Z',
      __v: 0,
   },
   {
      _id: '67f76452197ac559e4089b8e',
      hotel: hotelDummyData,
      roomType: 'Double Bed',
      pricePerNight: 299,
      amenities: ['Room Service', 'Mountain View', 'Pool Access'],
      images: [img_room_2, img_room_3, img_room_4, img_room_1],
      isAvailable: true,
      createdAt: '2025-04-10T06:25:22.593Z',
      updatedAt: '2025-04-10T06:25:22.593Z',
      __v: 0,
   },
   {
      _id: '67f76406197ac559e4089b82',
      hotel: hotelDummyData,
      roomType: 'Double Bed',
      pricePerNight: 249,
      amenities: ['Free WiFi', 'Free Breakfast', 'Room Service'],
      images: [img_room_3, img_room_4, img_room_1, img_room_2],
      isAvailable: true,
      createdAt: '2025-04-10T06:24:06.285Z',
      updatedAt: '2025-04-10T06:24:06.285Z',
      __v: 0,
   },
   {
      _id: '67f763d8197ac559e4089b7a',
      hotel: hotelDummyData,
      roomType: 'Single Bed',
      pricePerNight: 199,
      amenities: ['Free WiFi', 'Room Service', 'Pool Access'],
      images: [img_room_4, img_room_1, img_room_2, img_room_3],
      isAvailable: true,
      createdAt: '2025-04-10T06:23:20.252Z',
      updatedAt: '2025-04-10T06:23:20.252Z',
      __v: 0,
   },
];

// User Bookings Dummy Data
export const userBookingsDummyData = [
   {
      _id: '67f76839994a731e97d3b8ce',
      user: userDummyData,
      room: roomsDummyData[1],
      hotel: hotelDummyData,
      checkInDate: '2025-04-30T00:00:00.000Z',
      checkOutDate: '2025-05-01T00:00:00.000Z',
      totalPrice: 299,
      guests: 1,
      status: 'pending',
      paymentMethod: 'Stripe',
      isPaid: true,
      createdAt: '2025-04-10T06:42:01.529Z',
      updatedAt: '2025-04-10T06:43:54.520Z',
      __v: 0,
   },
   {
      _id: '67f76829994a731e97d3b8c3',
      user: userDummyData,
      room: roomsDummyData[0],
      hotel: hotelDummyData,
      checkInDate: '2025-04-27T00:00:00.000Z',
      checkOutDate: '2025-04-28T00:00:00.000Z',
      totalPrice: 399,
      guests: 1,
      status: 'pending',
      paymentMethod: 'Pay At Hotel',
      isPaid: false,
      createdAt: '2025-04-10T06:41:45.873Z',
      updatedAt: '2025-04-10T06:41:45.873Z',
      __v: 0,
   },
   {
      _id: '67f76810994a731e97d3b8b4',
      user: userDummyData,
      room: roomsDummyData[3],
      hotel: hotelDummyData,
      checkInDate: '2025-04-11T00:00:00.000Z',
      checkOutDate: '2025-04-12T00:00:00.000Z',
      totalPrice: 199,
      guests: 1,
      status: 'pending',
      paymentMethod: 'Pay At Hotel',
      isPaid: false,
      createdAt: '2025-04-10T06:41:20.501Z',
      updatedAt: '2025-04-10T06:41:20.501Z',
      __v: 0,
   },
];

// Dashboard Dummy Data
export const dashboardDummyData = {
   totalBookings: 3,
   totalRevenue: 897,
   bookings: userBookingsDummyData,
};

// SVG code for Book Icon
/* 
const BookIcon = () => (
   <svg
      className='w-4 h-4 text-gray-700'
      aria-hidden='true'
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      viewBox='0 0 24 24'
   >
      <path
         stroke='currentColor'
         strokeLinecap='round'
         strokeLinejoin='round'
         strokeWidth='2'
         d='M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4'
      />
   </svg>
);
*/
