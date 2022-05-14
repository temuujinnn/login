import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { TourList } from "../../Domains/TourList";

export default function CreatorsPage() {
  const router = useRouter();
  const [data, setData] = useState<any>();
  const wich = router.query.wich;

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/tour?_id=${wich}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [wich]);
  if (!data) {
    return null;
  }

  return <TourList data={data} />;
}
