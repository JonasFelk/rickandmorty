import React, { FC } from "react";
import { selectorLocations } from "../../redux/asyncLocations";
import { Status } from "../../redux/character/types";
import { useAppSelector } from "../../redux/store";
import { SkeletonSidebar } from "../../components";

interface INameSidebar {
  name: string;
  children: React.ReactNode
}

export const NameSidebar: FC<INameSidebar> = ({ name, children }) => {
  const { status } = useAppSelector(selectorLocations)

  return <div>
    <span>
      {status === Status.LOADING ? (
        <SkeletonSidebar />
      ) : (
        `${name}: ${children}`
      )}
    </span>
  </div>
};
