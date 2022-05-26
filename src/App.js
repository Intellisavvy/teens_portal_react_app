
// import { Switch } from '@mui/material';
import { sizeHeight } from '@mui/system';
import { useState } from 'react';
import { Route,Link } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './Vendor/App.css';
import Applied from './Vendor/appliedposts';
import Post from './Vendor/Jobpost';
// import Hey from './job post/test';



function App() {
  const [now,setnow]=useState([]);
  const data=(user,job,des,payment,see,soo,work,stat,place,loc,zip,add)=>{
    setnow((hill)=>{
      return [...hill,
      {name:user,title:job,apple:des,pay:payment,from:see,to:soo,time:work,state:stat,city:place,location:loc,code:zip,details:add,id:Math.random().toString()},]
    })
  }
  return (
    <div >
  <BrowserRouter>
  
  <Link to='/'>Job</Link>
  <Link className='side' to='/applied'>posting</Link>
    <Switch>
        <Route path='/' exact component={Post}/>
        <Route path='/applied' exact component={Applied}/>
    </Switch>
  
  </BrowserRouter>
      {/*
     <Post onflow={data}/>
     <Hey fin={now}/> */}
     
    </div>
  );
}

export default App;




