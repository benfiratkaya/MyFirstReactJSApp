import React from "react";

const Loader = (WrappedComponent, field) => {
  return class Loader extends React.Component {
    render() {
      return !this.props[field] ? (
        <div className="d-flex justify-content-center my-5">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <WrappedComponent {...this.props} />
      );
    }
  };
};
export default Loader;
