import React from "react";
import {Skeleton} from "@nextui-org/react";

export default function Loading() {
  return (
    <div className=" w-full flex">
      <div className="w-full flex flex-col gap-2 items-start">
        <Skeleton className="h-15 w-3/6 rounded-lg"/>
        <Skeleton className="h-10 w-full rounded-lg"/>
        <Skeleton className="h-20 w-3/6 rounded-lg"/>
        <Skeleton className="h-10 w-full rounded-lg"/>
        <Skeleton className="h-9 w-full rounded-lg"/>
        <Skeleton className="h-10 w-full rounded-lg"/>
        <Skeleton className="h-20 w-4/6 rounded-lg"/>
        <Skeleton className="h-10 w-full rounded-lg"/>

      </div>
    </div>
  );
}
