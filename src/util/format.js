// Money formatting utilities

export const money0 = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
});
export const money2 = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});

export function intLength(n) {
  return Math.floor(Math.abs(n)).toString().length;
}

export function smartMoneyFormat(n) {
    if (intLength(n) > 2) {
        return money0.format(n);
    }
    return money2.format(n);
}