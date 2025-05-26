/* eslint-disable @next/next/no-img-element */
// components/PhotoHighlights.tsx

export default function PhotoHighlights() {
  const photos = [
    { src: "./image1.jpg", alt: "Hackathon win" },
    { src: "./image2.jpg", alt: "Shipping code" },
    { src: "./image3.jpg", alt: "Team photo" },
    { src: "./image4.jpg", alt: "Late night debugging" },
    { src: "./image5.jpg", alt: "Giving a talk" },
    { src: "./image6.jpg", alt: "Coffee and code" },
    { src: "./image7.jpg", alt: "More coffee" },
    { src: "./image8.jpg", alt: "Meetup fun" },
    { src: "./image9.jpg", alt: "Workshop day" },
  ];

  return (
    <section className="mt-12">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {photos.map((photo, i) => (
          <div key={i} className="relative w-full aspect-[4/5] overflow-hidden rounded-xl shadow-md">
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
