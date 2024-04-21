const mockUrls = [
  "https://utfs.io/f/8cd03756-67a3-4428-aeb9-8f6b9433c9c2-4egksl.jpg",
  "https://utfs.io/f/a41fbe84-b3ea-49e5-bdcb-c6293f914712-wg5ero.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <img
            key={image.id}
            src={image.url}
            alt=""
            className="w-48 object-cover"
          />
        ))}
      </div>
    </main>
  );
}
