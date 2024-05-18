import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, img }) => {
  return (
    <>
      {<Cover img={img}></Cover>}
      <div className="grid md:grid-cols-2 gap-10">

        {
          items.map(item => <MenuItem
            key={item._id}
            item={item}
            img={img}
          ></MenuItem>)
        }
      </div>
    </>
  );
};

export default MenuCategory;