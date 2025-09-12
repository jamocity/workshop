
//Program to determine the quarter of the year from a given month name.



function getQuarterFromMonthName(monthName) {
  // Create a new Date object using the month name.
  // The '1' and current year are arbitrary as only the month is needed.
  // Normalize input and use a template literal so the month name is inserted correctly.
  const name = String(monthName).trim();
  const date = new Date(`${name} 1, 2023`);

  // Check if the Date object is valid (i.e., if the monthName was recognized).
  if (isNaN(date.getTime())) {
    return "Invalid month name. Please enter a valid month (e.g., 'January', 'Feb').";
  }
  
  // Get the zero-based month number (0-11) and use it to calculate the quarter.
  const month = date.getMonth();
  return Math.floor(month / 3) + 1;
}



// Example usage
console.log(getQuarterFromMonthName("January"));
console.log(getQuarterFromMonthName("june"));
console.log(getQuarterFromMonthName("DECEMBER"));
console.log(getQuarterFromMonthName("invalid month"));