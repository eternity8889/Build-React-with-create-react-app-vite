import { createContext, useState } from "react";

export const PhoneContext = createContext({
  phone: "555-555-5555",
  setPhone: () => {},
});

export function PhoneProvider({ children }) {
  const [phone, setPhone] = useState("555-555-5555");

  return (
    <PhoneContext.Provider value={{ phone, setPhone }}>
      {children}
    </PhoneContext.Provider>
  );
}
