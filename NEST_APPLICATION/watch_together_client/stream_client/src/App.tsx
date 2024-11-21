import React, { useState } from "react";
import { PlusIcon } from "lucide-react";

interface Room {
  id: number;
  name: string;
  participants: number;
  thumbnailUrl: string;
}

const ChatRoomsPage: React.FC = () => {
  const [rooms, setRooms] = useState<Room[]>([
    {
      id: 1,
      name: "Movie Night",
      participants: 4,
      thumbnailUrl: "/api/placeholder/320/180",
    },
    {
      id: 2,
      name: "Casual Hangout",
      participants: 7,
      thumbnailUrl: "/api/placeholder/320/180",
    },
    {
      id: 3,
      name: "Study Group",
      participants: 12,
      thumbnailUrl: "/api/placeholder/320/180",
    },
    {
      id: 4,
      name: "Gaming Session",
      participants: 6,
      thumbnailUrl: "/api/placeholder/320/180",
    },
  ]);

  const handleCreateRoom = () => {
    const newRoom: Room = {
      id: rooms.length + 1,
      name: `New Chat Room ${rooms.length + 1}`,
      participants: 0,
      thumbnailUrl: "/api/placeholder/320/180",
    };
    setRooms([...rooms, newRoom]);
  };

  const handleJoinRoom = (roomId: number) => {
    setRooms(
      rooms.map((room) =>
        room.id === roomId
          ? { ...room, participants: room.participants + 1 }
          : room
      )
    );
  };

  return (
    <>
      <div className="h-screen bg-gray-200 ">
        <div className="bg-white/50 w-full mr-6 h-50 rounded-full ">SDFGHJ</div>
        <div className="flex">
          <div className="w-64  p-4 ">
            <button
              onClick={handleCreateRoom}
              className="w-full flex items-center justify-center bg-blue-500 text-white p-3 rounded-xl hover:bg-blue-600 transition"
            >
              <PlusIcon className="mr-2 bg-blue-600 rounded-full" />
              Create Room
            </button>
            <button
              onClick={handleCreateRoom}
              className="w-full flex items-center justify-center bg-blue-500 text-white p-3 rounded-xl hover:bg-blue-600 transition"
            >
              <PlusIcon className="mr-2 bg-blue-600 rounded-full " />
              Send Request
            </button>
          </div>
          <div className="flex-1 p-6">
            <div className="flex mb-6 gap-10">
              <div className="flex-grow pr-4 rounded-lg bg-white p-2 mx-2 w-1/3">
                <h1 className="text-2xl font-bold text-gray-800">
                  Welcome to Your Chat Room Platform
                </h1>
                <p className="text-gray-600">
                  Join, create, and enjoy movies with friends.
                </p>
              </div>
              <div className="w-1/3  flex py-4 items-center justify-center  rounded-lg bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-16 h-16 text-gray-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m-17.25 0h7.5c.621 0 1.125-.504 1.125-1.125m0 0v-1.5c0-.621.504-1.125 1.125-1.125m0 0h7.5"
                  />
                </svg>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {rooms.map((room) => (
                <div
                  key={room.id}
                  className="border p-4 rounded-lg shadow-sm hover:shadow-md transition bg-white"
                >
                  <div className="relative">
                    <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-sm">
                      <PlusIcon className="w-4 h-4" />
                    </div>
                    <img
                      src={room.thumbnailUrl}
                      alt={room.name}
                      className="w-full h-32 object-cover rounded-t-lg"
                    />
                  </div>
                  <h2 className="text-lg font-semibold mt-2">{room.name}</h2>
                  <p className="text-gray-600">
                    Participants: {room.participants}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatRoomsPage;
