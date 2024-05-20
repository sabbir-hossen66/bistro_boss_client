import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, img }) => {
  return (
    <div>
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
      <Link to={'/order'}>
        <button className="bg-yellow-400 p-4">Order Now</button>
      </Link>
    </div>
  );
};

export default MenuCategory;