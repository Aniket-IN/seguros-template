import React from "react";
import Link from "next/link";
import Admin from "@/components/layouts/Admin";
import UserCard from "@/components/layouts/user/UserCard";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";

const PaymentMembershipLayout = ({
  data = {},
  children,
  pageTitle = null,
  headerTitle = "",
  isLoading,
  isError
}) => {
  return (
    <Admin pageTitle={pageTitle} headerTitle={headerTitle}>
      <section className="container-padding space-y-5">
        <Link
          href="/payment-memberships"
          className="inline-flex items-center pt-5 hover:text-primary hover:underline"
        >
          <ChevronLeftIcon className="h-8 w-8" />
          <span>Volver</span>
        </Link>

        <h2 className="text-2xl font-medium">Orden #{data.order_id}</h2>
      </section>

      <section className="container-padding mt-6">
        <div className="gap-5 2xl:flex">
          <div className="w-full flex-shrink-0 2xl:max-w-xs">
            {!isLoading && !isError && (
              <UserCard
                isLoading={isLoading}
                isError={isError}
                data={data}
              />
            )}
          </div>

          <div className="mt-6 flex-grow 2xl:mt-0">
            {/* <UserTabNav /> */}

            {children}
          </div>
        </div>
      </section>
    </Admin>
  );
};

export default PaymentMembershipLayout;
