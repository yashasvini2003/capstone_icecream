'use client'

import { useState } from "react"
import SampleButton from "@/components/SampleButton"

export default function Test () {

    const [data, SetData] = useState(null)

    //function to call API (GET, Route -> api/icecreams)
    //future -> dynamic calling of APIS routes
    const getData = async () => {
        const url = `${process.env.NEXT_PUBLIC_BACKEND_API}/api/icecreams`
        //const url = `http://localhost:8080/api/icecreams`

        try {
            const res = await fetch(url);
            
            if (!res.ok) {
                throw new Error(`Response status: ${res.status}`)
            }

            //wait for response before turning into json data
            const jsonData = await res.json()
            //set data from api
            SetData(jsonData)

        } catch (error) {
            console.log(`Error: ${error.message}`)
        }
    }

    return (
        <div>
            <div className="flex justify-center mt-24">
                <SampleButton click={getData} btnName={"Get Icecreams"} />
            </div>

            {data ? (
                <div className="max-w-7xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                {data.map((iceCream, index) => (
                  <div key={index} className="bg-white shadow-md rounded-xl p-5 border border-gray-200 flex flex-col">
                    
                    {/* Title */}
                    <h2 className="text-lg font-semibold text-gray-900">{iceCream.flavor}</h2>
                    {/* Picture */}
                    <div className="flex justify-center">
                      <img src={`${process.env.NEXT_PUBLIC_BACKEND_API}/${iceCream.picture}`} alt="picture" className="w-48 h-48 object-cover rounded-lg"/>
                    </div>
                    {/* Portion Size */}
                    <p className="text-gray-600 text-sm mt-1">{iceCream.portion_size}</p>
              
                    {/* Nutritional Info Box */}
                    <div className="mt-2 p-3 shadow-sm flex gap-4 rounded">
                        {/* Cards into component? */}
                        {/* Fat */}
                      <div className="flex-1 rounded-lg p-1 bg-gray-100 text-center">
                        <span className="block text-lg font-bold">{iceCream.nutritional_info.fat}</span>
                        <span className="text-xs text-gray-500">Fat</span>
                      </div>
                        {/* Calories */}
                      <div className="flex-1 text-center rounded-lg p-1 bg-gray-100">
                        <span className="block text-lg font-bold">{iceCream.nutritional_info.calories}</span>
                        <span className="text-xs text-gray-500">Calories</span>
                      </div>
                        {/* Protein */}
                      <div className="flex-1 text-center rounded-lg p-1 bg-gray-100">
                        <span className="block text-lg font-bold">{iceCream.nutritional_info.protein}</span>
                        <span className="text-xs text-gray-500">Protein</span>
                      </div>
                    </div>
              
                    {/* Button Section */}
                    <div className="mt-3 flex justify-end">
                      <button className="bg-black text-white px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white hover:text-black border border-black">
                        View →
                      </button>
                    </div>
              
                  </div>
                ))}
              </div>              
            ) : (
                <p className="flex justify-center mt-2">No data!</p> 
            )}
        </div>
    )
}