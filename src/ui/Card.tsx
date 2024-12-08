interface CardInterface {
  title: string;
  selftextHtml: string;
  url: string;
  score: number;
}

function Card({ score, selftextHtml, title, url }: CardInterface) {
  function decodedHTMLToString(): string {
    const txt = document.createElement("textarea");
    txt.innerHTML = selftextHtml ?? "";
    return txt.value ?? "";
  }

  const decodedHtml = decodedHTMLToString();
  return (
    <div className="w-full p-2 pt-2 rounded-md lg:min-h-[20vh] shadow-md border border-black">
      <div className="flex flex-col w-full">
        <label className="flex justify-center">
          <span className="w-fit font-semibold border-b-2  border-black text-center">
            {title}
          </span>
        </label>
        <div className="flex flex-col gap-3 mt-5">
          <label className="font-semibold">
            Score: <span className="font-normal">{score}</span>
          </label>
          <a
            href={url}
            className="w-full text-nowrap cursor-pointer font-semibold"
          >
            Url:{" "}
            <span className="text-blue  text-xs text-wrap break-words">
              {url}
            </span>
          </a>
        </div>
      </div>

      {
        decodedHtml && <div className="mt-4" >
        <label className="font-semibold"> Self HTML text :</label>
        <div
          className="html-content break-words break-all mt-2 overflow-auto max-w-[95vw] lg:max-w-[30vw]  max-h-[20vh]"
          dangerouslySetInnerHTML={{ __html: decodedHtml ?? "" }}
        />
      </div>
      }
    </div>
  );
}

export default Card;
