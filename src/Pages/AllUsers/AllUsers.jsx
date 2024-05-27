import UseAxios from "@/hooks/UseAxios";
import { useQuery } from "@tanstack/react-query";


const AllUsers = () => {
  const axiosSecure = UseAxios()
  const { data: users = [] } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get('/users');
      return res.data;
    }
  })
  return (
    <div>
      <div className="flex justify-evenly my-4">
        <h2 className="text-3xl ">This is All Users Page:</h2>
        <h2 className="text-3xl">Total Users:{users.length}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          {/* head */}
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {
              users.map(user =>
                <tr key={user._id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Cy Ganderton</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Quality Control Specialist</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Blue</td>

                </tr>
              )}

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;