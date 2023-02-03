import React, { createContext, useState } from "react";

interface IDietContext {
  progressInDiet: number;
  isOutOfDiet: boolean;
}

export const DietContext = createContext({} as IDietContext);

interface IDietProvider {
  children: React.ReactNode | React.ReactNode[];
}

export function DietProvider({ children }: IDietProvider) {
  const [progressInDiet] = useState<number>(58.4);
  const [isOutOfDiet] = useState<boolean>(progressInDiet < 60);

  return (
    <DietContext.Provider value={{ progressInDiet, isOutOfDiet }}>
      {children}
    </DietContext.Provider>
  );
}
