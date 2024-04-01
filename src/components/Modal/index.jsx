const SearchModal = (props) => {
  return (
    <section className="absolute z-10 flex min-h-screen w-full flex-col items-center justify-center gap-[31px] bg-modal">
      <p className="font-roboto text-xl font-bold text-white">Search</p>
      <div className="flex flex-col gap-[15px]">
        <input
          id="search"
          name="search"
          value={props.search}
          onChange={props.onChange}
          className="w-[280px] rounded-full bg-white py-[13px] text-center font-roboto text-xs font-medium text-text"
          type="text"
          placeholder="Artist / Album / Title"
        />
        <button
          className="w-[280px] rounded-full  bg-gradient-to-br from-primary to-secondary py-[13px] font-roboto text-sm font-medium text-white"
          onClick={props.onSubmit}
          disabled={props.disabled}
        >
          Search
        </button>
      </div>
    </section>
  );
};

export default SearchModal;
