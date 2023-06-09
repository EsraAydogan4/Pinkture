import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate=useNavigate();

  return (
    <>
      <div>
    Home Page     
    </div>
    {/* <button onClick={()=> navigate('test ')}>
      test
    </button> */}
    </>
  );
}

export default Home