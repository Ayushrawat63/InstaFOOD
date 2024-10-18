# InstaFOOD

## Overview

**InstaFOOD** is a dynamic food delivery website that offers users the latest restaurant listings, menus, and prices. Built with modern web technologies like React.js, Tailwind CSS, Redux, and Context API, InstaFOOD ensures a seamless and responsive experience across all devices. The website leverages real-time data from the Swiggy API and implements lazy loading to optimize performance. Additionally, Jest is used for testing, ensuring robust functionality throughout the development process.

## Live Website

- **Link**: [InstaFOOD Live](https://instafood64.netlify.app/)
- **Note**: To access the website, please install the [Allow CORS Extension](https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en-US&utm_source=ext_sidebar).

## Key Technologies Used

- **React.js**: Ensures a dynamic and responsive user interface, making navigation smooth across devices.
- **Redux**: Manages global state, particularly the cart information, ensuring consistency across browsing sessions.
- **Context API**: Handles state management in specific components, offering an alternative to Redux for certain features.
- **Tailwind CSS**: Provides utility-first styling, making the website fully responsive and customizable.
- **Real-Time Swiggy API**: Fetches real-time restaurant data, including menus, prices, and availability, to keep users informed of the latest offerings.
- **Lazy Loading**: Optimizes performance by loading components only when required, reducing initial load time.
- **Jest**: Enables thorough testing to ensure the application is error-free and functions correctly.

## Project Setup

### Steps to Run Locally

1. **Initialize the project**:
   ```bash
   npm init

2. **Install Parcel**:
   ```bash
   npm install -D parcel

3. **Run the development build**
   ```bash
   npx parcel index.html


