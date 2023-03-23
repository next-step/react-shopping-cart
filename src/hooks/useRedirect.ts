import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import type { Domain } from "@/routes";
import { DOMAINS } from "@/routes";

const useRedirect = (domain: Domain, redirectCondition = true) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (redirectCondition) {
      navigate(DOMAINS[domain]);
    }
  }, []);
};

export default useRedirect;
