



function array(string) {
    const str = string.split(',').slice(1,-1).join(" ")
    return str == '' ? null: str
  }


  console.log(array('A1,B2,C3,D4,E5'));

