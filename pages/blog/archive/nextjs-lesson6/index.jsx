import ArchiveLayout from "@/components/archive/ArchiveLayout";
import { useEffect, useState } from "react";

export default function ImagePage({ image }) {
  const [time, setTime] = useState("");

  useEffect(() => {
    setTime(new Date().toLocaleTimeString());
  }, []);

  return (
    <ArchiveLayout>
      <div className="max-w-[600px] h-auto flex flex-col items-center justify-center mx-auto">
        <h1 className="text-3xl">Title:{image.title}</h1>
        <p className="text-xl">{image.description}</p>
        <img src={image.url} alt={image.title} className="w-[500px] h-auto" />
        <br />
        <small>取得日時: {time}</small>
      </div>
    </ArchiveLayout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    "https://fakerapi.it/api/v2/images?_quantity=1&_type=any&_height=300"
  );
  const json = await res.json();

  return {
    props: {
      image: json.data[0],
    },
  };
}
