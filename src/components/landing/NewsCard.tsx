import Image from "next/image";

type Variant = "big" | "horizontal" | "small";

interface NewsCardProps {
  variant: Variant;
  image: string;
  title: string;
  meta?: { platform: string; date: string; views: number };
}

function NewsCard({ variant, image, title, meta }: NewsCardProps) {
  return (
    <article
      className={[
        "group relative overflow-hidden rounded-xl bg-white h-full",
        variant === "big" && "w-full",
        variant === "horizontal" && "flex",
        variant === "small" && "flex flex-col",
      ].join(" ")}
    >
      {/* Image */}
      <div
        className={[
          "relative",
          variant === "big" && "h-full aspect-6/5",
          variant === "horizontal" && "w-2/5 aspect-3/2",
          variant === "small" && "aspect-8/5 h-1/2",
        ].join(" ")}
      >
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      {/* Content */}
      <div
        className={[
          "p-4 flex flex-col justify-between",
          variant === "big" &&
            "absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 text-white",
          variant === "horizontal" && "w-3/5 text-black bg-[#F8F8F9]",
          variant === "small" && "h-full text-black bg-[#F8F8F9]",
        ].join(" ")}
      >
        <div>
          {meta && (
            <p className="flex items-center gap-4 text-xs mb-1">
              <span className="whitespace-nowrap">{meta.platform}</span>
              <span>●</span>
              <span className="whitespace-nowrap">{meta.date}</span>
              <span>●</span>
              <span className="whitespace-nowrap">{meta.views} Views</span>
            </p>
          )}
          <h3
            className={[
              "font-semibold leading-snug",
              variant === "big" && "text-xl",
              variant === "horizontal" && "text-sm",
              variant === "small" && "text-sm",
            ].join(" ")}
          >
            {title}
          </h3>
        </div>

        <div className="flex justify-between ">
          <a
            href="#"
            className="flex items-center justify-center underline text-[#8E7FF0]"
          >
            <span>View Post</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="currentColor"
              className="size-8 transform -rotate-35"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </a>
          <p
            className={`flex text-medium ${variant === "big" ? "text-white" : "text-[#696B82]"}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
              />
            </svg>
            <span>1 Min Read</span>
          </p>
        </div>
      </div>
    </article>
  );
}
export default NewsCard;
