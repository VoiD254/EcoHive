import React, { useState, useMemo } from 'react';

const products = [
    {
      id: 1,
      Category: "Electronics",
      Company: "Apple",
      Product: "iPhone 13",
      Description: "The latest iPhone with advanced features",
      Price: 999,
      TimeStamp: "2023-09-05",
      CustomDetails: [
        {
          Date: "2023-09-05",
          Customer: "John Doe",
          Quantity: 2,
          TotalAmount: 1998,
        },
        {
          Date: "2023-09-04",
          Customer: "Jane Smith",
          Quantity: 1,
          TotalAmount: 999,
        },
      ],
    },
    {
      id: 2,
      Category: "Clothing",
      Company: "Nike",
      Product: "Running Shoes",
      Description: "High-quality running shoes for athletes",
      Price: 89,
      TimeStamp: "2023-09-03",
      CustomDetails: [
        {
          Date: "2023-09-05",
          Customer: "Alice Johnson",
          Quantity: 3,
          TotalAmount: 267,
        },
        {
          Date: "2023-09-03",
          Customer: "Bob Brown",
          Quantity: 2,
          TotalAmount: 178,
        },
      ],
    },
    {
      id: 3,
      Category: "Books",
      Company: "Penguin Books",
      Product: "The Great Gatsby",
      Description: "Classic novel by F. Scott Fitzgerald",
      Price: 12,
      TimeStamp: "2023-09-02",
      CustomDetails: [
        {
          Date: "2023-09-02",
          Customer: "Ella Williams",
          Quantity: 5,
          TotalAmount: 60,
        },
      ],
    },
    {
      id: 4,
      Category: "Home Appliances",
      Company: "Samsung",
      Product: "Smart Refrigerator",
      Description: "Refrigerator with smart features and spacious design",
      Price: 14,
      TimeStamp: "2023-09-05",
      CustomDetails: [
        {
          Date: "2023-09-05",
          Customer: "David Wilson",
          Quantity: 1,
          TotalAmount: 14,
        },
      ],
    },
    {
      id: 5,
      Category: "Electronics",
      Company: "Sony",
      Product: "PlayStation 5",
      Description: "Next-gen gaming console",
      Price: 499,
      TimeStamp: "2023-09-06",
      CustomDetails: [
        {
          Date: "2023-09-06",
          Customer: "Sarah Davis",
          Quantity: 1,
          TotalAmount: 499,
        },
      ],
    },
    {
      id: 6,
      Category: "Clothing",
      Company: "Adidas",
      Product: "Sneakers",
      Description: "Stylish sneakers for everyday wear",
      Price: 75,
      TimeStamp: "2023-09-07",
      CustomDetails: [
        {
          Date: "2023-09-07",
          Customer: "Michael Lee",
          Quantity: 2,
          TotalAmount: 150,
        },
      ],
    },
    {
      id: 7,
      Category: "Electronics",
      Company: "Samsung",
      Product: "4K Smart TV",
      Description: "High-quality 4K television with smart features",
      Price: 799,
      TimeStamp: "2023-09-08",
      CustomDetails: [
        {
          Date: "2023-09-08",
          Customer: "Sophia Anderson",
          Quantity: 1,
          TotalAmount: 799,
        },
      ],
    },
    {
      id: 8,
      Category: "Home Appliances",
      Company: "LG",
      Product: "Front-Load Washer",
      Description: "Efficient front-load washing machine",
      Price: 599,
      TimeStamp: "2023-09-09",
      CustomDetails: [
        {
          Date: "2023-09-09",
          Customer: "William Taylor",
          Quantity: 1,
          TotalAmount: 599,
        },
      ],
    },
    {
      id: 9,
      Category: "Books",
      Company: "HarperCollins",
      Product: "To Kill a Mockingbird",
      Description: "Classic novel by Harper Lee",
      Price: 15,
      TimeStamp: "2023-09-10",
      CustomDetails: [
        {
          Date: "2023-09-10",
          Customer: "Olivia Martinez",
          Quantity: 3,
          TotalAmount: 45,
        },
      ],
    },
    {
      id: 10,
      Category: "Clothing",
      Company: "H&M",
      Product: "Denim Jeans",
      Description: "Stylish denim jeans for men and women",
      Price: 49,
      TimeStamp: "2023-09-11",
      CustomDetails: [
        {
          Date: "2023-09-11",
          Customer: "James Johnson",
          Quantity: 2,
          TotalAmount: 98,
        },
      ],
    },
    {
      id: 11,
      Category: "Electronics",
      Company: "Sony",
      Product: "Wireless Headphones",
      Description: "High-quality wireless headphones with noise cancellation",
      Price: 249,
      TimeStamp: "2023-09-12",
      CustomDetails: [
        {
          Date: "2023-09-12",
          Customer: "Liam Jackson",
          Quantity: 1,
          TotalAmount: 249,
        },
      ],
    },
    {
      id: 12,
      Category: "Home Appliances",
      Company: "KitchenAid",
      Product: "Stand Mixer",
      Description: "Powerful stand mixer for baking and cooking",
      Price: 299,
      TimeStamp: "2023-09-13",
      CustomDetails: [
        {
          Date: "2023-09-13",
          Customer: "Ava Harris",
          Quantity: 1,
          TotalAmount: 299,
        },
      ],
    },
    {
      id: 13,
      Category: "Books",
      Company: "Random House",
      Product: "The Catcher in the Rye",
      Description: "Classic novel by J.D. Salinger",
      Price: 10,
      TimeStamp: "2023-09-14",
      CustomDetails: [
        {
          Date: "2023-09-14",
          Customer: "Noah Martinez",
          Quantity: 4,
          TotalAmount: 40,
        },
      ],
    },
    {
      id: 14,
      Category: "Clothing",
      Company: "Zara",
      Product: "Leather Jacket",
      Description: "Stylish leather jacket for men and women",
      Price: 129,
      TimeStamp: "2023-09-15",
      CustomDetails: [
        {
          Date: "2023-09-15",
          Customer: "Sophia Wilson",
          Quantity: 2,
          TotalAmount: 258,
        },
      ],
    },
    {
      id: 15,
      Category: "Electronics",
      Company: "Bose",
      Product: "Bluetooth Speaker",
      Description: "Portable Bluetooth speaker with excellent sound quality",
      Price: 129,
      TimeStamp: "2023-09-16",
      CustomDetails: [
        {
          Date: "2023-09-16",
          Customer: "Mason Davis",
          Quantity: 3,
          TotalAmount: 387,
        },
      ],
    },
    {
      id: 16,
      Category: "Books",
      Company: "Simon & Schuster",
      Product: "1984",
      Description: "Dystopian novel by George Orwell",
      Price: 14,
      TimeStamp: "2023-09-18",
      CustomDetails: [
        {
          Date: "2023-09-18",
          Customer: "Lucas Taylor",
          Quantity: 5,
          TotalAmount: 70,
        },
      ],
    },
    {
      id: 17,
      Category: "Clothing",
      Company: "Forever 21",
      Product: "Summer Dress",
      Description: "Casual summer dress for women",
      Price: 29,
      TimeStamp: "2023-09-19",
      CustomDetails: [
        {
          Date: "2023-09-19",
          Customer: "Aiden Brown",
          Quantity: 4,
          TotalAmount: 116,
        },
      ],
    },
    {
      id: 18,
      Category: "Electronics",
      Company: "Microsoft",
      Product: "Xbox Series X",
      Description: "Next-gen gaming console by Microsoft",
      Price: 499,
      TimeStamp: "2023-09-20",
      CustomDetails: [
        {
          Date: "2023-09-20",
          Customer: "Luna Garcia",
          Quantity: 1,
          TotalAmount: 499,
        },
      ],
    },
    {
      id: 19,
      Category: "Home Appliances",
      Company: "Cuisinart",
      Product: "Coffee Maker",
      Description: "Programmable coffee maker for coffee lovers",
      Price: 69,
      TimeStamp: "2023-09-21",
      CustomDetails: [
        {
          Date: "2023-09-21",
          Customer: "Eli Johnson",
          Quantity: 2,
          TotalAmount: 138,
        },
      ],
    },
  ];

const Table = () => {
  const [productList] = useState(products);
  const [rowsLimit] = useState(5);
  const [rowsToShow, setRowsToShow] = useState(productList.slice(0, rowsLimit));
  const [customPagination, setCustomPagination] = useState([]);
  const [totalPage] = useState(Math.ceil(productList?.length / rowsLimit));
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    const startIndex = rowsLimit * (currentPage + 1);
    const endIndex = startIndex + rowsLimit;
    const newArray = products.slice(startIndex, endIndex);
    setRowsToShow(newArray);
    setCurrentPage(currentPage + 1);
  };

  const changePage = (value) => {
    const startIndex = value * rowsLimit;
    const endIndex = startIndex + rowsLimit;
    const newArray = products.slice(startIndex, endIndex);
    setRowsToShow(newArray);
    setCurrentPage(value);
  };

  const previousPage = () => {
    const startIndex = (currentPage - 1) * rowsLimit;
    const endIndex = startIndex + rowsLimit;
    const newArray = products.slice(startIndex, endIndex);
    setRowsToShow(newArray);
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else {
      setCurrentPage(0);
    }
  };

  useMemo(() => {
    setCustomPagination(
      Array(Math.ceil(productList?.length / rowsLimit)).fill(null)
    );
  }, []);

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
                <th className="py-3 px-2 text-gray-700 font-bold">Time-Stamp</th>
              </tr>
            </thead>
            <tbody>
              {rowsToShow.map((data, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="py-2 px-2 border-t">{data.id}</td>
                  <td className="py-2 px-2 border-t">{data.Category}</td>
                  <td className="py-2 px-2 border-t">{data.Company}</td>
                  <td className="py-2 px-2 border-t">{data.Product}</td>
                  <td className="py-2 px-2 border-t">{data.Description}</td>
                  <td className="py-2 px-2 border-t">${data.Price}</td>
                  <td className="py-2 px-2 border-t">{data.TimeStamp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="w-full flex justify-between items-center mt-4">
          <div className="text-lg">
            Showing {currentPage === 0 ? 1 : currentPage * rowsLimit + 1} to{' '}
            {currentPage === totalPage - 1 ? productList.length : (currentPage + 1) * rowsLimit} of {productList.length} entries
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

export default Table;
