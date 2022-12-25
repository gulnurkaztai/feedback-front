
import './App.css';
import Header from './components/Header/Header';
import FeedbackList from './components/FeedbackLIst/FeedbackList';
import FeedbackStats from './components/FeedbackStats/FeedbackStats';
import FeedbackForm from './components/FeedbackForm/FeedbackForm';
import { FeedbackProvider } from "./components/context/FeedbackContext";
import Footer from './components/Footer/Footer';


function App() { 
  return (
    <>

    <FeedbackProvider>
      <Header />
        <div className='container'>
          <FeedbackForm  />
          <FeedbackStats />
          <FeedbackList /> 

        </div>
        <Footer/>
        </FeedbackProvider>
      </>
  )
}

export default App;
