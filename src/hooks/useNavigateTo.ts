import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { Domain, DOMAINS } from "@/routes";

const useNavigateTo = () => {
  const navigate = useNavigate();

  const moveTo = useCallback((path: Domain) => () => navigate(DOMAINS[path]), []);

  return moveTo;
};

export default useNavigateTo;
