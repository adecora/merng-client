import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
// We import App.css after because in here we are gonna override the default styles from semantic UI
import './App.css';

import { AuthProvider } from './context/auth'
import AuthRoute from './util/AuthRoute';

import { Container } from 'semantic-ui-react';
import MenuBar from './components/MenuBar';
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import SinglePost from './pages/SinglePost'

function App() {
  return (
    <div>
      <AuthProvider>
        {/* Everything inside here will have access to that context */}
        <Router>
          <Container>
            <MenuBar/>
            <Route exact path="/" component={Home} />
            <AuthRoute exact path="/login" component={Login} />
            <AuthRoute exact path="/register" component={Register} />
            <Route exact path="/posts/:postId" component={SinglePost} />
          </Container>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
