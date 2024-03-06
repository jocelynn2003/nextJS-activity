import Image from "next/image";
import { useState } from "react";
import Button from "./Button";
import Link from "next/link";

type CardProps = {
  slug: string;
  name: string;
  description: string;
  image: string;
  price: string;
  rate: string | number;
  onClick?: () => void;
};

export const Card = ({
  name,
  description,
  image,
  price,
  rate,
  slug,
}: CardProps) => {
  const [likeCount, strikeCount] = useState(0);
  const handleLikeCount = () => strikeCount(likeCount + 1);
  const handleDislikeCount = () => {
    if (likeCount !== 0) strikeCount(likeCount - 1);
  };
  return (
    <div className="flex flex-col justify-center items-center shadow-inner outline-2 group">
      <Link href={`/products/${slug}`}>
        <div className="px-4 border-gray-500 rounded border-[2px] ">
          <p>
            <svg
              width="9"
              height="9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block   h-[9px] w-[9px]"
            >
              <path
                d="M4.69 7.501l2.181 1.44c.281.184.627-.09.545-.428l-.632-2.582a.406.406 0 01.126-.395L8.866 3.84c.255-.22.125-.666-.208-.688L6.105 2.98a.35.35 0 01-.193-.073.372.372 0 01-.123-.17L4.837.246a.372.372 0 00-.131-.178.35.35 0 00-.412 0 .372.372 0 00-.131.178L3.21 2.738a.372.372 0 01-.123.17.35.35 0 01-.193.073l-2.553.17c-.333.023-.463.468-.208.689L2.09 5.536a.406.406 0 01.125.396l-.584 2.392c-.1.405.316.734.65.513L4.31 7.501a.345.345 0 01.38 0z"
                fill="#F7B543"
              ></path>
            </svg>
            {rate}
          </p>
          <div className="overflow-hidden">
            <Image
              className="hover:scale-125 ease-in-out duration-300 bg-transparent"
              alt=""
              width={200}
              height={200}
              src={image}
            />
          </div>
          <p className="italic hover:not-italic"> {name}</p>
          <p className="italic hover:not-italic"> {description}</p>
          <p className="italic hover:not-italic">
            {""}
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="inline-block fill-current h-4 w-4"
            >
              <path
                clip-rule="evenodd"
                d="M2.514 5.76a.27.27 0 0 1 .19-.08h18.462a.27.27 0 0 1 .27.27v2.385a.267.267 0 0 1-.215.263 3.578 3.578 0 0 0 0 7.011.268.268 0 0 1 .215.263v2.386a.27.27 0 0 1-.27.269H2.705a.27.27 0 0 1-.27-.27v-2.385a.268.268 0 0 1 .215-.263 3.578 3.578 0 0 0 0-7.01.268.268 0 0 1-.214-.263V5.95a.27.27 0 0 1 .078-.19Zm.19-1.08a1.27 1.27 0 0 0-1.268 1.27v2.385A1.268 1.268 0 0 0 2.45 9.578a2.578 2.578 0 0 1 0 5.051 1.268 1.268 0 0 0-1.015 1.243v2.386a1.27 1.27 0 0 0 1.269 1.269h18.461a1.27 1.27 0 0 0 1.27-1.27v-2.385a1.268 1.268 0 0 0-1.016-1.243 2.578 2.578 0 0 1 0-5.05 1.268 1.268 0 0 0 1.015-1.244V5.95a1.27 1.27 0 0 0-1.269-1.27H2.705Zm7.083 7.135c-.512 0-.948-.164-1.286-.502A1.685 1.685 0 0 1 8 10.071c0-.49.163-.905.501-1.243.338-.338.774-.501 1.286-.501.513 0 .938.163 1.276.501.337.338.512.752.512 1.243 0 .49-.175.905-.512 1.242-.338.338-.763.502-1.276.502Zm0-2.453c-.207 0-.381.066-.5.207-.23.262-.23.742 0 1.014.119.13.293.196.5.196.208 0 .371-.065.49-.196.252-.272.252-.752 0-1.014-.119-.141-.282-.207-.49-.207Zm4.425 6.769c-.512 0-.948-.164-1.286-.502a1.685 1.685 0 0 1-.5-1.242c0-.49.163-.905.5-1.243.338-.338.774-.5 1.287-.5.512 0 .937.162 1.275.5.338.338.512.752.512 1.243 0 .49-.174.905-.512 1.242-.338.338-.763.502-1.275.502Zm0-2.453c-.207 0-.38.066-.5.208-.23.261-.23.74 0 1.013.12.131.293.196.5.196.208 0 .371-.065.491-.196.25-.272.25-.752 0-1.013-.12-.142-.283-.207-.49-.207Zm-4.719 2.78-.785-.632L14.572 8l.785.621-5.864 7.837Z"
              ></path>
            </svg>
            {price}
          </p>
        </div>
      </Link>
      <div className="flex gap-4 rounded border-spacing-x-7  outline outline-offset-2 outline-1 ... divide-y-0 m-2 ring-4">
        <Button name={`+`} onClick={handleLikeCount}></Button>
        {likeCount}
        <Button name={`-`} onClick={handleDislikeCount}></Button>
      </div>
      <div className="outline-double ... ring-2 ring-inset border-solid hover:border-dotted font-serif m-2 rounded p-2">
        <Link href={`/products/${slug}`}>
          <Button
            className="hover:scale-110 duration-100 ease-out"
            name={`Add to Cart`}
            onClick={() => {}}
          />
        </Link>
      </div>
    </div>
  );
};
