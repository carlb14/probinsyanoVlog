import React from "react";
import {Skeleton} from "@nextui-org/react";

export default function Loading() {
  return (
    <div className=" w-full flex mt-3 gap-3 ">
      <div className="w-full flex flex-col gap-2 items-start">
        <Skeleton className="h-10 w-3/6 rounded-lg"/>
        <Skeleton className="h-7 w-full rounded-lg"/>
        <Skeleton className="h-8 w-3/6 rounded-lg"/>
        <Skeleton className="h-10 w-full rounded-lg"/>
        <Skeleton className="h-9 w-fullrounded-lg"/>
        <Skeleton className="h-7 w-full rounded-lg"/>
        <Skeleton className="h-20 w-4/6 rounded-lg"/>
        <Skeleton className="h-10 w-full rounded-lg"/>

      </div>
    </div>
  );
}
