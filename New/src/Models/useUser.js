import React, { useEffect } from "react";
import { useLazyFetchOneQuery } from "@/services/modules/users";
import { logInfo } from "@/utils";

export const useUser = (fetchUser) => {
  logInfo("From useUser outside useEffect");
  const [fetchOne, { data, isSuccess, isLoading, isFetching, error }] =
    fetchUser();

  useEffect(() => {
    logInfo("From useUser inside useEffect");
    // fetchOne("1");
    // logInfo("id inside useUser:" + data?.id);
    // logInfo("name inside useUser:" + data?.name);
    // fetchUser();
  });

  let temp = "aa";
  // return fetchOne;
  // return { data };
  return { temp };
};

// export default function () {
//   const [fetchOne, { data, isSuccess, isLoading, isFetching, error }] =
//     useLazyFetchOneQuery();

//   let userId = "1";

//   // fetchOne(userId);

//   logInfo("From useUser with API");

//   return {
//     // id: data?.id,
//     // name: data?.name,
//     // id: "1",
//     name: "Phu Vinh Ha",
//   };
// }
