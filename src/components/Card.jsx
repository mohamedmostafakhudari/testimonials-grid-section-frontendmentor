import React from "react";
import classNames from "classnames";
export default function Card({ name, title, text, imgSrc, index, array }) {
  const isFirst = index == 0;
  const isSecond = index == 1;
  const isFourth = index == 3;
  const isEven = (index + 1) % 2 == 0;
  const isOdd = (index + 1) % 2 !== 0;
  const isLast = index === array.length - 1;
  const className = classNames(
    {
      "bg-moderateViolet relative text-lightGray md:col-start-1 md:col-span-2":
        isFirst,
    },
    { "bg-veryDarkGrayishBlue text-white": isSecond },
    { "md:col-start-2 md:col-span-2": isFourth },
    { "bg-white text-veryDarkBlackishBlue": isOdd && !isFirst },
    { "bg-veryDarkBlackishBlue text-lightGray": isEven && !isSecond },
    { "md:col-start-4 md:row-start-1 md:row-span-2": isLast },
    "p-8 rounded-lg shadow-lg shadow-black/20"
  );
  return (
    <div className={className}>
      <div className={`absolute right-6 -top-[1px] ${!isFirst && "hidden"}`}>
        <img
          src="./assets/images/bg-pattern-quotation.svg"
          alt="quotation-mark"
        />
      </div>
      <div className="relative space-y-6">
        <div className="flex flex-wrap">
          <div className="relative w-14 h-14 rounded-full">
            <div className="absolute z-10">
              <img
                src={`./assets/images/${imgSrc}`}
                alt="profileImage"
                className="rounded-full"
              />
            </div>
            <div className="absolute -inset-1 rounded-full bg-white opacity-30"></div>
          </div>
          <div className="ml-8">
            <p className="text-lg">{name}</p>
            <p className="opacity-50 text-[14px]">Verified Graduate</p>
          </div>
        </div>
        <div className="text-3xl font-semibold">{title}</div>
        <p className="opacity-70 text-base font-medium">" {text} "</p>
      </div>
    </div>
  );
}
