export const logWarn = (...params) => {
  if (__DEV__) {
    require("../../ReactotronConfig").default.warn(params);
  }
};

export const logInfo = (...params) => {
  if (__DEV__) {
    require("../../ReactotronConfig").default.warn(params);
  }
};

export const logError = (...params) => {
  if (__DEV__) {
    require("../../ReactotronConfig").default.warn(params);
  }
};
