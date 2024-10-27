import style from "./FilterRoomsContainer.module.css";
import CardRoom from "../common/CardRoom/CardRoom";

const FilterRoomsContainer = () => {
  return (
    <article className={` ${style.filter_container} `}>
      <CardRoom />
    </article>
  );
};
export default FilterRoomsContainer;
