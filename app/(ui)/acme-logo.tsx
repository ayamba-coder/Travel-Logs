import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { lusitana_latin, roboto_latin } from "@/app/(ui)/fonts";

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana_latin.className} flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Acme</p>
      <p className={`ml-3 ${roboto_latin.className}`}>Incorporation</p>
    </div>
  );
}
