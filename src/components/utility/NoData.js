import React from "react";

const NoData = (WrappedComponent, field) => {
  return class NoData extends React.Component {
    render() {
      return this.props[field].length === 0 ? (
        <div className="alert alert-danger my-3">Data not found!!</div>
      ) : (
        <WrappedComponent {...this.props} />
      );
    }
  };
};
export default NoData;
