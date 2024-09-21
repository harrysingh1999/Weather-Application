# Weather Forecast Application

This is a simple weather forecast application built using **React.js** that allows users to search for weather information for various cities, toggle between temperature units (Celsius and Fahrenheit), and view a 5-day weather forecast. It fetches weather data from the **Visual Crossing Weather API**.

## Features

- **City Search**: 
  - A custom input component that opens a dropdown modal with a search box for city selection.
  - Users can search for cities from a predefined list or enter new city names.

- **Weather Display**:
  - Displays current weather information, including:
    - City name
    - Current temperature
    - Weather condition (e.g., sunny, rainy)
    - Weather icon according to the condition

- **5-Day Forecast**:
  - Shows the forecast for the next 5 days, including:
    - Day of the week
    - High and low temperatures
    - Weather icons for each day's forecast

- **Temperature Unit Toggle**: 
  - Toggle between Celsius and Fahrenheit for temperature display.

- **Error Handling**:
  - Displays an error message if a city is not found or if there are issues fetching data.

- **Responsive Design**:
  - The application is designed to be fully responsive, ensuring a good user experience across various devices.

- **Lazy Loading**:
  - Non-critical components such as the `ErrorComponent` and `Dropdown` are lazily loaded to improve initial load performance.

## Setup Instructions

### 1. Clone the Repository

Start by cloning the project to your local machine:

```bash
git clone https://github.com/harrysingh1999/propacityAssignment.git
```

### 2. Install Dependencies

To install all necessary dependencies, run the following command in your terminal:

```bash
npm install
```

### 3. Set Up Environment Variables

Create a .env file in the root of the project and add the following line:

```bash
VITE_APP_WEATHER_API_KEY=your_visual_crossing_api_key
```
Replace your_visual_crossing_api_key with your actual API key from the Visual Crossing Weather API.

### 4. Run the Application
To start the development server, run:

```bash
npm run dev
```

## Assumptions
- The application uses a hardcoded list of cities defined in constant.js. Users can either select from this list or manually enter the name of a city that may not be on the list.
- The API key for the Visual Crossing Weather API is stored in the .env file and used via the import.meta.env feature of Vite.
- All the required components for searching, displaying weather, and showing the forecast are - lazy-loaded to improve initial load performance.
- Error handling is managed through an ErrorComponent which is lazily loaded only when needed.

## How to Use the Application

### 1. City Search:

- Type the name of a city into the search box.
- If the city exists in the hardcoded list, it will show up in the dropdown modal.
- If not, you can manually search for it by pressing the "Search" button.

### 2. Weather Display:

- Once a city is selected or searched, the current weather information for that city will be displayed, including temperature, weather condition, and an icon representing the condition.

### 3. 5-Day Forecast:

- Below the current weather display, you will see the 5-day weather forecast with high and low temperatures, weather conditions, and icons for each day.

### 4. Temperature Unit Toggle:

- You can toggle between Celsius and Fahrenheit by clicking the "Switch to Celsius/Fahrenheit" button.

### 4. Error Handling:

- If you search for an invalid city or there is an issue fetching data, an error message will be shown.





