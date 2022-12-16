import React from 'react'
import Table from "../Table"

const UsersTable = () => {
  const headers = [
    'ID Usuario',
    'Nombre',
    'Teléfono',
    'Correo',
    'Fecha de Creación',
    'Tipo',
    'Estado',
    'Acción',
  ];

  return (
    <Table>
      <Table.Thead>
        {
          headers.map((header) => (
            <Table.Th key={header}>{header}</Table.Th>
          ))
        }
      </Table.Thead>
      <Table.Tbody>
        {[...Array(20)].map((user, index) => {
          return (
            <Table.Tr key={index}>
              <Table.Td>
                UI123123
              </Table.Td>
              <Table.Td>
                Carlos Pérez
              </Table.Td>
              <Table.Td>
                +593 987 654 321
              </Table.Td>
              <Table.Td>
                ejemplo@gmail.com
              </Table.Td>
              <Table.Td>
                25/05/22
              </Table.Td>
              <Table.Td>
                Corporativo
              </Table.Td>
              <Table.Td>
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-semibold bg-green-100 text-green-600">
                  <svg className="mr-1.5 h-2 w-2 text-green-600" fill="currentColor" viewBox="0 0 8 8">
                    <circle cx={5} cy={4} r={3} />
                  </svg>
                  Badge
                </span>
              </Table.Td>
              <Table.Td>

              </Table.Td>
            </Table.Tr>
          )
        })}
      </Table.Tbody>
    </Table>

    // <div className="overflow-x-auto">
    //   <div className="inline-block min-w-full">
    //     <div className="overflow-hidden">
    //       <table className="min-w-full">
    //         <thead className="bg-transparent">
    //           <tr>
    //             <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
    //               Correo
    //             </th>
    //             <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
    //               Fecha de Creación
    //             </th>
    //             <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
    //               Tipo
    //             </th>
    //             <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
    //               Estado
    //             </th>
    //             <th scope="col" className="relative py-3.5 text-left pl-3 pr-4 sm:pr-6 text-sm font-semibold text-gray-900">
    //               Acción
    //             </th>
    //           </tr>
    //         </thead>
    //         <tbody className="divide-y divide-gray-200 bg-white">
    //           <tr key={'person.email'}>
    //             <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
    //               <div className="flex items-center">
    //                 <div className="h-10 w-10 flex-shrink-0">
    //                   <img className="h-10 w-10 rounded-full" src={'person.image'} alt="" />
    //                 </div>
    //                 <div className="ml-4">
    //                   <div className="font-medium text-gray-900">{'person.name'}</div>
    //                   <div className="text-gray-500">{'person.email'}</div>
    //                 </div>
    //               </div>
    //             </td>
    //             <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
    //               <div className="text-gray-900">{'person.title'}</div>
    //               <div className="text-gray-500">{'person.department'}</div>
    //             </td>
    //             <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
    //               <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
    //                 Active
    //               </span>
    //             </td>
    //             <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{'person.role'}</td>
    //             <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
    //               <a href="#" className="text-indigo-600 hover:text-indigo-900">
    //                 Edit<span className="sr-only">, {'person.name'}</span>
    //               </a>
    //             </td>
    //           </tr>
    //         </tbody>
    //       </table>
    //     </div>
    //   </div>
    // </div>


  )
}

export default UsersTable