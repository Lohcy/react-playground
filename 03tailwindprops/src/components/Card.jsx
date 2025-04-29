import React from "react";
function Card({userName, btnText="visit me"}) {
  console.log("userName: ", userName)
  console.log("btnText: ", btnText)
    return (
        <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100 mb-4">
        {/* <img
          src="https://images.pexels.com/photos/31774731/pexels-photo-31774731/free-photo-of-bird-perched-on-blossoming-branch-in-springtime.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
        /> */}
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">{userName}</h2>
            <p className="text-gray-400">
              Learning is very interesting.... now. :)
            </p>
          </div>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
          >
            {btnText}
          </button>
        </div>
      </div>
    )
}

export default Card;