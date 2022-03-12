const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      customers: [],
      trainers: [],
      physios: [],
      appointments: [],
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
      setAppointments: (data) => {
        const store = getStore();
        setStore({ ...store, appointments: data });
      },
    },
  };
};

export default getState;
