import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 flex flex-col bg-base-100 px-2 text-primary xl:static">
      {/* Small size Navbar */}
      <nav className="navbar">
        <div className="navbar-start">
          {/* Drawer */}
          <div className="btn btn-ghost btn-circle">
            <Icon icon="fluent:navigation-20-filled" className="h-6 w-6" />
          </div>
          {/* Search */}
          <div className="btn btn-ghost btn-circle">
            <Icon icon="fluent:search-20-filled" className="h-6 w-6" />
          </div>
        </div>
        {/* Small logo */}
        <div className="navbar-center xl:hidden">
          <Link href="/">
            <a>
              <Image
                src="/images/logoHeader.png"
                height={50}
                width={130}
                alt="Pipiripao"
                className="w-28"
              />
            </a>
          </Link>
        </div>
        <div className="navbar-end">
          <div>
            <label htmlFor="" className="btn btn-ghost btn-circle">
              <div className="w-6 rounded-full text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 553.69 519.37"
                >
                  <g data-name="Layer 2">
                    <path
                      d="M276.32 496.68c-72.49-1-135.16-18.28-188.14-62.14C26.38 383.38 6.71 306.71 36 232c8.24-21 9-42.34 10.35-64C49 126.94 54.51 86.42 69.52 47.76a103.19 103.19 0 0 1 9.27-18.16c3.87-6 10.2-8.63 16.78-5.32 9.88 4.95 20.05 9.95 28.57 16.82 17.28 14 33.79 28.91 50.11 44 6.89 6.38 13.39 8.2 22.59 5.47 53.29-15.8 106.83-15.9 160.16-.35 10.06 2.93 17.14 1.41 25-5.53 19.81-17.61 40.29-34.45 60.75-51.31 4.23-3.48 9.34-6.07 14.35-8.41 9.17-4.27 16.19-2.79 20.67 6.21a256.74 256.74 0 0 1 16 38.94c11.23 36.82 15.43 74.93 15.78 113.18.22 23.55 8.62 44.56 14.36 66.52 10.3 39.46 10.17 78.58-5.54 116.83-14.82 36.08-40.31 63.09-72.79 83.89-38.73 24.8-81.34 38.58-127 43.13-15.53 1.54-31.16 2.24-42.26 3.01Z"
                      data-name="Layer 1"
                    />
                  </g>
                </svg>
              </div>
            </label>
          </div>
          {/* Cart */}
          <div className="flex-none">
            <div className="dropdown-end dropdown">
              <label className="btn btn-ghost btn-circle" tabIndex={0}>
                <div className="indicator">
                  <Icon icon="fluent:cart-20-regular" className="h-8 w-8" />
                  <span className="badge indicator-item badge-sm badge-primary text-base-100">
                    4
                  </span>
                </div>
              </label>
              <div
                tabIndex={0}
                className="card dropdown-content card-compact mt-3 w-52 bg-base-100 shadow"
              >
                <div className="card-body">
                  <span className="text-lg">4 Items</span>
                  <span className="text-info">Subtotal: $10000</span>
                  <div>
                    <Link href="/cart">
                      <a>
                        <button className="btn btn-primary btn-block">
                          Ver Carrito
                        </button>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* Big size Navbar */}
      <nav className="navbar hidden xl:flex">
        <div className="navbar-start"></div>
        <div className="navbar-center flex flex-col">
          <Link href="/">
            <a>
              <Image
                src="/images/logoHeader.png"
                height={90}
                width={240}
                alt="Pipiripao"
                className="w-28"
              />
            </a>
          </Link>
          <ul className="menu menu-horizontal z-10 mt-4 mb-2 gap-3">
            <li tabIndex={0}>
              <Link href={"/merch-tops"}>
                <a>TOPS</a>
              </Link>
              <ul className="rounded-box bg-primary p-2 text-base-100">
                <li>
                  <Link href={"/merch-tops-buzos"}>
                    <a>Buzos</a>
                  </Link>
                </li>
                <li>
                  <Link href={"/merch-tops-chaquetas"}>
                    <a>Chaquetas</a>
                  </Link>
                </li>
                <li>
                  <Link href={"/merch-tops-overoles"}>
                    <a>Overoles</a>
                  </Link>
                </li>
                <li>
                  <Link href={"/merch-tops-impermeables"}>
                    <a>Impermeables</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li tabIndex={0}>
              <Link href={"/merch-bottoms"}>
                <a>BOTTOMS</a>
              </Link>
              <ul className="rounded-box bg-primary p-2 text-base-100">
                <li>
                  <Link href={"/merch-bottoms-pantalones"}>
                    <a>Pantalones</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li tabIndex={0}>
              <Link href={"/merch-accesorios"}>
                <a>ACCESORIOS</a>
              </Link>
              <ul className="rounded-box bg-primary p-2 text-base-100">
                <li>
                  <Link href={"/merch-accesorios-sombreros"}>
                    <a>Sombreros</a>
                  </Link>
                </li>
                <li>
                  <Link href={"/merch-accesorios-medias"}>
                    <a>Medias</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href={""}>
                <a>VET TODO</a>
              </Link>
            </li>
            <li>
              <Link href={""}>
                <a>CONTACTO</a>
              </Link>
            </li>
            <li>
              <Link href={""}>
                <a>CATÁLOGO</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end"></div>
      </nav>
    </header>
  );
}
