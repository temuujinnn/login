import {
  Box,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { Container } from "../../Theme/common";
export const TourDetail = () => {
  return (
    <>
      <Box h="100px"></Box>
      <Stack
        flexDir="column"
        borderRadius="12px"
        w="100%"
        h="100%"
        maxW={Container}
        my={["10px", "40px"]}
        px={["15px", "15px", "40px", "", "20px"]}
        mx="auto"
      >
        <HStack>
          <Stack>
            <Text opacity="0.5">몽골{">"}울란바토르</Text>
            <Text fontSize="2xl">
              [몽골 여행] 몽골 고비사막 5박 6일 / Sky Tours Mongolia (몽골)
            </Text>
            <Image
              w="80%"
              src="https://cdn.discordapp.com/attachments/967177210706411523/967177268776538132/2.jpg"
            />
            <Text>
              5박 6일 몽골 고비사막과 테를지 여행입니다.
              <br />
              낙타트래킹, 승마체험, 샌딩 보드 체험, 야외 삼겹살 체험, 몽골
              전통적인 음식 호르혹 체험, <br /> 게르 체험, 아름다운 별 감상,
              은하수와 푸른 초원과 함께 아름다운 몽골 여행입니다. <br />
              [투어 코스] <br />
              Day 1 : 울란바토르-차강소브락 <br />
              Day 2 : 차강소브락-바양작 <br />
              Day 3 : 바양작-홍고린엘스 (낙타 트래킹, 샌딩 보드 체험)
              <br /> Day 4 : 욜링암 이동 (승마 체험)
              <br /> Day 5 : 바가가자르 아름다운 별 감상
              <br /> Day 6 : 바가가자르-울란바토르 (캐시미어 알렛 구경, 자이상
              타워 구경)
            </Text>
            <Text>
              * 숙소가 여행자님이 편히 쉬고 갈 수 있는 관광객을 위한 몽골 전통
              게르입니다. <br /> * 게르 숙소는 6인 1실, 4인 1실, 2인 1실 / 게르
              숙소는 2~6인실 인원에 따른 배정 <br /> - 남녀 분리 숙박이
              원칙이나, 상황에 따라 1인 단독 또는 혼숙이 될 수 있습니다. <br />{" "}
              * 전 일정 샤워 가능합니다. <br /> * 전 일정 전기 사용 가능합니다.{" "}
              <br /> * 투어 인원수 최소 2명부터 진행 가능합니다. <br /> * 차량
              3~4명의 경우, 텔리카, 스타렉스 이용 <br /> * 차량 5~6명의 경우,
              러시아 푸르공, 스타렉스 이용 <br /> * 투어 인원 수 최소 2명부터
              진행 가능합니다. <br /> * 점심 식사는 현지 식당에서 먹고 아침과
              저녁을 가이드님이 준비해서 만들어
              <br /> 드립니다. 저녁은 삼겹살, 유목민의 전통 음식 호르혹(몽골
              바베큐), 몽골 칼국수, 몽골 초이방(몽골식 스파게티),
              <br /> 몽골 전통 음식 등이 제공됩니다.
            </Text>
            <Text fontSize="2xl" fontWeight="bold">
              코스 소개
            </Text>
            <Accordion>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      [1일차] 울란바토르–차강소브라가 이동7시간 소요
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  울란바토르–차강소브라가 이동 ▶ 9:00 여행자들이 투숙한 숙소에서
                  픽업하여 차강소브라가를 향해 이동합니다. 공항에서 투어시작할
                  경우 : 여행자님들의 비행시간에 맞춰서 시작합니다.(이동 시간:
                  7시간) 몽골 고비의 길은 대부분이 비포장인 오프로드 도로입니다.
                  개인용 목베개를 준비하시면 보다 편안하게 이동할 수 있습니다.
                  드넓은 대지 위에 자리 잡은 게르 캠프에 여장을 풀고 석양을
                  관람하러 차강소브라가로 오릅니다. 이곳의 절경을 더 가까이에서
                  느끼길 원하시는 분들께는 걸어서 트레킹을 권유해 드립니다. ▶
                  차강소브라가 도착 후 트레킹 일출과 일몰이 아름다운 이곳
                  차강소브라가에서 360도의 고비 파노라마 풍광을 즐기신 후 숙소로
                  이동하여 야외 삼겹살 체험을 합니다. “차강소브락(TSAGAAN
                  SUVRAGA:White Stupa)는 중앙 고비의 남서쪽에 위치하고 있으며
                  수백만 년에 걸쳐 형성된 석회암 퇴적층은 바다였음을 의미하는
                  완벽한 증거입니다. 바닷물은 오래전에 말랐으며, 그 이후로 고대
                  해저 구조물은 바람에 의해 침식되어 절벽의 색과 형태가
                  바뀌었습니다. 현재의 미국 라스베이거스의 그랜드 캐년처럼
                  차강소브락은 아시아의 몽골 그랜드캐년이라고 불립니다. 절벽
                  높이는 길이가 400m, 높이 60m 이상, 각도 90도나 됩니다.
                  차강소브라가 도착 후 트레킹 색다른 모습을 느끼고 여러 가지
                  포인트에서 인생샷을 남기기 야외 삼겹살 체험 석식 후 별이
                  가득한 밤하늘 관측 및 휴식
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Section 2 title
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Stack>
          <Stack>
            <Text>side</Text>
          </Stack>
        </HStack>
      </Stack>
    </>
  );
};
