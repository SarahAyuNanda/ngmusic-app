import NGMusic from "assets/images/logo.svg";

import useHome from "./index.controller";

const Home = () => {
  const { search, onChangeSearch, onSubmitSearch, isDisabled } = useHome();

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-br from-primary to-secondary px-[30px] py-[26px]">
      <section className="flex flex-1">
        <img src={NGMusic} width={72} height={"auto"} alt="loading" />
      </section>
      <section className="flex flex-col gap-[15px]">
        <input
          id="search"
          name="search"
          value={search}
          onChange={onChangeSearch}
          className="w-[280px] rounded-full bg-white py-[13px] text-center font-roboto text-xs font-medium text-text"
          type="text"
          placeholder="Artist / Album / Title"
        />
        <button
          className="w-[280px] rounded-full bg-white/20 py-[13px] font-roboto text-sm font-medium text-white"
          onClick={onSubmitSearch}
          disabled={isDisabled}
        >
          Search
        </button>
      </section>
    </main>
  );
};

export default Home;
