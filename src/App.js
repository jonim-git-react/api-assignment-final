
import './App.css';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import NavBar from './NavBar'
import Header from './Header'
import Home from './Home'
import About from './About'
import ContactUs from './ContactUs'
import NotFound from './NotFound'
import BandInfo from './BandInfo';
import Apod from './Apod';


function App() {
  return (
    <>
      <NavBar />
      <Header />
      <div className="container">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/contactus" component={ContactUs} />
          <Route path="/bandinfo" component={BandInfo} />
          <Route path="/apod" component={Apod} />
          {/* <Route path="/contactus" component={ContactUs} /> */}
          <Route component={NotFound} />
        </Switch>
      </div>
    </>
  );
}

export default App;
