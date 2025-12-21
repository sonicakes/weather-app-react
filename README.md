# Frontend Mentor - Weather app solution

This is a solution to the [Weather app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/weather-app-K1FhddVm49). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Tech Stack](#tech-stack)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Continued development](#continued-development)


## Overview

### The challenge

This project is to practice using APIs with React, following [this course in Udemy](https://www.udemy.com/course/modern-react-from-the-beginning/).

Users should be able to:

- Search for weather information by entering a location in the search bar
- View current weather conditions including temperature, weather icon, and location details
- See additional weather metrics like "feels like" temperature, humidity percentage, wind speed, and precipitation amounts
- Browse a 7-day weather forecast with daily high/low temperatures and weather icons
- View an hourly forecast showing temperature changes throughout the day
- Switch between different days of the week using the day selector in the hourly forecast section
- Toggle between Imperial and Metric measurement units via the units dropdown 
- Switch between specific temperature units (Celsius and Fahrenheit) and measurement units for wind speed (km/h and mph) and precipitation (millimeters) via the units dropdown
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Deviations from OG design

- added a bg image of topography to make it more interesting (Adobe stock, licensed)
- instead of a custom dropdown for unit switch, for now just implemenented only imperial/metric toggle. Will go back & finish the more complex one later.
- added a home gallery to pick predetermined global cities locations for your weather (for inspo, also wanted to practice swiper in react)
- displaying full location instead of just day of the week & city name
- also displaying timezone the location is in & when temp was latest registered

### Tech Stack

- React
- Tailwind 4
- [date-fns](https://date-fns.org/docs/Getting-Started) for date formatting
- [Swiper](https://swiperjs.com/) gallery for homepage

### Screenshot

![Desktop](.public/desktop.png)

![Mobile](.public/mobile.png)

![Home Gallery](.public/gallery.png)

### Links

- Solution URL: [Solution on FE Mentor](https://your-solution-url.com)
- Live Site URL: [Weather App on Netlify](https://weather-cakes.netlify.app/)

## My process

### Initial setup for proj

I started by breaking up proj into components, to see which ones I need to create in React. Here is a little pseudo-code structure I put up before getting stuck into individual pieces:

```html
  <nav>
    <logo>
    <unit selector - multiple navtive html select elems sown together? need to POCit>
  </nav>

  <title>
  <search panel>
    <location search> 
      <input>
      <search results>
        <location pill>
        <location pill>
        <location pill>
        <location pill>
        <location pill>
      </search results>
    </location search>
    <button>
  </search panel>

  <display window>
    <left side>
      <main info summary>
      <info stat squares>
        <info stat square>
        <info stat square>
        <info stat square>
        <info stat square>
      </info stat squares>
      <daily forecast>
        <day>
        <day>
        <day>
        <day>
        <day>
        <day>
        <day>
      </daily forecast>
    </left side>
    <right side>
      <hourly forecast sidebar>
        <day selector>
        <hr temp col>
          <hr temp pill>
          <hr temp pill>
          <hr temp pill>
          <hr temp pill>
          <hr temp pill>
          <hr temp pill>
          <hr temp pill>
          <hr temp pill>
        </hr temp col>
      </hourly forecast sidebar>
    </right side>
  </display window>
```

I've started going from the top down, tackling the search input -  locations display segment first.
 


### Continued development

1. Move big logic in its own reusable hooks.
2. Insetad of prop drilling, use context provider.
3. For gallery selection, not only pass location to loc state, but already to locInfo (detailed - 2d step so that we skip the search screen altogether).
4. Add UV index & bonus items like bg switch from night to day.
5. Add flag to the main display screen.
6. PWA
7. add API error UI

