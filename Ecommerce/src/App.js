import logo from './logo.svg';
import './App.css';
import CardMoneyTransferComponent from './component/CardMoneyTransfer';
import ApplicationHeader from './component/ApplicationHeader';
function App() {
  return (
    <div>
      <div>
        <ApplicationHeader/>
        <h1>E-Commerce</h1>
     
      
      </div>
     
      <div className="matrix-item"><CardMoneyTransferComponent/></div>
    </div>
  );
}

export default App;
