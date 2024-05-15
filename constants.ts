export const constants = {
  paymentLinks: {
    lifeTimeMembership:
      process.env.NODE_ENV === "development"
        ? "https://buy.stripe.com/test_4gw8A7flA4Nf3UA002"
        : "",
  },
};
