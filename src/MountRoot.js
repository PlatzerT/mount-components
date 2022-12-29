import React from "react";
import { useEffect, useState } from "react";
import useMount from "./useMount";

const MountRoot = () => {
  const [mountedComponent, setMountedComponent] = useState({});
  const { on } = useMount();

  useEffect(() => {
    on("open", ({ component, props }) => {
      setMountedComponent({
        component,
        props,
        close: (event) => {
          setMountedComponent({});
        },
      });
    });
  }, []);

  const MountedComponent = mountedComponent.component
    ? mountedComponent.component
    : null;

  return (
    <section>
      ok
      {MountedComponent && (
        <MountedComponent
          {...mountedComponent.props}
          close={mountedComponent.close}
        />
      )}
    </section>
  );
};

export default MountRoot;
