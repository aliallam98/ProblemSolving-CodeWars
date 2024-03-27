



function onlyOne(...flags) {

  // return flags.filter(x=> x).length > 1 || flags.filter(x=> x).length < 1 ? false : true
  return flags.filter((x)=> x).length === 1
  


}

console.log(onlyOne(true, false));



