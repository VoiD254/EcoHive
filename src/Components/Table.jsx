import { useState, useEffect } from "react";
import { useFirebase } from "../context/firebase";

export const Table = () => {
  const { transactionList, currentUser } = useFirebase();
  const [rowsLimit] = useState(5);
  const [rowsToShow, setRowsToShow] = useState([]);
  const [customPagination, setCustomPagination] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    if (transactionList.length && currentUser) {
      const userTransactions = transactionList.filter(transaction =>
        transaction.sender === currentUser.email || transaction.receiver === currentUser.email
      );
      setRowsToShow(userTransactions.slice(0, rowsLimit));
      setTotalPage(Math.ceil(userTransactions.length / rowsLimit));
      setCustomPagination(Array(Math.ceil(userTransactions.length / rowsLimit)).fill(null));
    }
  }, [transactionList, rowsLimit, currentUser]);

  const nextPage = () => {
    const startIndex = rowsLimit * (currentPage + 1);
    const endIndex = startIndex + rowsLimit;
    const newArray = transactionList.slice(startIndex, endIndex);
    setRowsToShow(newArray);
    setCurrentPage(currentPage + 1);
  };

  const changePage = (value) => {
    const startIndex = value * rowsLimit;
    const endIndex = startIndex + rowsLimit;
    const newArray = transactionList.slice(startIndex, endIndex);
    setRowsToShow(newArray);
    setCurrentPage(value);
  };

  const previousPage = () => {
    const startIndex = (currentPage - 1) * rowsLimit;
    const endIndex = startIndex + rowsLimit;
    const newArray = transactionList.slice(startIndex, endIndex);
    setRowsToShow(newArray);
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else {
      setCurrentPage(0);
    }
  };

  return (
    <div className="w-full overflow-x-auto">
      <div className="w-full max-w-7xl mx-auto px-4">
        <h1 className="text-2xl text-black font-medium">Transaction History</h1>
        <div className="w-full mt-4">
          <table className="table-auto w-full text-left border">
            <thead className="rounded-lg text-base text-white font-semibold">
              <tr className="bg-gray-100">
                <th className="py-3 px-2 text-gray-700 font-bold">Sr. No</th>
                <th className="py-3 px-2 text-gray-700 font-bold">Sender</th>
                <th className="py-3 px-2 text-gray-700 font-bold">Sender's Entity</th>
                <th className="py-3 px-2 text-gray-700 font-bold">Receiver</th>
                <th className="py-3 px-2 text-gray-700 font-bold">Receiver's Entity</th>
                <th className="py-3 px-2 text-gray-700 font-bold">Credits</th>
                <th className="py-3 px-2 text-gray-700 font-bold">Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {rowsToShow.map((data, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="py-2 px-2 border-t">{currentPage * rowsLimit + index + 1}</td>
                  <td className="py-2 px-2 border-t">{data.sender}</td>
                  <td className="py-2 px-2 border-t">{data.senderEntity}</td>
                  <td className="py-2 px-2 border-t">{data.receiver}</td>
                  <td className="py-2 px-2 border-t">{data.receiverEntity}</td>
                  <td className="py-2 px-2 border-t">{data.creditsTransferred}</td>
                  <td className="py-2 px-2 border-t">{data.timestamp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="w-full flex justify-between items-center mt-4">
          <div className="text-lg">
            Showing {currentPage === 0 ? 1 : currentPage * rowsLimit + 1} to{' '}
            {currentPage === totalPage - 1 ? transactionList.length : (currentPage + 1) * rowsLimit} of {transactionList.length} entries
          </div>
          <div className="flex">
            <ul className="flex items-center gap-2">
              <li
                className={`p-2 rounded border ${currentPage === 0 ? 'bg-gray-300 cursor-not-allowed' : 'cursor-pointer'}`}
                onClick={previousPage}
              >
                <img src="https://www.tailwindtap.com/assets/travelagency-admin/leftarrow.svg" alt="Previous" />
              </li>
              {customPagination.map((_, index) => (
                <li
                  key={index}
                  className={`p-2 rounded border cursor-pointer ${currentPage === index ? 'bg-blue-500 text-white' : 'bg-white'}`}
                  onClick={() => changePage(index)}
                >
                  {index + 1}
                </li>
              ))}
              <li
                className={`p-2 rounded border ${currentPage === totalPage - 1 ? 'bg-gray-300 cursor-not-allowed' : 'cursor-pointer'}`}
                onClick={nextPage}
              >
                <img src="https://www.tailwindtap.com/assets/travelagency-admin/rightarrow.svg" alt="Next" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
