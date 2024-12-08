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
    <div className="w-full p-2 pt-2 bg-black/5 rounded-md min-h-[40vh] shadow-xl drop-shadow-xl border border-black/1">
      <div className="flex flex-col w-full">
        <label className="flex justify-center">
          <span className="w-fit font-semibold border-b-2 text-purple-600 border-purple-600  text-center">
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
            <span className="text-blue  text-xs border-b-2 border-blue text-wrap break-words">
              {url}
            </span>
          </a>
        </div>
      </div>

      {
        decodedHtml && <div className="mt-4" >
        <label className="font-semibold"> Description :</label>
        <div
          className="html-content break-words break-all mt-2 overflow-auto max-w-[95vw] lg:max-w-[30vw]  max-h-[40vh]"
          dangerouslySetInnerHTML={{ __html: decodedHtml ?? "" }}
        />
      </div>
      }
    </div>
  );
}

export default Card;