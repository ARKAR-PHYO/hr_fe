import AdminLayout from "@components/Templates/AdminLayout";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <AdminLayout>
      <div className="">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur nam
        maxime odio dicta nisi dolores nostrum, ut doloremque? Quis qui porro
        aut libero numquam vel iure assumenda suscipit fuga provident.
      </div>
    </AdminLayout>
  );
};

export default Home;
