import React from "react";
import UserLayout from "@/components/layouts/UserLayout";
import CurrentLocationCard from "@/components/users/user/CurrentLocationCard";
import LocationHistoryCard from "@/components/users/user/LocationHistoryCard";

const User = () => {
  return (
    <UserLayout pageTitle="Usuarios" headerTitle="Usuarios">
      <div className="mt-4 grid grid-cols-1 gap-5 lg:grid-cols-2">
        <CurrentLocationCard />
        <LocationHistoryCard />
      </div>
    </UserLayout>
  );
};

export default User;
