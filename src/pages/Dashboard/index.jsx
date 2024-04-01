import Menu from "assets/images/menu.svg";
import NgMusic from "assets/images/ngmusic.svg";
import Search from "assets/images/search.svg";
import Card from "components/Card";
import SearchModal from "components/Modal";

import useDashboard from "./index.controller";

const Dashboard = () => {
  const {
    partialResult,
    isSearch,
    search,
    onChangeSearch,
    onSubmitSearch,
    onLoadMore,
    onHandleSearch,
    isDisabled,
    isHideLoad,
  } = useDashboard();

  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-start bg-white">
      <header className="flex h-[60px] w-full items-center justify-between bg-gradient-to-br from-primary to-secondary px-[19px] py-[15px]">
        <button>
          <img src={Menu} alt="menu" width={14} height={14} />
        </button>
        <img src={NgMusic} alt="menu" width={72} height={"auto"} />
        <button onClick={onHandleSearch}>
          <img src={Search} alt="menu" width={14} height={14} />
        </button>
      </header>

      <section className="flex flex-col items-center justify-start gap-[38px] px-[15px] pb-[28px] pt-[42px]">
        <div className="flex w-full items-center justify-center gap-[10px]">
          <p className="font-roboto text-sm font-normal text-dark">
            Search result for :{" "}
          </p>
          <p className="font-roboto text-lg font-bold text-primary">{search}</p>
        </div>
        <div className="flex flex-col items-center justify-start gap-5">
          {partialResult.map((item) => {
            return <Card key={item.trackId} data={item} />;
          })}
          {isHideLoad && null}
          {!isHideLoad && (
            <button
              onClick={onLoadMore}
              className="w-[120px] rounded-full bg-gray py-[10px] font-roboto text-xs font-medium text-text"
            >
              Load More
            </button>
          )}
        </div>
      </section>

      {isSearch && (
        <SearchModal
          onClose={onHandleSearch}
          search={search}
          onChange={onChangeSearch}
          onSubmit={onSubmitSearch}
          disabled={isDisabled}
        />
      )}
      {!isSearch && null}
    </main>
  );
};

export default Dashboard;
