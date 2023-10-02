const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };

  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };

  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

  const createFareMultiplier = function(integer) {
    return function(fare) {
      return fare * integer;
    };
  };

  const fareDoubler = createFareMultiplier(2);

  const fareTripler = createFareMultiplier(3);

  const selectDifferentDrivers = function(drivers, driverFunction) {
    return driverFunction(drivers);
  };

  const drivers = ['Driver 1', 'Driver 2', 'Driver 3', 'Driver 4'];
console.log(returnFirstTwoDrivers(drivers)); 
console.log(returnLastTwoDrivers(drivers)); 

console.log(fareDoubler(10)); 
console.log(fareTripler(10)); 

const selectedDrivers = selectDifferentDrivers(drivers, returnFirstTwoDrivers);
console.log(selectedDrivers);