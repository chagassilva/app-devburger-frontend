
//import {Spinner} from "./style"; 

// o props é uma propriedade do componente Button que recebe um objeto com as 
// propriedades children.

import "./style.css";

export function Spinner() {
  return (
    <div className="spinner-container">
      <div className="loading-spinner"></div>
    </div>
  );
}
