import React, { useEffect, useState } from 'react';
import Select from 'react-select';

const App = () => {
  const [agree, setAgree] = useState(false)
  const [options, setOptions] = useState();
  const [selectedOption, setSelectedOption] = useState();
  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };
  useEffect(() => {
    fetch('Sector.json')
      .then(response => response.json())
      .then(data => setOptions(data));
  }, []);
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      Name: e.target.name.value,
      option: selectedOption.value
    }
    console.log('Form submitted', user);
  };
  return (
    <>
      <div className='flex justify-center mt-20'>
        <div className="card w-[60%] shadow-xl">
          <div className="card-body bg-slate-100 border rounded-xl">
            <h2 className="card-title">Please enter your name and pick the Sectors you are currently involved in.</h2>
            <form onSubmit={handleSubmit}>
              <div className='my-5'>
                <label className='font-bold mr-5'>Name:</label>
                <input className='border border-slate-300 rounded px-2 py-1 w-[300px]' type="text" name='name' required />
              </div>
              <div>
                <div className='flex'>
                  <label className='font-bold mr-4 pt-1'>Sector:</label>
                  <Select options={options} onChange={handleChange} value={selectedOption} className="w-[300px]" />
                </div>
                <div className='flex py-5 ml-14'>
                  <input type="checkbox" name="agree" id="" onClick={() => setAgree(!agree)} />
                  <label htmlFor="agree" className='font-semibold pl-5'>Agree to terms</label>
                </div>
                <div>
                  <input type="submit" value="Save" className='btn btn-primary px-5' disabled={!agree} />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;