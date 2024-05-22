import { AuthContext } from "@/Provider/AuthProvider";
import UseAxios from "@/hooks/UseAxios";
import UseCart from "@/hooks/UseCart";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  const axiosSecure = UseAxios()
  const [, refetch] = UseCart()

  const handleAddToCard = food => {
    if (user && user.email) {
      //todo: send database
      console.log(food, user.email);
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price
      }
      axiosSecure.post('/carts', cartItem)
        .then(res => {
          console.log(res.data);
          if (res.data.insertedId) {

            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} -Added Properly`,
              showConfirmButton: false,
              timer: 1500
            });
            // refetch cart to update the cart
            refetch()
          }

        })
    }
    else {
      Swal.fire({
        title: "Are You Logged In?",
        text: "Please go to Login page",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, I will Log in!"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location } })
        }
      })
    }
  }

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img src={image} alt="Shoes" /></figure>
      <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">${price}</p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button onClick={handleAddToCard} className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;