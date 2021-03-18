import {Switch, Route, Redirect} from 'react-router'

import './App.css';
import Layout from './components/Layout/Layout'
import Signin from './components/Auth/Signin'
import Signup from './components/Auth/Signup';
import Main from './components/MainPage/Main'
import 'alk-life'

function App() {


  return (
    <div className="App">
        <Layout>
          <Switch>
            <Route path='/' exact component={Signin}/>
            <Route path='/signup' component={Signup}/>           
            <Route path='/main' exact component={Main} />
            <Redirect to='/' /> 
          </Switch>
        </Layout>
    </div>
  );
}

export default App;
