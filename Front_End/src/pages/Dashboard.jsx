import React, {useState} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import DropDownText from "../components/DropDownText";
import DropContent from "../components/DropContent";
import SalesActivity from "../components/SalesActivity"

function Dashboard(){

    const [selectedOption, setSelectedOption] = useState('Inward');

  const handleOptionChange = (selectedValue) => {
    setSelectedOption(selectedValue);
  }; 
return (
  <div>
<div class="container-fluid">
  <div class="row">
    <main class="col-md-9 ms-sm-auto col-lg-12 px-md-4"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Dashboard</h1>        
      </div>
      <SalesActivity />
      <div className="tableText">
      <h2>{selectedOption}</h2>
        <DropDownText selectedOption={selectedOption} onOptionChange={handleOptionChange} /> 
      </div>
      <DropContent selectedOption={selectedOption} />        
    </main>
  </div>
</div>
   
  </div>
)
}

export default Dashboard