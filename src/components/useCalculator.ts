import { useState } from 'react';

// Função fora do Hook para o React Compiler ignorar
function executeEval(expression: string): any {
  // eslint-disable-next-line no-eval
  return eval(expression);
}

export const useCalculator = () => {
  const [display, setDisplay] = useState<string>("");

  const handleClick = (value: string) => {
    setDisplay((prev) => prev + value);
  };

  const handleClear = () => {
    setDisplay("");
  };

  const handleCalculate = () => {
    try {
      if (!display) return;

      const result = executeEval(display);

      setDisplay(String(result));
    } catch (error) {
      setDisplay("Erro");
      setTimeout(() => setDisplay(""), 1500);
    }
  };

  return {
    display,
    handleClick,
    handleClear,
    handleCalculate
  };
};