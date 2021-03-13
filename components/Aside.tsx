import Image from "next/image";
import Icon from "./Icon";
import Link from "next/link";

export default function Aside() {
  return (
    <aside>
      <summary className="mb-5 lg:mb-0 w-full bg-white shadow-sm border rounded-xl justify-center items-center p-6 py-8 text-center">
        <Image
          className="mx-auto rounded-xl"
          src="https://static.ouorz.com/wp-content/uploads/2020/12/2021010105320083.jpg"
          width="170"
          height="170"
        />
        <h1 className="mt-4 text-2xl font-medium whitespace-nowrap tracking-wide">
          Known Unknowns
        </h1>
        <p className="text-lg text-gray-500 tracking-wide">已知未知播客</p>
      </summary>
      <Link href="/">
        <div className="text-gray-600 mt-6 mb-2 bg-white shadow-sm border rounded-xl tracking-wider justify-center items-center flex p-2 text-lg cursor-pointer hover:bg-gray-50">
          <i className="ri-home-3-line mr-1"></i>
          Home
        </div>
      </Link>
      <Link href="/rss">
        <div className="text-gray-600 mt-3 mb-2 bg-white shadow-sm border rounded-xl tracking-wider justify-center items-center flex p-2 text-lg cursor-pointer hover:bg-gray-50">
          <i className="ri-rss-fill mr-1"></i> RSS
        </div>
      </Link>
    </aside>
  );
}
