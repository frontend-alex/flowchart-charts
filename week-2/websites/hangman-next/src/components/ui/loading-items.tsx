import Image from "next/image";
import { Skeleton } from "./skeleton";

export type TStatus = {
  status?: boolean;
  data?: any;
};

export const ProfileImage = ({ status, data }: TStatus) => {
  return (
    <>
      {!status ? (
        <Skeleton className="skeleton rounded-full h-[70px] w-[70px]" />
      ) : (
        <Image
          src={data?.imageUrl as string}
          className="rounded-full border-2 border-white dark:border-neutral-800"
          height={70}
          width={70}
          alt="pfp"
        />
      )}
    </>
  );
};


export const SmallProfileImage = ({ status, data }: TStatus) => {
  return (
    <>
      {!status ? (
        <Skeleton className="skeleton rounded-full h-[70px] w-[70px]" />
      ) : (
        <Image
          src={data.imageUrl as string}
          className="rounded-full"
          height={37}
          width={37}
          alt="pfp"
        />
      )}
    </>
  );
};





export const Username = ({ status, data }: TStatus) => {
  return (
    <>
      {!status ? (
        <Skeleton className="h-[20px] skeleton w-1/2" />
      ) : (
        <h1 className="font-bold text-xl">
          {data.username}
        </h1>
      )}
    </>
  );
};

export const Email = ({ status , data}: TStatus) => {
  return (
    <>
      {!status ? (
        <Skeleton className="h-[20px] skeleton w-1/2" />
      ) : (
        <p>
          {data.primaryEmailAddress.emailAddress}
        </p>
      )}
    </>
  );
};