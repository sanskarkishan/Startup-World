import React from 'react'

export const Cards = ({title, icon, value, data}) => {
  return (
    <div className=''>
        <div className="bg-white h-70 w-70 dark:bg-gray-800 hover:bg-gray-700 shadow-md rounded-lg p-5 m-2 flex space-x-4">
            <div className="text-3xl text-blue-500">
            {icon}
            </div>
            <div>
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="text-gray-600 text-2xl font-bold dark:text-gray-400">{value}</p>
            {data && data.length > 0 && (
                <div className="mt-2 -mx-10 w-60 text-sm text-gray-100">
                    <ul>
                        {data.map((item) => (
                            <li key={item.id} className="mb-1">
                                <strong>{item.id}. {item.type}:</strong> {item.description} <span className="text-xs text-gray-400">({item.date})</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            </div>
        </div>  
    </div>
  )
}
