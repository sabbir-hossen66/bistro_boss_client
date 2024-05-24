import UseAxios from "@/hooks/UseAxios";
import UseCart from "@/hooks/UseCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";


const Cart = () => {
  const [cart, refetch] = UseCart();
  const totalPrice = cart.reduce((total, currentValue) => total + currentValue.price, 0)
  const axiosSecure = UseAxios()


  const handleDelete = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        // adding axiosSecure
        axiosSecure.delete(`/carts/${id}`)
          .then(res => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              refetch()
            }
          })
      }
    });
  }

  return (
    <div className="w-full">
      <h2 classNameName="text-5xl">this is cart {cart.length}</h2>
      <h2 classNameName="text-5xl">this is cart {totalPrice}</h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>
                  #
                </th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                cart.map((item, index) => <tr key={item._id}>
                  <th>
                    {index + 1}
                  </th>
                  <td>
                    <div className="flex items-center gap-3">

                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={item.image} alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <></>

                      </div>
                    </div>
                  </td>
                  <id>

                    {item.name}
                  </id>
                  <td>{item.price}</td>
                  <th>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="hover:text-red-500 btn-xs">
                      <FaTrashAlt></FaTrashAlt>
                    </button>
                  </th>
                </tr>)
              }



            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;