import Header from "./Components/Header";
import MainContent from "./Components/MainContent";
import Actions from "./Components/Actions";
import Contacts from "./Components/Contacts";


export default function App() {
    return(
    <>
      <Header />
      <MainContent />
      <Actions />

      {/* <div className="card-grid">
      <Contacts image="img" name="John Wick" phone="123-456-7890" email="abc@gmail.com"/>
      <Contacts image="img" name="Jane Smith" phone="098-765-4321" email="def@gmail.com"/>
      <Contacts image="img" name="Bob Johnson" phone="555-123-4567" email="ghi@gmail.com"/>
      <Contacts image="img" name="Alice Williams" phone="555-987-6543" email="jkl@gmail.com"/>
      </div> */}
    </>
  )
}