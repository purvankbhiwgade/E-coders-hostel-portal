import React from "react";
import Modal from "./Modal";

const TableRow = ({ incomingData, renderModal }) => {
  const handleApprove = () => {
    // handle approve logic
  };

  const handleDeny = () => {
    // handle deny logic
  };

  return (
    <tr className="bg-white">
      <td className="px-2 md:px-6 py-2 md:py-4 whitespace-no-wrap border-b border-gray-200 text-left">
        {incomingData.name}
      </td>
      <td className="px-2 md:px-6 py-2 md:py-4 whitespace-no-wrap border-b border-gray-200 text-left ">
        <span className="font-bold ">{incomingData.subject}</span> -{" "}
        {incomingData.description.length > 15
          ? incomingData.description.slice(0, 15)
          : incomingData.description}
      </td>
      <td className="px-2 md:px-6 py-2 md:py-4 whitespace-no-wrap border-b border-gray-200 text-left w-50">
        <button
          className="text-gray-500 hover:text-gray-600 pr-4 text-light"
          onClick={() => {
            console.log(incomingData);
            renderModal(incomingData);
          }}
        >
          View More
        </button>
      </td>
      <td className="px-2 md:px-6 py-2 md:py-4 whitespace-no-wrap text-left border-b border-gray-200 text-sm leading-5 font-medium ">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <button
            className="text-green-500 hover:text-green-600"
            onClick={handleApprove}
          >
            Approve
          </button>
          <button
            className="text-red-500 hover:text-red-600 sm:ml-4"
            onClick={handleDeny}
          >
            Deny
          </button>
        </div>
      </td>
    </tr>
  );
};

const Table = () => {
  const data = [
    {
      id: 1,
      name: "Kshitija",
      subject: "Ayo, mz bucket koni chorli",
      description: "Working",
    },
    {
      id: 2,
      name: "damn,son",
      subject: "who stole your bucket",
      description: "Working",
    },
  ];
  console.log(data, "data");

  const [showModal, setShowModal] = React.useState(false);
  const [showData, setShowData] = React.useState({});

  const renderModal = (incomingData) => {
    setShowData(incomingData);
    console.log("setting show data");
    console.log(incomingData);
  };

  React.useEffect(() => {
    if (showData !== undefined) {
      setShowModal(true);
      console.log("setting show modal");
      console.log(showData);
    }
  }, [showData]);

  const handleClose = () => {
    setShowData({});
    console.log("handling close");
    setShowModal(false);
  };

  return (
    <>
      <table className="container mx-auto md:w-3/5 divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-l-2">
              Name
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-l-2">
              Subject
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-l-2 w-50">
              Details
            </th>
            <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-l-2 border-r-2">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item) => {
            if (item !== undefined) {
              return (
                <TableRow
                  key={item.id}
                  incomingData={item}
                  renderModal={renderModal}
                />
              );
            }
          })}
        </tbody>
      </table>
      {showModal && <Modal data={showData} handleClose={handleClose} />}
    </>
  );
};

export default Table;
