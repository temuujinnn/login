import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { TourDetail } from "../../../Domains/TourDetail";
import { MySpinner } from "../../../Component/MySpinner";
export default function CreatorsPage({ loading }: any) {
  const router = useRouter();
  const [data, setData] = useState<any>();
  const id = router.query.id;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    if (id != undefined) {
      setIsLoading(true);
      axios
        .get(`${process.env.NEXT_PUBLIC_BASE_URL}/toursingle?tourId=${id}`)
        .then((res) => {
          setIsLoading(false);
          setData(res.data.data);
        })
        .catch((err) => {
          setIsLoading(false);
          console.log(err);
        });
    }
  }, [id]);
  if (!data) {
    return null;
  }

  return (
    <>
      {loading === false && isLoading === true ? (
        <MySpinner />
      ) : (
        <TourDetail data={data} />
      )}
    </>
  );
}
