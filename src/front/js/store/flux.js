const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      customers: [],
      trainers: [],
      physios: [],
    },
    actions: {
      serCustomers: (customers) => {
        const store = getStore();
        setStore({ ...store, customers: customers });
      },
      setPlanet: (trainers) => {
        const store = getStore();
        setStore({ ...store, trainers: trainers });
      },
      setVehicle: (physios) => {
        const store = getStore();
        setStore({ ...store, physios: physios });
      },
    },
  };
};

export default getState;
