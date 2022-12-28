import React from 'react'
import UserLayout from "@/components/layouts/UserLayout"
import Table from "@/components/Table"
import EvidenceModal from "@/components/users/user/SOS/EvidenceModalBtn"
import EvidenceModalBtn from "@/components/users/user/SOS/EvidenceModalBtn"

const SOS = () => {
  return (
    <>


      <UserLayout pageTitle="Usuarios" headerTitle="Usuarios">
        <div className="mt-5">
          <Table>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Tipo</Table.Th>
                <Table.Th>Ubicación</Table.Th>
                <Table.Th>Horario</Table.Th>
                <Table.Th>Hora</Table.Th>
                <Table.Th>Evidencia</Table.Th>
                <Table.Th>Escudo</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              <Table.Tr>
                <Table.Td>
                  <p className="text-danger font-semibold">SOS</p>
                  <p>SOS#1231231</p>
                </Table.Td>
                <Table.Td>-12.091307, -77.042053</Table.Td>
                <Table.Td>23/09/2022</Table.Td>
                <Table.Td>10:30 Hrs.</Table.Td>
                <Table.Td>-</Table.Td>
                <Table.Td className="font-semibold">ESC1231233</Table.Td>
              </Table.Tr>
              {[...Array(2)].map((item, index) => (
                <Table.Tr key={index}>
                  <Table.Td>
                    <p className="font-semibold">Alerta - Policial</p>
                    <p>Alerta#1231231</p>
                  </Table.Td>
                  <Table.Td>-12.091307, -77.042053</Table.Td>
                  <Table.Td>23/09/2022</Table.Td>
                  <Table.Td>10:30 Hrs.</Table.Td>
                  <Table.Td>
                    <EvidenceModalBtn className="text-primary">
                      Evidencia#123123
                    </EvidenceModalBtn>
                  </Table.Td>
                  <Table.Td className="font-semibold">ESC1231233</Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>

        </div>
      </UserLayout>
    </>
  )
}

export default SOS