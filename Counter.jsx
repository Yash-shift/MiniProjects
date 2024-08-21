import { useState } from 'react';


function App() {
  const [count, setCount] = useState(0);
  function decreaseHandler(){
    setCount(count-1);
    }
  function increaseHandler(){
      setCount(count+1);
    }
  function resetHandler(){
    setCount(0);
  }







  return(
    <div className="w-[100vw] h-[100vw] flex justify-center items-center bg-blue-500 flex-col gap-5 font-bold ">
      <div className='text-white  text-2xl font-medium'> Increment and Decrement</div>
      <div className='bg-white flex justify-center gap-10 py-4 px-6 rounded-md text-[25px]'>
        <button onClick={decreaseHandler} className='border-r-4 text-center w-20 border-green-400 text-5xl'>
          -
        </button>
        <div className='flex items-center text-2xl '>
          {count}

        </div>
        <button onClick={increaseHandler} className='border-l-4 text-center  w-20 border-green-400 text-5xl'>
          +
        </button>
      </div>
      <button onClick={resetHandler} className='bg-green-500 text-white px-5 py-2 rounded-sm text-lg'>
          Reset
      </button>
      
    </div>
  );

}

export default App;