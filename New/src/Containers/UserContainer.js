import React, { useEffect } from "react";
import { Text } from "react-native";

// import { useTheme } from "@/Hooks";
import { logInfo } from "@/utils";

// import { UserViewComponent } from "@/Components";
import { useUser } from "@/models";
import { useLazyFetchOneQuery } from "@/services/modules/users";

import { fetchOne } from "@/models";

const UserContainer = () => {
  // const [fetchOne, { data, isSuccess, isLoading, isFetching, error }] =
  //   useLazyFetchOneQuery();
  // const { id, name } = useUser();
  useUser(useLazyFetchOneQuery);
  useEffect(() => {
    // let userId = "1";
    // fetchOne(userId);
    // const { id, name } = useUser("1");
    // logInfo("id:" + data?.id);
    // logInfo("name:" + data?.name);
  });
  // const { id, name } = useUser("1");

  // if (true) {
  //   return (
  //     <Text style={[Layout.fill, Fonts.textCenter, Fonts.textSmall]}>
  //       {name}
  //     </Text>
  //   );
  // } else {
  //   return <UserViewComponent (id, name, changeUserName)/>;
  // }
  // return <Text>Hello: {useUser()?.name}</Text>;
  return <Text>Hello</Text>;
};

const changeUserName = () => {
  // check validation
};

export default UserContainer;
