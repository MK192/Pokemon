import { createContext, useContext, useState } from "react";

// selected context

interface SelectedContext {
  selected: number;
  setSelected: (selectedPokemonId: number) => void;
}

const SelectedContext = createContext<SelectedContext>({
  selected: 1,
  setSelected: function (selectedPokemonId: number): void {
    throw new Error("Function not implemented.");
  },
});

// eslint-disable-next-line react-refresh/only-export-components
export function useSelectedId() {
  return useContext(SelectedContext);
}
const SelectedPokemonContext = ({ children }: any) => {
  const [selected, setSelected] = useState<number>(1);

  return (
    <SelectedContext.Provider value={{ selected, setSelected }}>
      {children}
    </SelectedContext.Provider>
  );
};

export default SelectedPokemonContext;
