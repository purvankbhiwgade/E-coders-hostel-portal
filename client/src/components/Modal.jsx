import React from "react";

export default function Modal({ data, handleClose }) {
  console.log("inside Modal");
  console.log(data);
  return (
    <>
      {data.name !== undefined ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 pl-2 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-xl text-gray-500">{data.name}</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => handleClose()}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-2 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    {data.subject}
                  </p>
                </div>
                <div className="flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    {data.description}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-start p-2 pl-0 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-3 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => handleClose()}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
