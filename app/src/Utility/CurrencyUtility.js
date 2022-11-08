const currencyFormat = new Intl.NumberFormat("en-US", { currency: "USD", style: "currency" });

export const formatCurrency = (value) => {
    return currencyFormat.format(value);
}