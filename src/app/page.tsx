import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {images.map((image) => (
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
