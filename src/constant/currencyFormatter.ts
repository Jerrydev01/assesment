export const formatCurrency = (amount, currencyCode) => {
  const currencySymbols = {
    USD: "$",
    NGN: "₦",
    EUR: "€",
    GBP: "£",
    

    // Add more currency symbols as needed
  };

  const formatter = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: currencyCode,
  });

  const formattedAmount = formatter.format(amount);
  const currencySymbol = currencySymbols[currencyCode] || currencyCode;

  return formattedAmount.replace(currencyCode, currencySymbol);
};

// Example usage
// const amount = 5000;
// const currencyCode = "NGN";

// const formattedAmount = formatCurrency(amount, currencyCode);
// console.log(formattedAmount); // Output: ₦5,000.00
