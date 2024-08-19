import { ProductCard } from "@/app/components/storefront/ProductCard";
import prisma from "@/app/lib/db";
import { notFound } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";

async function getData(productCategory: string) {
  switch (productCategory) {
    case "all": {
      const data = await prisma.product.findMany({
        select: {
          name: true,
          images: true,
          price: true,
          id: true,
          description: true,
        },
        where: {
          status: "published",
        },
      });

      return {
        title: "Semua Produk",
        data: data,
      };
    }
    case "lidahbuaya": {
      const data = await prisma.product.findMany({
        where: {
          status: "published",
          category: "lidahbuaya",
        },
        select: {
          name: true,
          images: true,
          price: true,
          id: true,
          description: true,
        },
      });

      return {
        title: "Produk untuk Lidah Buaya",
        data: data,
      };
    }
    case "jambu": {
      const data = await prisma.product.findMany({
        where: {
          status: "published",
          category: "jambu",
        },
        select: {
          name: true,
          images: true,
          price: true,
          id: true,
          description: true,
        },
      });

      return {
        title: "Produk untuk Jambu",
        desc: "asdasdasd",
        data: data,
      };
    }
    case "singkong": {
      const data = await prisma.product.findMany({
        where: {
          status: "published",
          category: "singkong",
        },
        select: {
          name: true,
          images: true,
          price: true,
          id: true,
          description: true,
        },
      });

      return {
        title: "Produk untuk Singkong",
        data: data,
      };
    }
    default: {
      return notFound();
    }
  }
}

export default async function CategoriesPage({
  params,
}: {
  params: { name: string };
}) {
  noStore();
  const { data, title, desc } = await getData(params.name);
  return (
    <section>
      <h1 className="font-semibold text-3xl my-5">{title}</h1>
      <h1 className="font-semibold text-3xl my-5">{desc}</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}