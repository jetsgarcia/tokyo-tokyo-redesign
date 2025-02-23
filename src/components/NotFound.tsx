import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="grid h-[calc(100vh-200px)] place-items-center md:h-[calc(100vh-70px)] md:px-32 xl:px-48">
      <div className="w-full">
        <div className="flex flex-col items-center space-y-6 px-16 md:flex-row-reverse">
          <div className="md:right-0 md:flex md:w-1/2 md:justify-end">
            <svg
              version="1.1"
              id="_x32_"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="h-16 w-16 md:h-80 md:w-80"
            >
              <g>
                <polygon
                  fill="#000"
                  points="137.484,9.563 137.484,40.344 509.172,40.344 509.172,0 	"
                />
                <path
                  fill="#000"
                  d="M316.766,60.625c0-7.953-6.453-14.406-14.406-14.406c-7.969,0-14.406,6.453-14.406,14.406v7.109h-24.188
		v-7.109c0-7.953-6.453-14.406-14.391-14.406c-7.969,0-14.422,6.453-14.422,14.406v7.109h-24.172v-7.109
		c0-7.953-6.438-14.406-14.406-14.406c-7.953,0-14.406,6.453-14.406,14.406v7.109h-44.484v30.797l44.484,1.125v116H2.828v16.469
		c-0.016,62.688,24.391,121.594,68.719,165.891c22.828,22.828,49.547,40.406,79.453,52.266V512h172.859v-61.719
		c29.922-11.859,56.641-29.438,79.453-52.266c44.328-44.297,68.719-103.203,68.719-165.891v-16.469H316.766V103.125l192.406,4.938
		V67.734H316.766V60.625z M210.781,100.406l24.172,0.625v114.625h-24.172V100.406z M295.047,483.188H179.813v-27.844
		c18.422,4.75,37.719,7.281,57.625,7.266c19.875,0.016,39.188-2.516,57.609-7.266V483.188z M382.953,377.641
		c-37.297,37.266-88.656,60.266-145.516,60.266c-56.875,0-108.25-23-145.531-60.266c-34.531-34.563-56.813-81.234-59.891-133.172
		h410.828C439.781,296.406,417.5,343.078,382.953,377.641z M287.953,215.656h-24.188V101.766l24.188,0.625V215.656z"
                />
              </g>
            </svg>
          </div>
          <div className="space-y-6 text-center md:w-1/2 md:space-y-8 md:text-left">
            <div className="space-y-1">
              <div className="text-6xl font-bold md:text-8xl md:font-semibold">
                OOPS!
              </div>
              <h1 className="text-lg font-medium md:text-2xl">
                We can't find that page.
              </h1>
              <p className="text-sm md:text-base">
                It looks like the page you're looking for doesn't exist.
              </p>
            </div>
            <Link
              to={"/"}
              className="bg-primary rounded-md px-4 py-2 font-medium text-white md:px-6 md:py-3 md:font-semibold"
            >
              Go to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
