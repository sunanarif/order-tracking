import DeleveryCard from "@/Component/DeleveryCard";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import DelayedPage from "./delayed/page";
import ToggolingButton from "@/Component/ToggolingButton";

export default async function Home() {
  const res = await fetch('http://localhost:3000/data.json')
  const data = await res.json()
  console.log(data)
  return (
    <div className="flex justify-center items-center h-screen flex-col gap-3">
      
      <ToggolingButton data={data}></ToggolingButton>
      
    </div>
  );
}
