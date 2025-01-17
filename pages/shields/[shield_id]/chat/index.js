import React, { createElement } from 'react'
import ShieldLayout from "@/components/layouts/ShieldLayout"
import Table from "@/components/Table"
import SamplePagination from "@/components/SamplePagination"
import DividerText from "@/components/utility/DividerText"
import classNames from "classnames"
import ChatBoxWrapper from "@/components/shields/shield/chat/ChatBoxWrapper"
import ChatBox from "@/components/shields/shield/chat/ChatBox"
import InputGroup from "@/components/utility/InputGroup"

export default function index() {
  return (
    <ShieldLayout pageTitle="Escudos" headerTitle="Escudos">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-4">

        {/* Left side */}
        <ChatBoxWrapper>
          <h3 className="text-lg font-semibold">Chat</h3>
          <ChatBox>
            {/* <div>
              <DividerText textClassName="bg-accent" text="25/05/22" />
            </div> */}
          </ChatBox>
        </ChatBoxWrapper>

        {/* Right side */}
        <ChatBoxWrapper>
          <h3 className="text-lg font-semibold">Buscar mensajes</h3>

          <div className="flex items-center gap-2 text-sm">
            <span>Buscar</span>
            <div>
              <InputGroup>
                <InputGroup.Input
                  type="date"
                  className="bg-accent !border-none"
                />
              </InputGroup>
            </div>
            <button className="self-stretch px-3 font-medium bg-primary text-white rounded focus:ring-2 ring-offset-2">
              Buscar
            </button>
          </div>

          <ChatBox>
            {/* <div>
              <DividerText textClassName="bg-accent" text="25/05/22" />
            </div> */}
          </ChatBox>
        </ChatBoxWrapper>

      </div>
    </ShieldLayout>
  )
}

