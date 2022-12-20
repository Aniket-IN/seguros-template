import React from 'react'
import ShieldLayout from "@/components/layouts/ShieldLayout"
import Table from "@/components/Table"

export default function index() {
  return (
    <ShieldLayout pageTitle="Escudos" headerTitle="Escudos">
      {/* TODO: Design page (shields/1/route-history)
      XD Link: https://xd.adobe.com/view/258a5967-33a7-4223-b884-a052f322a683-70d9/screen/cf3baed5-8183-4510-8037-d7828fe0d793/specs/
      */}
      <div className="flex flex-col lg:flex-row gap-5 mt-4 ">
        <Table wrapperClassName="max-w-md w-full max-h-[750px] no-scrollbar" className="relative">
          <Table.Thead className="sticky top-0 bg-accent">
            <Table.Tr>
              <Table.Th>Nombre</Table.Th>
              <Table.Th>Jerarquía</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {[...Array(20)].map((item, index) => (
              <Table.Tr key={index}>
                <Table.Td >
                  <div className="flex gap-3">
                    <div className="shrink-0">
                      <img src="" className="" alt="" />
                    </div>
                    <dl>
                      <dd>Juan Jesús Ledesma</dd>
                      <dd>ID-U1231231</dd>
                    </dl>
                  </div>

                </Table.Td>
                <Table.Td>
                  <div className="flex gap-4 items-center justify-between">
                    <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-semibold bg-warning bg-opacity-20 text-warning">
                      <svg className="mr-1.5 h-2 w-2 text-warning" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx={5} cy={4} r={3} />
                      </svg>
                      Colaborativo
                    </span>
                    <label>
                      <input
                        type="radio"
                        name="radio"
                        className="w-4 h-4"
                      />
                    </label>
                  </div>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>


      </div>
    </ShieldLayout>
  )
}

