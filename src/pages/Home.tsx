import Loader from "../components/Loader";
import { useFetchUserProfileQuery, useGetUsersQuery } from "../services/API";

function Home() {
  const { data, error, isLoading } = useFetchUserProfileQuery(2);
  const { data: users, isLoading: isUsersLoading } = useGetUsersQuery(1);

  if (isLoading || isUsersLoading)
    return (
      <div className="bg-white">
        <Loader />
      </div>
    );

  if (error) {
    console.error("API error:", error);
    return (
      <p className="text-red-500 text-center mt-10">Error fetching user</p>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-indigo-100 p-6 ">
      {/* MAIN USER CARD */}
      <div className="bg-white p-8 rounded-xl shadow-xl max-w-md w-full text-center">
        <img
          src={data?.data?.avatar}
          alt={data?.data?.first_name}
          className="w-24 h-24 rounded-full mx-auto mb-4"
        />
        <h2 className="text-2xl font-semibold mb-1">
          {data?.data?.first_name} {data?.data?.last_name}
        </h2>
        <p className="text-gray-500">{data?.data?.email}</p>
      </div>

      {/* <div className="carousel carousel-center w-full max-w-4xl space-x-4 p-4 rounded-box bg-white overflow-x-auto scroll-smooth">
        {users?.data?.slice(0, 20).map((user) => (
          <div key={user.id} className="carousel-item">
            <div className="flex flex-col items-center justify-center bg-base-100 rounded-box p-4 shadow-md w-48">
              <img
                src={user.avatar}
                alt={user.first_name}
                className="w-20 h-20 rounded-full mb-2"
              />
              <p className="font-semibold text-sm text-center">
                {user.first_name} {user.last_name}
              </p>
              <p className="text-xs text-gray-500 text-center">{user.email}</p>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default Home;
