import DeleveryCard from "@/Component/DeleveryCard";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import DelayedPage from "./delayed/page";
import ToggolingButton from "@/Component/ToggolingButton";
import path from "path";
import fs from "fs";

const urlMaker = (fileName) => {
    const filePath = path.join(process.cwd(), "public", fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(fileContents);
    return data;
};
export default async function Home() {
  const data =urlMaker("data.json");
  return (
    <div className="flex justify-center items-center h-screen flex-col gap-3">
      
      <ToggolingButton data={data}></ToggolingButton>
      
    </div>
  );
}
