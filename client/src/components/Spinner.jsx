import React from 'react';
import { ClipLoader } from "react-spinners";

const Spinner = ({subs}) => (
  <ClipLoader
    loading={subs.isLoading}
    sizeUnit={"px"}
    size={30}
    color={"#aaaec9"}
  />
)

export default Spinner;