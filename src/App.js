import React, { useState } from 'react';
import { Navbar, Nav, Button, Jumbotron } from 'react-bootstrap';
import './App.css';
import Data from './data.js';
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import Detail from './Detail.js';
import axios from 'axios'; //for ajax
import Cart from './Cart.js';

function App() {

  let [shoes, shoes변경] = useState(Data);
  let [재고, 재고변경] = useState([10,11,12]);
  // let history2 = useHistory();

  // function handleClick() {
  //   history2.push("/detail/:id");
  // }
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/">Shoe-Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
          <Nav.Link as={Link} to="/"> Home </Nav.Link>
         <Nav.Link as={Link} to="/Detail"> Detail </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Route  exact path="/">
        <Jumbotron className="background">
          <h1>Hello, world!</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
        </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>
        <div className="container">
          <div className="row">
            {
              shoes.map((a, i) => {
                return <Card shoes={shoes[i]} i={i} />
              })
            }

          </div>
        </div>

        <br/>
      <button className="btn btn-primary" onClick={() => {

        axios.get('https://codingapple1.github.io/shop/data2.json')
        .then((result)=>{   shoes변경([...shoes, ...result.data ])   })
        .catch(()=>{ })

      }}>더보기</button>
      </Route>

      <Route path="/detail/:id">
        <Detail shoes={shoes} 재고={재고} 재고변경={재고변경} />
      </Route>

      <Route path="/cart">
        <Cart></Cart>
      </Route>



    </div>
  );
}

function Card(props) {
  let history = useHistory();
  return (// ⬅ how can i do data rendering
    <div className="col-md-4" onClick={ ()=>{ history.push('/detail/' + props.shoes.id) } }> 
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'} width="100%" /> 
      <h4>{props.shoes.title}</h4> 
      <p>{props.shoes.content} & {props.shoes.price}</p>
    </div>

  )

}



export default App;
