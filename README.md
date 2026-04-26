# Bearkat Association of Security and Hacking (BASH) Official Website

The official website for the Sam Houston State University Bearkat Association of Security and Hacking (BASH) club. This platform serves as a central hub for club information, upcoming meetings, CTF competitions, resources, and more.

Lead Developer: Bruce M (TipsyPhiber)

Contributors: Giovanni Martinez (GioMart1122)

## Table of Contents

- [About BASH](#about-bash)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Development Server](#running-the-development-server)
  - [Environment Variables](#environment-variables)

---

## About BASH

The Bearkat Association of Security and Hacking (BASH) at Sam Houston State University is dedicated to fostering passionate cybersecurity enthusiasts and future professionals. We provide a hands-on, collaborative environment where students of all skill levels can learn through engaging projects, ethical hacking, and thrilling competitions.

This website aims to be the go-to resource for current and prospective members, keeping everyone informed about club activities and opportunities in the cybersecurity field.

## Features

- **Dynamic Homepage:** Displays the next upcoming meeting powered by the Google Calendar API.
- **CTF Feed:** Integrates with the CTFtime API to show upcoming Capture The Flag competitions.
- **Club Information:** Dedicated pages for Resources, Schedule, and Sponsors.
- **Responsive Design:** Built with Tailwind CSS for a seamless experience across devices.
- **Community Integration:** Easy access to our Discord server.

## Tech Stack

- **Frontend Framework:** [Next.js](https://nextjs.org)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Dynamic Data:**
  - [CTFtime API](https://ctftime.org/api/) for competition data.
  - [Google Calendar API](https://developers.google.com/calendar/api) for meeting schedules.
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **Font Optimization:** [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) (using Inter font)
- **Hosting:** Cloudflare Pages

## Project Structure

This project utilizes a non-standard but organized file structure:

- **`app/`**: Contains all page-specific components and routes (e.g., `/competitions/page.js` and its co-located components in `/competitions/`).
- **`globals/`**: Houses global, reusable components (e.g., `/Navbar.js`, `/Footer.js`).
- **`lib/`**: Stores utility functions, especially for API interactions (e.g., `/googleCalendar.js`).
- **`public/`**: Static assets like images and PDFs
- **`app/api/`**: Next.js API routes for backend data fetching (e.g., `/ctf/route.js`).

## Getting Started

Follow these steps to set up and run the BASH website locally.

### Prerequisites

- Node.js (LTS version recommended)
- npm (node package manager)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/your-username/bash-website-v1](https://github.com/your-username/bash-website-v1)
    cd bash-website-v1
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Running the Development Server

First, run the development server:

```bash
npm run dev
```

### Environment Variables

**Event data is fetched from the Google Calendar API at build time.**

Setup: To connect to the API, you will need a Google Calendar API key. This key should be stored in an environment variable named GOOGLE_CALENDAR_API_KEY.

Environment Variables: Make sure to create a .env.local file and add the following variable. See the .env.example file for a template.

GOOGLE_CALENDAR_API_KEY="your_api_key_here"
GOOGLE_CALENDAR_ID="your_calendar_id_here"

Code Location: The logic for fetching the calendar data is located in lib/google-calendar.js.

Important: Do not commit your API key or .env.local file to GitHub.
