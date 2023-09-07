'useclient'
import Image from "next/image";
import styles from "./page.module.css";
import { VideoCard } from "@/components/Common/VideoCard";
import { Dashboard } from "@/pages/Dashboard/Dashboard";

export default function Home() {
  return <>
  <Dashboard />
  {/* <VideoCard /> */}
  </>;
}
