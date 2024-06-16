import * as React from "react"
const SvgComponent = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={125}
    height={125}
    stroke="rgb(185 28 28)"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="#fff">
      <path d="M9 6a3 3 0 1 0 6 0 3 3 0 0 0-6 0ZM2.5 18a3 3 0 1 0 6 0 3 3 0 0 0-6 0ZM18.5 21a3 3 0 1 1 0-6 3 3 0 0 1 0 6ZM7.205 7.562a.75.75 0 0 0-.993-1.124A8.73 8.73 0 0 0 3.25 13a.75.75 0 0 0 1.5 0 7.23 7.23 0 0 1 2.455-5.438ZM17.788 6.438a.75.75 0 0 0-.993 1.124A7.23 7.23 0 0 1 19.25 13a.75.75 0 0 0 1.5 0 8.73 8.73 0 0 0-2.962-6.562ZM10.187 20.022a.75.75 0 1 0-.374 1.452c.7.18 1.433.276 2.187.276.754 0 1.487-.096 2.187-.276a.75.75 0 1 0-.374-1.452A7.267 7.267 0 0 1 12 20.25c-.627 0-1.234-.08-1.813-.228Z" />
    </g>
  </svg>
)
export default SvgComponent
