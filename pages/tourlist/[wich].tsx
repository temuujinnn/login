import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MySpinner } from "../../Component/MySpinner";
import { TourList } from "../../Domains/TourList";

export default function CreatorsPage({ loading }: any) {
  const router = useRouter();
  const [data, setData] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);
  const wich = router.query.wich;

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/tour?_id=${wich}`)
      .then((res) => {
        setIsLoading(false);
        setData(res.data);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }, [wich]);
  if (!data) {
    return null;
  }

  return (
    <>
      {loading === false && isLoading === true ? (
        <MySpinner />
      ) : (
        <TourList data={data} />
      )}
    </>
  );
}
