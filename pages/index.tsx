import axios from "axios";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Home } from "../Domains/Home";
const Page: NextPage = ({ data, isLoading }: any) => {
  return <Home data={data} isLoading={isLoading} />;
};

export default Page;
