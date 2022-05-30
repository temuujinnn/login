import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CampDetail } from "../Domains/CampDetail";
import { MySpinner } from "../Component/MySpinner";
export default function CreatorsPage({ loading }: any) {
  const router = useRouter();
  const [data, setData] = useState<any>();
  const camp = router.query.camp;
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (camp !== undefined) {
      setLoading(true);
      axios
        .get(`${process.env.NEXT_PUBLIC_BASE_URL}/camps_single?_id=${camp}`)
        .then((res) => {
          setLoading(false);
          setData(res.data.data);
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
        });
    }
  }, [camp]);
  if (!data) {
    return null;
  }

  return (
    <>
      {loading === false && isLoading === true ? (
        <MySpinner />
      ) : (
        <CampDetail data={data} />
      )}
    </>
  );
}
