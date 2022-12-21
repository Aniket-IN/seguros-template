import React, { Fragment } from 'react'
import Table from "../Table"
import { Menu, Transition } from "@headlessui/react"
import classNames from "classnames"
import { ChevronDownIcon, StarIcon } from "@heroicons/react/20/solid"
import Link from "next/link"
import EvidenceModalBtn from "../shields/EvidenceModalBtn"
import CommentsModalBtn from "./CommentsModalBtn"
import ModificationHistoryModalBtn from "./ModificationHistoryModalBtn"

const AlertsSOSTable = () => {
  const headers = [
    'ID Alerta',
    'Usuario',
    'Ubicación',
    'Horario',
    'Estado',
    'Evidencia',
    'Comentario',
    'Historial modif.',
    'Calificación',
  ];

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          {
            headers.map((header) => (
              <Table.Th key={header}>{header}</Table.Th>
            ))
          }
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        <Table.Tr>
          <Table.Td>
            <dd className="font-semibold text-danger">SOS</dd>
            <dd>SOS#1231231</dd>
          </Table.Td>
          <Table.Td>
            <dd>Juan Jesús Alvarez</dd>
            <dd>U54872256</dd>
          </Table.Td>
          <Table.Td>
            -12.091307, -77.042053
          </Table.Td>
          <Table.Td>
            <dd>25/05/22</dd>
            <dd>12:00 Hrs</dd>
          </Table.Td>
          <Table.Td>
            <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-semibold bg-danger bg-opacity-20 text-danger">
              <svg className="mr-1.5 h-2 w-2 text-danger" fill="currentColor" viewBox="0 0 8 8">
                <circle cx={5} cy={4} r={3} />
              </svg>
              Pendiente
            </span>
          </Table.Td>
          <Table.Td className="font-semibold">
            <EvidenceModalBtn className="hover:text-primary hover:underline">
              Evidencia#123123
            </EvidenceModalBtn>
          </Table.Td>
          <Table.Td className="font-semibold">
            <CommentsModalBtn className="hover:text-primary hover:underline">
              Ver comentarios
            </CommentsModalBtn>
          </Table.Td>
          <Table.Td className="font-semibold">
            <ModificationHistoryModalBtn className="hover:text-primary">
              Ver historial
            </ModificationHistoryModalBtn>
          </Table.Td>
          <Table.Td className="font-semibold">
            <button className="flex gap-2 items-center group hover:text-primary hover:underline">
              <StarIcon className="w-6 h-6 text-warning group-hover:text-primary" />
              <span>4</span>
            </button>
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>
            <dd className="font-semibold">Alerta - Policial</dd>
            <dd>SOS#1231231</dd>
          </Table.Td>
          <Table.Td>
            <dd>Juan Jesús Alvarez</dd>
            <dd>U54872256</dd>
          </Table.Td>
          <Table.Td>
            -12.091307, -77.042053
          </Table.Td>
          <Table.Td>
            <dd>25/05/22</dd>
            <dd>12:00 Hrs</dd>
          </Table.Td>
          <Table.Td>
            <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-semibold bg-warning bg-opacity-20 text-warning">
              <svg className="mr-1.5 h-2 w-2 text-warningbg-warning" fill="currentColor" viewBox="0 0 8 8">
                <circle cx={5} cy={4} r={3} />
              </svg>
              Ayuda enviada
            </span>
          </Table.Td>
          <Table.Td className="font-semibold">
            <EvidenceModalBtn className="hover:text-primary hover:underline">
              Evidencia#123123
            </EvidenceModalBtn>
          </Table.Td>
          <Table.Td className="font-semibold">
            <button className="hover:text-primary hover:underline">
              Ver comentarios
            </button>
          </Table.Td>
          <Table.Td className="font-semibold">
            <ModificationHistoryModalBtn className="hover:text-primary">
              Ver historial
            </ModificationHistoryModalBtn>
          </Table.Td>
          <Table.Td className="font-semibold">
            <button className="flex gap-2 items-center group hover:text-primary hover:underline">
              <StarIcon className="w-6 h-6 text-warning group-hover:text-primary" />
              <span>4</span>
            </button>
          </Table.Td>
        </Table.Tr>
        {[...Array(10)].map((user, index) => {
          return (
            <Fragment key={index}>
              <Table.Tr>
                <Table.Td>
                  <dd className="font-semibold">Alerta - Policial</dd>
                  <dd>SOS#1231231</dd>
                </Table.Td>
                <Table.Td>
                  <dd>Juan Jesús Alvarez</dd>
                  <dd>U54872256</dd>
                </Table.Td>
                <Table.Td>
                  -12.091307, -77.042053
                </Table.Td>
                <Table.Td>
                  <dd>25/05/22</dd>
                  <dd>12:00 Hrs</dd>
                </Table.Td>
                <Table.Td>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-semibold bg-primary bg-opacity-20 text-primary">
                    <svg className="mr-1.5 h-2 w-2 text-primary" fill="currentColor" viewBox="0 0 8 8">
                      <circle cx={5} cy={4} r={3} />
                    </svg>
                    Resuelto
                  </span>
                </Table.Td>
                <Table.Td className="font-semibold">
                  <EvidenceModalBtn className="hover:text-primary hover:underline">
                    Evidencia#123123
                  </EvidenceModalBtn>
                </Table.Td>
                <Table.Td className="font-semibold">
                  <ModificationHistoryModalBtn className="hover:text-primary">
                    Ver historial
                  </ModificationHistoryModalBtn>
                </Table.Td>
                <Table.Td className="font-semibold">
                  <button className="hover:text-primary hover:underline">
                    Ver historial
                  </button>
                </Table.Td>
                <Table.Td className="font-semibold">
                  <button className="flex gap-2 items-center group hover:text-primary hover:underline">
                    <StarIcon className="w-6 h-6 text-warning group-hover:text-primary" />
                    <span>4</span>
                  </button>
                </Table.Td>
              </Table.Tr>
            </Fragment>
          )
        })}
      </Table.Tbody>
    </Table>
  )
}

export default AlertsSOSTable