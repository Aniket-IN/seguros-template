import React, { createElement, Fragment } from 'react'
import Table from "../Table"
import { Menu, Transition } from "@headlessui/react"
import classNames from "classnames"
import { ChevronDownIcon, StarIcon } from "@heroicons/react/20/solid"
import Link from "next/link"
import EvidenceModalBtn from "../shields/EvidenceModalBtn"
import CommentsModalBtn from "./CommentsModalBtn"
import ModificationHistoryModalBtn from "./ModificationHistoryModalBtn"
import QualificationModalBtn from "./QualificationModalBtn"

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
        {[...Array(20)].map((user, index) => {
          return (
            <Fragment key={index}>
              <Table.Tr>
                <Table.Td>
                  {index == 0 ? (
                    <div>
                      <dd className="font-semibold text-danger">SOS</dd>
                      <dd>SOS#1231231</dd>
                    </div>
                  ) : (
                    <div>
                      <dd className="font-semibold">Alerta - Policial</dd>
                      <dd>Alerta#1231231</dd>
                    </div>
                  )}
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
                  {!!(index == 0) && (
                    <StatusBadge
                      className="bg-danger text-danger"
                      text="Pendiente"
                    />
                  )}
                  {!!(index == 1) && (
                    <StatusBadge
                      className="bg-warning text-warning"
                      text="Ayuda enviada"
                    />
                  )}
                  {![0, 1].includes(index) && (
                    <StatusBadge
                      className="bg-primary text-primary"
                      text="Resuelto"
                    />
                  )}
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
                  <QualificationModalBtn className="flex gap-2 items-center group hover:text-primary hover:underline">
                    <StarIcon className="w-6 h-6 text-warning group-hover:text-primary" />
                    <span>4</span>
                  </QualificationModalBtn>
                </Table.Td>
              </Table.Tr>
            </Fragment>
          )
        })}


      </Table.Tbody >
    </Table >
  )
}

const StatusBadge = ({ as = 'button', className = '', text = '', ...props }) => {
  return (
    createElement(as, {
      ...props,
      className: classNames(className, "inline-flex items-center px-3 py-1.5 rounded-full text-sm font-semibold bg-opacity-20"),
      children: <>
        <svg className="mr-1.5 h-2 w-2 " fill="currentColor" viewBox="0 0 8 8">
          <circle cx={5} cy={4} r={3} />
        </svg>
        {text}
      </>
    })
  )
}

export default AlertsSOSTable