//return price without vat
function excludingVatPrice(price){
    return price == null ? -1 :  +( price - (price / 115 ) *15 ).toFixed(2)
  }

  console.log(excludingVatPrice(230));