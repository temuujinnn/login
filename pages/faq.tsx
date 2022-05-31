import {
  Stack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
} from "@chakra-ui/react";
import { Container } from "../Theme/common";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";
const QA = [
  {
    q: "여행자 캠프와 유목민 게르 캠프 (게르 게스트) 차이가 뭘까요? ",
    a: "두 캠프의 차이는 전기, 샤워 사용의 유무 그리고 가격 차이가 있습니다. ",
  },
  {
    q: " 투어 중 캠핑을 하고 싶은데 대여가 가능한가요?",
    a: "네, 가능합니다! 선착순으로 캠핑 장비, 텐트를 무료로 대여해드립니다!  ",
  },
  {
    q: "캠프는 2개로 잡고 싶습니다, 가능한가요? ",
    a: "네, 가능합니다! 저희는 5,6인 팀은 숙소 예약할 경우 무조건 2게르로 예약 진행합니다. 단, 성수기 또는 캠프 상황에 따라 1게르 이용할 수 있습니다. 그래서 미리 예약해주시는 게 좋습니다. ",
  },
  {
    q: "투어 중 일정 변경 가능한가요? ",
    a: " 장소 변경은 어렵고, 시간은 가이드님과 상의 후 유동적으로 변경 가능합니다. 장소 변경이 어려운 이유는 숙소를 미리 예약하기 때문입니다. 숙소 외 일정은 변경 가능합니다. ",
  },
  {
    q: "승마, 낙타 등 체험하면서 다쳤는데 환불 또는 보상 받을 수 있나요? ",
    a: "아니요...",
  },
];

export default function FaqPage({ loading }: any) {
  return (
    <>
      <Box h="100px" />
      <Stack
        w="100%"
        h="100%"
        maxW={Container}
        my={["10px", "40px"]}
        px={["15px", "15px", "40px", "", "20px"]}
        mx="auto"
      >
        <Text fontSize={["2xl", "4xl"]} fontWeight="bold">
          Question and Answer
        </Text>
        <Accordion allowMultiple>
          {QA.map((el: any, ind: number) => {
            return (
              <AccordionItem key={ind} p={5}>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box
                          fontWeight="bold"
                          fontSize={["md", "xl"]}
                          textAlign="left"
                          alignItems="center"
                          justifyContent="center"
                        >
                          Q:: {el.q}
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Text p={3} fontWeight="500" fontSize={["18px", "lg"]}>
                        A::
                        {el.a}
                      </Text>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            );
          })}
        </Accordion>
      </Stack>
    </>
  );
}
