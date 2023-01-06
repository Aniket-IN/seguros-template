import React from "react";
import Link from "next/link";
import Admin from "@/components/layouts/Admin";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import ShieldCard from "./shield/ShieldCard";
import ShieldTabNav from "./shield/ShieldTabNav";

const ShieldLayout = ({ children, pageTitle = null, headerTitle = "" }) => {
  return (
    <Admin pageTitle={pageTitle} headerTitle={headerTitle}>
      <section className="container-padding space-y-5">
        <Link
          href="/shields"
          className="inline-flex items-center pt-5 hover:text-primary hover:underline"
        >
          <ChevronLeftIcon className="h-8 w-8" />
          <span>Volver</span>
        </Link>

        <h2 className="text-2xl font-medium">Familia</h2>
      </section>

      <section className="container-padding mt-6">
        <div className="gap-5 2xl:flex">
          <div className="w-full flex-shrink-0 2xl:max-w-xs">
            <ShieldCard />
          </div>

          <div className="flex-grow">
            <ShieldTabNav />

            {children}
          </div>
        </div>
      </section>
    </Admin>
  );
};

export default ShieldLayout;
