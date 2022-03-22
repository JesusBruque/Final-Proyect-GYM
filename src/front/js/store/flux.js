const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      customers: [],
      trainers: [],
      physios: [],
      workers: [],
    },
    actions: {
      setCustomers: (data) => {
        const store = getStore();
        setStore({ ...store, customers: data });
      },
      setTrainers: (data) => {
        const store = getStore();
        setStore({ ...store, trainers: data });
      },
      setPhysios: (data) => {
        const store = getStore();
        setStore({ ...store, physios: data });
      },
      setWorkers: (data) => {
        const store = getStore();
        setStore({ ...store, workers: data });
      },
    },
  };
};

export default getState;
