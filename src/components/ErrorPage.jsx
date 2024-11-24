import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function ErrorPage() {


  const navigate = useNavigate();

  const handelGoBack = () => {

    navigate(-1);
    

  }

  return (
    <div>
      <style>@import url(https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css);</style>
      <div className="min-w-screen min-h-screen bg-blue-100 flex items-center p-5 lg:p-20 overflow-hidden relative">
        <div className="flex-1 min-h-full min-w-full rounded-3xl bg-white shadow-xl p-10 lg:p-20 text-gray-800 relative md:flex items-center text-center md:text-left">
          <div className="w-full md:w-1/2">
            <div className="mb-10 lg:mb-20"></div>
            <div className="mb-10 md:mb-20 text-gray-600 font-light">
              <h1 className="font-black uppercase text-3xl lg:text-5xl text-yellow-500 mb-10">You seem to be lost!</h1>
              <p>The page you're looking for isn't available.</p>
              <p>Try searching again or use the Go Back button below.</p>
            </div>
            <div className="mb-20 md:mb-0">
              <button className="text-lg font-light outline-none focus:outline-none transform transition-all hover:scale-110 text-yellow-500 hover:text-yellow-600"
              onClick={handelGoBack}
              >
                <i className="mdi mdi-arrow-left mr-2"></i>Go Back
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 text-center">
          
            <img src='./error.svg'  className="w-full max-w-lg lg:max-w-full mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}
