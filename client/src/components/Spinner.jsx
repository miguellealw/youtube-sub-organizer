import React from 'react';
import { ClipLoader } from "react-spinners";

const Spinner = ({isLoading}) => (
  <ClipLoader
    loading={isLoading}
    sizeUnit={"px"}
    size={30}
    color={"#aaaec9"}
  />
)

export default Spinner;