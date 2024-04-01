import { useMutation } from "@tanstack/react-query";
import { useEffect, useMemo, useState } from "react";
import { getSearch } from "services/api";

const useDashboard = () => {
  const searchParam = localStorage.getItem("search") ?? "";
  const getResult = localStorage.getItem("result");
  const parsedResult = JSON.parse(getResult) ?? [];

  const [result, setResult] = useState(parsedResult);
  const [partialResult, setPartialResult] = useState([]);
  const [countPartial, setCountPartial] = useState(1);
  const [totalPartial, setTotalPartial] = useState(0);
  const [isSearch, setIsSearch] = useState(false);
  const [search, setSearch] = useState(searchParam);

  const onChangeSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
  };

  const onSubmitSearch = () => {
    setIsSearch(false);
    localStorage.setItem("search", search);
    searchMutation.mutate();
  };

  const searchMutation = useMutation({
    mutationFn: () => getSearch(searchParam),
    onError: (err) => {
      console.log(err);
    },
    onSuccess: (res) => {
      const getCount = res.data.resultCount;
      const getResult = res.data.results;
      const slicing = getResult.slice(0, 4);

      setResult(getResult);
      setPartialResult(slicing);
      setTotalPartial(Math.ceil(getCount / 4));

      localStorage.setItem("result", JSON.stringify(getResult));
    },
  });

  const onLoadMore = () => {
    const currentCount = countPartial + 1;
    const getPartialResult = result.slice(0, 4 * currentCount);
    setCountPartial(currentCount);
    setPartialResult(getPartialResult);
  };

  const onHandleSearch = () => {
    setIsSearch((prev) => !prev);
  };

  useEffect(() => {
    searchMutation.mutate();

    return () => {
      searchMutation.reset();
      localStorage.clear();
    };
  }, []);

  const isDisabled = useMemo(() => {
    return !search;
  }, [search]);

  const isHideLoad = useMemo(() => {
    return countPartial === totalPartial;
  }, [totalPartial, countPartial]);

  return {
    partialResult,
    isSearch,
    search,

    onChangeSearch,
    onSubmitSearch,
    onLoadMore,
    onHandleSearch,

    isDisabled,
    isHideLoad,
  };
};

export default useDashboard;
