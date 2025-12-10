// Calculator.tsx
import React from 'react';
import './Calculator.css';
import { useCalculator } from './useCalculator';

const Calculator: React.FC = () => {
  // Importamos a lógica do nosso hook personalizado
  const { display, handleClick, handleClear, handleCalculate } = useCalculator();

  return (
    <div className="calculator-container">
      {/* Área do Visor */}
      <div className="display">
        {display || "0"}
      </div>

      {/* Grid de Botões */}
      <div className="buttons-grid">
        <button className="btn clear" onClick={handleClear}>AC</button>
        <button className="btn" onClick={() => handleClick('.')}>.</button>
        <button className="btn operator" onClick={() => handleClick('/')}>÷</button>

        <button className="btn" onClick={() => handleClick('7')}>7</button>
        <button className="btn" onClick={() => handleClick('8')}>8</button>
        <button className="btn" onClick={() => handleClick('9')}>9</button>
        <button className="btn operator" onClick={() => handleClick('*')}>×</button>

        <button className="btn" onClick={() => handleClick('4')}>4</button>
        <button className="btn" onClick={() => handleClick('5')}>5</button>
        <button className="btn" onClick={() => handleClick('6')}>6</button>
        <button className="btn operator" onClick={() => handleClick('-')}>-</button>

        <button className="btn" onClick={() => handleClick('1')}>1</button>
        <button className="btn" onClick={() => handleClick('2')}>2</button>
        <button className="btn" onClick={() => handleClick('3')}>3</button>
        <button className="btn operator" onClick={() => handleClick('+')}>+</button>

        <button className="btn" onClick={() => handleClick('0')}>0</button>
        <button className="btn" onClick={() => handleClick('00')}>00</button>
        <button className="btn equals" onClick={handleCalculate}>=</button>
      </div>
    </div>
  );
};

export default Calculator;