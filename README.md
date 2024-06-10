# Co-working Space Booking System

A web application for booking desks in a co-working space with different membership tiers and discounts.

![Screenshot 2024-06-10 134718](https://github.com/DonGuillotine/Web3Bridge-Web3-Pre-Qualification-Test/assets/89584431/f471c841-9ad1-4c4e-be79-d714a3650f59)


## Table of Contents

- [Description](#description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
  - [Booking a Desk](#booking-a-desk)
  - [Viewing Total Cost](#viewing-total-cost)
  - [Revenue Dashboard](#revenue-dashboard)
- [Deployment](#deployment)
- [Contact](#contact)

## Description

This project is a co-working space booking system that allows users to book desks for a specified time period. The system includes different membership tiers and discounts for extended bookings. The application is built using HTML, CSS, and vanilla JavaScript.

## Features

- **Desk Booking**: Users can book individual or team desks.
- **Membership Tiers**: Different pricing for Basic, Premium, and Executive members.
- **Discounts**: 10% discount for bookings over 3 hours.
- **Real-time Updates**: Visually marks desks as booked once reserved.
- **Revenue Dashboard**: Displays total revenue collected, categorized by membership tiers.
- **Responsive Design**: Works across different devices and screen sizes.

## Technologies Used

- HTML
- CSS
- JavaScript (vanilla)
- [Chart.js](https://www.chartjs.org/) (for revenue dashboard graphs)

## Getting Started

To get a local copy up and running follow these simple steps:

### Prerequisites

You need a web browser to run this application.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/yourusername/coworking-booking-system.git
   ```
2. Navigate to the project directory
   ```sh
   cd coworking-booking-system
   ```
3. Open the `index.html` file in your web browser.

## Usage

### Booking a Desk

1. **Select a Desk**: 
   - Go to the "Available Desks" section.
   - Desks are displayed with their numbers and types (individual or team).
   - Available desks are in green (individual) or orange (team), and booked desks are in red.

2. **Fill in the Booking Form**:
   - **Desk Number**: Choose an available desk from the dropdown menu.
   - **Membership Tier**: Select your membership tier (Basic, Premium, Executive).
   - **Number of Hours**: Enter the number of hours you want to book the desk for (between 1 and 12 hours).

3. **Submit the Booking**:
   - Click the "Book Now" button.
   - The system will validate your inputs and book the desk if all conditions are met.

### Viewing Total Cost

- After booking a desk, the total cost will be displayed below the booking form.
- The cost includes a 10% discount for bookings over 3 hours.

### Revenue Dashboard

- The revenue dashboard is located in the footer of the page.
- It displays total revenue collected, categorized by membership tiers (Basic, Premium, Executive) and team bookings.
- A bar chart visualizes the revenue distribution using Chart.js.

## Deployment

This project is deployed using GitHub Pages. You can view the live application [here](https://yourusername.github.io/coworking-booking-system).

### Steps to Deploy on GitHub Pages

1. Push your code to GitHub.
2. Go to the repository settings.
3. In the "Pages" section, select the branch (e.g., `main`) and the root directory.
4. Save the settings and wait for the site to be deployed.
5. Your site will be available at `https://donguillotine.github.io/Web3Bridge-Web3-Pre-Qualification-Test/`.

## Contact

Your Name - [Donald Nwokoro](mailto:infect3dlab@gmail.com)

Project Link: [https://donguillotine.github.io/Web3Bridge-Web3-Pre-Qualification-Test/](https://donguillotine.github.io/Web3Bridge-Web3-Pre-Qualification-Test/)
