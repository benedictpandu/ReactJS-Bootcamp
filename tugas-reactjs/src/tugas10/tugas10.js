import React from 'react'


const Tugas10 = () => {
    return(
        <>
            <div className="w-1/2 mb-5 mx-auto overflow-x-auto relative shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-white uppercase bg-violet-500 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="py-3 px-6">
                    No
                    </th>
                    <th scope="col" className="py-3 px-6">
                    Nama
                    </th>
                    <th scope="col" className="py-3 px-6">
                    Mata Kuliah
                    </th>
                    <th scope="col" className="py-3 px-6">
                    Nilai
                    </th>
                    <th scope="col" className="py-3 px-6">
                    Index Nilai
                    </th>
                    <th scope="col" className="py-3 px-6">
                    Action
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="py-4 px-6">
                    1
                    </th>
                    <td className="py-4 px-6">
                    John
                    </td>
                    <td className="py-4 px-6">
                    Algoritma
                    </td>
                    <td className="py-4 px-6">
                    80
                    </td>
                    <td className="py-4 px-6">
                    A
                    </td>
                    <td className="py-4 px-6 flex justify-evenly">
                    <button><a href="#" className="font-medium text-black bg-white border-2 px-2 py-1 rounded-md border-slate-300">Edit</a></button>
                    <button><a href="#" className="font-medium text-black bg-red-500 border-2 px-2 py-1 rounded-md border-slate-300">Delete</a></button>
                    
                    </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="py-4 px-6">
                    2
                    </th>
                    <td className="py-4 px-6">
                    Doe
                    </td>
                    <td className="py-4 px-6">
                    Matematika
                    </td>
                    <td className="py-4 px-6">
                    70
                    </td>
                    <td className="py-4 px-6">
                    B
                    </td>
                    <td className="py-4 px-6 flex justify-evenly">
                    <button><a href="#" className="font-medium text-black bg-white border-2 px-2 py-1 rounded-md border-slate-300">Edit</a></button>
                    <button><a href="#" className="font-medium text-black bg-red-500 border-2 px-2 py-1 rounded-md border-slate-300">Delete</a></button>
                    
                    </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="py-4 px-6">
                    3
                    </th>
                    <td className="py-4 px-6">
                    Frank
                    </td>
                    <td className="py-4 px-6">
                    Kalkulus
                    </td>
                    <td className="py-4 px-6">
                    60
                    </td>
                    <td className="py-4 px-6">
                    C
                    </td>
                    <td className="py-4 px-6 flex justify-evenly">
                    <button><a href="#" className="font-medium text-black bg-white border-2 px-2 py-1 rounded-md border-slate-300">Edit</a></button>
                    <button><a href="#" className="font-medium text-black bg-red-500 border-2 px-2 py-1 rounded-md border-slate-300">Delete</a></button>
                    
                    </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="py-4 px-6">
                    4
                    </th>
                    <td className="py-4 px-6">
                    Jason
                    </td>
                    <td className="py-4 px-6">
                    Basis Data
                    </td>
                    <td className="py-4 px-6">
                    90
                    </td>
                    <td className="py-4 px-6">
                    A
                    </td>
                    <td className="py-4 px-6 flex justify-evenly">
                    <button><a href="#" className="font-medium text-black bg-white border-2 px-2 py-1 rounded-md border-slate-300">Edit</a></button>
                    <button><a href="#" className="font-medium text-black bg-red-500 border-2 px-2 py-1 rounded-md border-slate-300">Delete</a></button>
                    
                    </td>
                </tr>
                </tbody>
            </table>
            </div>

        </>
    )
}

export default Tugas10