
it('should calculate the monthly rate correctly', function () {
  // ...
  expect(calculateMonthlyPayment({ "amount": 100000, "years": 30, "rate": 4 })).toEqual("477.42");
  expect(calculateMonthlyPayment({ "amount": 300000, "years": 30, "rate": 6 })).toEqual("1798.65");
  expect(calculateMonthlyPayment({ "amount": 250000, "years": 15, "rate": 3 })).toEqual("1726.45");
});


it("should return a result with 2 decimal places", function() {
  // ..
  expect(calculateMonthlyPayment({ "amount": 500000, "years": 30, "rate": 5 })).toBeCloseTo("2684.11", 2);
  expect(calculateMonthlyPayment({ "amount": 1000000, "years": 30, "rate": 3 })).toBeCloseTo("4216.04", 2);
  expect(calculateMonthlyPayment({ "amount": 150000, "years": 15, "rate": 3 })).toBeCloseTo("1035.87", 2);
});

/// etc
it("should return a String",  () => {
  expect(calculateMonthlyPayment({ "amount": 100000, "years": 30, "rate": 4 })).toBeInstanceOf(String);
  expect(calculateMonthlyPayment({ "amount": 500000, "years": 30, "rate": 5 })).toBeInstanceOf(String);
  expect(calculateMonthlyPayment({ "amount": 250000, "years": 15, "rate": 3 })).toBeInstanceOf(String);
});