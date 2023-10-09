import React from 'react';

function DropDownText({ selectedOption, onOptionChange }) {
  return (
    <div>
     <div className="dropdown-container">
      <select
        className="dropdown-select"
        value={selectedOption}
        onChange={(e) => onOptionChange(e.target.value)}
      >
        <option value="Inward">Inward</option>
        <option value="Outward">Outward</option>
      </select>
    </div>
    </div>
  );
}

export default DropDownText;
