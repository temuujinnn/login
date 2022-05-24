import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CampDetail } from "../Domains/CampDetail";

export default function CreatorsPage() {
  const router = useRouter();
  const [data, setData] = useState<any>();
  const camp = router.query.camp;

  useEffect(() => {
    if (camp !== undefined) {
      axios
        .get(`${process.env.NEXT_PUBLIC_BASE_URL}/camps_single?_id=${camp}`)
        .then((res) => {
          setData(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [camp]);
  if (!data) {
    return null;
  }
  console.log(data);

  return <CampDetail data={data} />;
}
