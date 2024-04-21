import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/tokenSlice";

//
export function Home() {
  const users = useSelector((state) => state.users.value);

  const token = useSelector((state) => state.token.value);
  const dispatch = useDispatch();
  function handleLogout() {
    dispatch(remove());
  }

  return (
    <div className="w-[420px] mx-auto h-[200px] bg-white flex justify-center flex-col mt-40 rounded-[10px] dark:bg-[#181818]">
      <div className="flex justify-center font-[600] text-3xl dark:text-white">
        Welcome - "
        {users.map((user, index) => {
          return (
            <span key={index} className="italic text-3xl text-[#939191]">
              {user.name}
            </span>
          );
        })}
        "
      </div>

      <button className="text-lg mt-9 dark:text-white" onClick={handleLogout}>
        Log out
      </button>
    </div>
  );
}
