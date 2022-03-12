const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      customers: [],
      trainers: [],
      physios: [],
    },
    actions: {
      setCustomers: (customers) => {
        const store = getStore();
        setStore({ ...store, customers: customers });
      },
      setTrainers: (trainers) => {
        const store = getStore();
        setStore({ ...store, trainers: trainers });
      },
      setPhysios: (physios) => {
        const store = getStore();
        setStore({ ...store, physios: physios });
      },
    },
  };
};

export default getState;
