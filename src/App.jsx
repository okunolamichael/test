import React from 'react';
import './App.css';
import card from './assets/card.png';
import bank from './assets/bank.png'
import transfer from './assets/transfer.png'
import secure from './assets/secure.png'
import logo from './assets/logo.png'

const App = () => {
  return (
    <div className="App m-5 mb-14">
      <header className="App-header">
        <div className='flex justify-between text-payvesselOrange'>
          <p className='font-bold text-[26px]'>pay with</p>
          <p className='text-center font-medium'>Business <br /> Logo </p>
          <p className=''>Macyjanet@gmail.com <br /><span className='text-orange flex justify-end font-bold'>NGN 5,000.00</span></p>
        </div>
        <div className='line'/>
      </header>

      <div className='content-container flex mt-4 h-[556px]'>
        
        <div className='sidebar mr-10 '>
          <section className="card text-center p-2 rounded-lg py-4 mb-4">
            <img src={card} alt="" className='w-8 h-8 ml-12 mb-3' />
            <p>Card payment</p>
          </section>

          <section className="bank text-center p-2 rounded-lg py-4 mb-4">
            <img src={transfer} alt="" className='w-8 h-8 ml-12 mb-3' />
            <p>Bank Transfer</p>
          </section>

          <section className="bank text-center p-2 rounded-lg py-4 mb-4">
            <img src={transfer} alt="" className='w-8 h-8 ml-12 mb-3' />
            <p>Phone Transfer</p>
          </section>

          <section className="bank text-center p-2 rounded-lg py-4 mb-4">
            <img src={bank} alt="" className='w-8 h-8 ml-12 mb-3' />
            <p>Bank Payment</p>
          </section>

          <section className="bank text-center p-2 rounded-lg py-4 mb-4">
            <img src={transfer} alt="" className='w-8 h-8 ml-12 mb-3' />
            <p>USSD</p>
          </section>
        </div>

        <div className='content rounded-2xl w-full'>
          <h1 className='text-center my-6 text-2xl font-bold'>Enter your card details</h1>

          <div className='mx-8'>
          <section className='username mb-8'>
            <p className='font-semibold'>Name on Card</p>
            <input type="text" placeholder='macy janet' className='h-18 w-full p-4 rounded-xl text text-xl'/>
          </section>
          
          <section className='cardnumber mb-8'>
            <p className='font-semibold'>Card Number</p>
            <input type="text" placeholder='1234 5678 9123 1234' className='h-18 w-full p-4 rounded-xl text text-xl'/>
          </section>

          <section className='details flex'>
            <span className='w-full'>
            <p>CVV</p>
            <input type="text" placeholder='...' className='h-18 w-full p-4 rounded-xl text text-xl'/>
            </span>
            <span className='ml-10 w-full'>
            <p>Expiry</p>
            <input type="text" placeholder='06/24' className='h-18 w-full p-4 rounded-xl text text-xl'/>
            </span>
          </section>

          <section className='details flex mt-8'>
            <span className='w-full'>
            <button className='h-18 w-full p-4 rounded-xl bg-black'>
              <p className='text-white text-3xl'>Cancel</p>
            </button>
            </span>
            <span className='ml-8 w-full'>
            <button className='h-18 w-full p-4 rounded-xl card'>
              <p className='text-white text-3xl'>Pay NGN300.50</p>
            </button>
            </span>
          </section>
          </div>

        </div>
      </div>

      <div className='mt-10 flex justify-center'>
        <img src={secure} alt="" className=' h-[22px] mt-2'/>
        <img src={logo} alt="" className='ml-10 h-[28px]'/>
      </div>
    </div>
    
    
  );

};

export default App;
