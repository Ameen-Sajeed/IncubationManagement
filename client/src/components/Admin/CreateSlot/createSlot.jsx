import React from 'react'
import axios from 'axios'
export default function CreateSlot() {
    
    const Bookform = async (e)=>{
        e.preventDefault()
        const formData = new FormData();
         
        axios.post('/http://localhost:5000/admin/createslots',formData).then((response)=>{
            console.log("hghghg");
            console.log(response.data);
        })
    }
  return (
    <div>
                    <div className=' grid-cols-1 sm:grid-cols-2 p-5 flex justify-center '>
        <div className='hidden sm:block'>
        </div>

        <div className='bg-light-500 flex flex-col justify-center'>

            <form className='max-w-[400px] w-full h-max mx-auto rounded-lg bg-blue-200 p-8 px-8  ' onSubmit={Bookform}>
                <h2 className='text-4xl text-teal-600 font-extrabold text-center'>Create a Slot</h2>
       
                <div className='flex flex-col text-blue-900 py-2'>
                    <label className='text-blue-900 text-bold text-center'>BookedID</label>
                    <input className='rounded-lg bg-gray-200 mt-2 p-2 focus:border-blue-500 focus:bg-gray-400 focus:outline-none' type="text" />
                </div>
                <div className='flex flex-col text-blue-900 py-2'>
                    <label className='text-center'>SlotNo</label>
                    <input className='p-2 rounded-lg bg-gray-200 mt-2 focus:border-blue-200 focus:bg-gray-400 focus:outline-none' type="text"  />
                </div>
          
                <button  className='w-full my-5 py-2 bg-blue-700 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>SUBMIT</button>
               
            </form>
        </div>
    </div>

                </div>
  )
}

