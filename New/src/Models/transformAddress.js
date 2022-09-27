const states = {
  vic: 'Victoria',
  nsw: 'New South Wales',
  //...
};
const transformAddress = address => {
  return {
    street: address.streetName,
    address: address.streetAddress,
    postcode: address.postCode,
    state: states[address.state.toLowerCase()],
  };
};
