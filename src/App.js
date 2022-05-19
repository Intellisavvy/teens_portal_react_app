
import { sizeHeight } from '@mui/system';
import { useState } from 'react';
import './job post/App.css';
import VendorNavbar from './job post/component';
import Post from './job post/post';
import Hey from './job post/test';
// import Hey from './test';

function App() {
  const [now,setnow]=useState([]);
  const data=(user,job,des,payment,fromtime,totime,work,stat,place,zip,add)=>{
    setnow((hill)=>{
      return [...hill,
      {name:user,title:job,apple:des,pay:payment,from:fromtime,to:totime,time:work,state:stat,city:place,code:zip,details:add,id:Math.random().toString()},]
    })
  }
  return (
    <div >
      <VendorNavbar/>
     <Post onflow={data}/>
     <Hey fin={now}/>
    </div>
  );
}

export default App;




