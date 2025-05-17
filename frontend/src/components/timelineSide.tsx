import useFetchMainBranch from "../hooks/useFetchBranchs";

export default function TimelineSide() {
  const { author, message, name, sha, loading } = useFetchMainBranch();

  if (loading) {
    return ( 
      <div className="flex flex-col items-center justify-center w-full h-full">
        Carregando...
      </div>
    );
  }

  return (
    <div className="[--background:#fff] [--color:#000] w-4/5 h-auto rounded-2xl bg-white shadow">
      <div className="p-4 pl-8">
        <div
          className="group relative text-left text-zinc-600 mb-8"
          data-line-active="true"
          data-tl="item"
        >
          <div
            className="bg-[#fff] border border-zinc-400 text-zinc-400 absolute top-0 h-[25px] w-[25px] rounded-full flex items-center justify-center cursor-pointer"
            data-child="bullet"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              strokeLinejoin="round"
              strokeLinecap="round"
              viewBox="0 0 24 24"
              strokeWidth={2}
              fill="none"
              stroke="currentColor"
            >
              <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M12 3l0 6" />
              <path d="M12 15l0 6" />
            </svg>
          </div>

          <div data-child="body" className="pl-8">
            <span className="font-semibold leading-none font-mono text-sky-600">
              {author}
            </span>
            <div className="text-sm font-normal font-mono mt-2"><div className="text-sm font-normal font-mono mt-2">
              Branch: <strong>{name}</strong>
            </div>
              Description: <strong>{message}</strong>
            </div>
            <div className="text-sm font-normal font-mono mt-1">
              SHA: {sha.slice(0, 7)}...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
