interface Mobile<T> {
  name: string;
  price: number;
  option: T;
}

const m1: Mobile<{ color: string; sPen: boolean }> = {
  name: "galaxy",
  price: 1500000,
  option: {
    color: "space-gray",
    sPen: false,
  },
};
// const m1: Mobile<object> = {
//   name: "galaxy",
//   price: 1500000,
//   option: {
//     color: "space-gray",
//     sPen: false,
//   },
// };

const m2: Mobile<string> = {
  name: "iphone",
  price: 1600000,
  option: "space grey",
};
