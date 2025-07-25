import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div className="p-2 text-xl font-semibold">PB Term Plan for Salaried</div>
      <div className="grid grid-cols-1 gap-2 ">
        <Link
          href="./Basics of Insurance.pptx"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold social-link text-cyan-500 hover:text-cyan-700 duration-200"
        >
          Basics of Insurance
        </Link>
        <Link
          href="./Basics of Term Insurance.pptx"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold social-link text-cyan-500 hover:text-cyan-700 duration-200"
        >
          Basics of Term Insurance
        </Link>
        <Link
          href="./Axis_Max_STPP.pptx"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold social-link text-cyan-500 hover:text-cyan-700 duration-200"
        >
          Axis Max STPP
        </Link>
        <Link
          href="./ICICI IPS Plus (2).pptx"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold social-link text-cyan-500 hover:text-cyan-700 duration-200"
        >
          ICICI IPS Plus
        </Link>
        <Link
          href="./Bajaj eTouch II (1).pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold social-link text-cyan-500 hover:text-cyan-700 duration-200"
        >
          Bajaj eTouch II
        </Link>
        <Link
          href="./Bajaj iSecure II (1) (1).pptx"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold social-link text-cyan-500 hover:text-cyan-700 duration-200"
        >
          Bajaj iSecure II
        </Link>
        <Link
          href="./PNB SJB (1) (1).pptx"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold social-link text-cyan-500 hover:text-cyan-700 duration-200"
        >
          PNB SJB
        </Link>
      </div>
    </>
  );
};

export default page;
