import { Route, Routes } from "react-router-dom";
import AddContact from "./components/addcontact";
import ContactDetail from "./components/contactDetail";
import Header from "./components/header";
import Home from "./components/home";
import UpdateContact from "./components/updateContact";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addcontact" element={<AddContact />} />
        <Route path="/contactDetail" element={<ContactDetail />} />
        <Route path="/update-contact/:id" element={<UpdateContact />} />
      </Routes>
    </>
  );
}
export default App;
