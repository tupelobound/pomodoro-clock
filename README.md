# pomodoro-clock

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/90ab92e13d5c4f669eabaf58adc27673)](https://app.codacy.com/gh/tupelobound/pomodoro-clock/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)

## freeCodeCamp Front End Development Libraries project - Build a Pomodoro Clock

A simple Pomodoro Clock web application built with HTML, JavaScript, and React.

This project was completed as part of freeCodeCamp's Front End Development Libraries certificate, focused on learning frond end libraries such as React.

Originally built on Codepen with a starter template, migrating it to Github was a great opportunity to learn a bit more about updates to React, and processing JSX using Babel. Version 1 used a class component to wrap the main app. This version was refactored to use functional components and hooks only.

## Table of Contents

-   [Demo](#demo)
-   [Features](#features)
-   [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
-   [Usage](#usage)
-   [License](#license)

## Demo

You can try out the Pomodoro Clock live here: [Demo Link](https://tupelobound.github.io/pomodoro-clock/)

## Features

-   Set custom work and break durations.
-   Start, pause, and reset the timer.
-   Visual and audio notifications.
-   Mobile-responsive design.

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

-   [Node.js](https://nodejs.org/) installed on your computer.
-   A code editor like [Visual Studio Code](https://code.visualstudio.com/) or your preferred choice.

### Installation

To install and run the Pomodoro Clock locally, follow these steps:

1.  Clone this repository:
```bash
git clone https://github.com/tupelobound/pomodoro-clock.git
```

2.  Navigate to the project directory:

```bash
cd pomodoro-clock
```

3.  Install the project dependencies:

```bash
npm install
```

4.  Start the development server:

```bash
npm start
```

The Pomodoro Clock should now be running locally at http://localhost:3000.

## Usage

Access the Pomodoro Clock through your browser.

Set your desired work and break durations using the input fields.

Click the "Play" button to begin the timer.

During a work session, the timer will count down from the work duration, and you will receive a notification when it's time for a break.

During a break session, the timer will count down from the break duration, and you will receive a notification when it's time to work again.

You can pause and reset the timer as needed.

Enjoy improved productivity with the Pomodoro technique!

## License

This project is licensed under the MIT License.
