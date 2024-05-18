import Cover from '../../Shared/Cover/Cover';
import menuBg from '../../assets/menu/pizza-bg.jpg'
import UseMenu from '../../hooks/UseMenu';
import MenuCategory from '../MenuCategory/MenuCategory';
import PopularMenu from '../PopularMenu/PopularMenu';
import oneImg from '../../assets/menu/dessert-bg.jpeg'
import SectionTitle from '../SectionTitle/SectionTitle';

const Menu = () => {
  const [menu] = UseMenu()
  const dessert = menu.filter(item => item.category === 'dessert')
  const soup = menu.filter(item => item.category === 'soup')
  const salad = menu.filter(item => item.category === 'salad')
  const pizza = menu.filter(item => item.category === 'pizza')

  return (
    <div>

      <Cover
        img={menuBg}
        title={'some where'}
      ></Cover>
      <PopularMenu></PopularMenu>

      <SectionTitle
        subHeading={'do notmiss'}
        heading={'kella fate'}
      ></SectionTitle>
      <MenuCategory
        items={pizza}
        img={oneImg}
      ></MenuCategory>
    </div>
  );
};

export default Menu;