import { useRef } from "react";
import { ReqresUserResponse, User } from "../interfaces/API";

export default function UserCarousel({
  users,
}: {
  users: ReqresUserResponse[];
}) {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    const container = carouselRef.current;
    if (!container) return;
    const scrollAmount = container.clientWidth / 1.2;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="carousel carousel-center w-full max-w-4xl space-x-4 p-4 rounded-box bg-white overflow-x-auto scroll-smooth">
      {users?.data?.slice(0, 6).map((user) => (
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
    </div>
  );
}
