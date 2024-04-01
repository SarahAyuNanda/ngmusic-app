import Currency from "assets/images/currency-dollar.svg";

const Card = (props) => {
  return (
    <div className="flex w-[310px] items-center justify-between gap-3 rounded-[10px] bg-white px-[10px] py-3 shadow-main">
      <img
        src={props.data.trackViewUrl}
        alt=""
        height={100}
        width={100}
        className="rounded-[10px]"
      />

      <div className="flex flex-1 flex-col items-start justify-start">
        <p className="mb-[5px] font-roboto text-xs font-medium text-dark">
          {props.data.artistName}
        </p>
        <p className="mb-[27px] font-roboto text-sm font-bold text-dark">
          {props.data.trackName}
        </p>
        <div className="flex w-full items-center justify-between">
          <p className="rounded-full bg-success px-[13px] py-[5px] font-roboto text-[10px] font-medium text-white">
            {props.data.primaryGenreName}
          </p>

          <div className="flex gap-[6px]">
            <img src={Currency} alt="currency" width={16} height={16} />
            <p className="font-roboto text-xs font-bold text-warning">
              {props.data.trackPrice}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
