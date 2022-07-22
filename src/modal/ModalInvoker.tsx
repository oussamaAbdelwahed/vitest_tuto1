import React from "react";
import { Modal } from "./Modal";
type Props = {
  open: boolean;
};
const ModalInvoker: React.FC<Props> = ({ open }) => {
  if (open) {
    return (
      <div role={"contentinfo"}>
        <Modal />
      </div>
    );
  }
  return <div role={"contentinfo"}></div>;
};

export default ModalInvoker;
