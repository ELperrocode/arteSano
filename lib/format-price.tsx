export  function FormatPrice(price: number) {
 const formatter = new Intl.NumberFormat("en-US", {
   style: "currency",
   currency: "USD",
 });

 const formattedPrice = formatter.format(price);

 return formattedPrice;
}
