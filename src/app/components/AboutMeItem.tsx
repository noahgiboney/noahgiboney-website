import Image from "next/image";

interface InterestPhotoProps {
  photo: string;
  photoAlt: string;
  caption: string;
}

export default function AboutMeItem({ photo, photoAlt, caption }: InterestPhotoProps) {
  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] overflow-hidden rounded-lg shadow-lg">
        <Image
          src={photo}
          alt={photoAlt}
          width={200}
          height={200}
          className="object-cover w-full h-full"
        />
      </div>
      <p className="text-xs sm:text-sm text-gray-500">{caption}</p>
    </div>
  );
}
