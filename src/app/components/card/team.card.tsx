import { FiFacebook } from "react-icons/fi";
import {
  SlSocialFacebook,
  SlSocialLinkedin,
  SlSocialTwitter,
} from "react-icons/sl";

type TeamCardPropsTypes = {
  id: number;
  name: string;
  education: string;
  job_title: string | null;
  image: string;
  facebook: string | null;
  linkedin: string | null;
  twitter: string | null;
};

export const TeamCard: React.FC<TeamCardPropsTypes> = (
  props: TeamCardPropsTypes
): JSX.Element => {
  return (
    <div className="overflow-hidden rounded-xl border bg-white">
      {/* Banner container */}
      <div
        className="w-full h-60 overflow-hidden bg-cover"
        style={{ backgroundImage: `url(${props.image})` }}
      />

      {/* Content container */}
      <div className="-mt-10 rounded-tl-3xl rounded-tr-3xl p-4 bg-white">
        {/* Title & designation & education */}
        <div className="mb-5">
          <p className="uppercase text-sm font-semibold mb-1">{props.name}</p>
          <p className="text-xs mb-1 text-gray-700">{props.education}</p>
          <p className="text-xs text-gray-400">{props.job_title || "..."}</p>
        </div>

        {/* Social contacts */}
        <div className="flex flex-wrap justify-start gap-2">
          {props.facebook ? (
            <a href={props.facebook}>
              <button
                type="button"
                className="p-2 rounded-full transition-all bg-gray-200 hover:bg-gray-300"
              >
                <SlSocialFacebook size={14} />
              </button>
            </a>
          ) : null}
          {props.linkedin ? (
            <a href={props.linkedin}>
              <button
                type="button"
                className="p-2 rounded-full transition-all bg-gray-200 hover:bg-gray-300"
              >
                <SlSocialLinkedin size={14} />
              </button>
            </a>
          ) : null}
          {props.twitter ? (
            <a href={props.twitter}>
              <button
                type="button"
                className="p-2 rounded-full transition-all bg-gray-200 hover:bg-gray-300"
              >
                <SlSocialTwitter size={14} />
              </button>
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};
