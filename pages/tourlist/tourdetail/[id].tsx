import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { TourDetail } from "../../../Domains/TourDetail";

export default function CreatorsPage() {
  const router = useRouter();
  const [data, setData] = useState<any>();
  const id = router.query.id;
  useEffect(() => {
    if (id != undefined) {
      axios
        .get(`${process.env.NEXT_PUBLIC_BASE_URL}/toursingle?tourId=${id}`)
        .then((res) => {
          setData(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);
  if (!data) {
    return null;
  }

  return <TourDetail data={data} />;
}
