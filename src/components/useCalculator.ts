import { useState } from 'react';

function executeEval(expression: string): unknown {
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
    } catch {
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