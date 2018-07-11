import React from "react";
import { ActivityIndicator } from "react-native";
import hoistNonReactStatics from "hoist-non-react-statics";

const withLoader = WrappedComponent => {
  const NewComponent = props =>
    props.loading ? <ActivityIndicator /> : <WrappedComponent {...props} />;
  hoistNonReactStatics(NewComponent, WrappedComponent || {});
  return NewComponent;
};

export default withLoader;
