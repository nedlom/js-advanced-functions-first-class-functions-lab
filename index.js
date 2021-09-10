// Code your solution in this file!
function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(factor1) {
  return function(factor2) {
    return factor1 * factor2;
  }
};

const fareDoubler = function(fare) {
  return fare * 2;
};

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(arrayOfDrivers, fn) {
  return fn(arrayOfDrivers);
}

const a = ['a', 'b', 'c']
console.log(selectDifferentDrivers(a, returnFirstTwoDrivers))