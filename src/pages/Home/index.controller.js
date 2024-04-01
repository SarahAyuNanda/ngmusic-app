import { useMemo, useState } from "react";

const { useNavigate } = require("react-router-dom");

const useHome = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
  };

  const onSubmitSearch = () => {
    localStorage.setItem("search", search);
    navigate("/dashboard");
  };

  const isDisabled = useMemo(() => {
    return !search;
  }, [search]);

  return {
    search,

    onChangeSearch,
    onSubmitSearch,

    isDisabled,
  };
};

export default useHome;
