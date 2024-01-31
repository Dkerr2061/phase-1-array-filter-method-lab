

function findMatching(drivers, string) {
  let lowerCased = string.toLowerCase();
  return drivers.filter( element => {
    return element.toLowerCase() === lowerCased;
  });
}

function fuzzyMatch(drivers, string) {
  let lowerCased = string.toLowerCase();

  return drivers.filter( element => {
    return element.toLowerCase().slice(0, lowerCased.length) === lowerCased;
  })
}

 function matchName(drivers, string) {
  const filtered = drivers.filter( driver => {
    return (driver.name === string) 
  });
  return filtered;
 }



