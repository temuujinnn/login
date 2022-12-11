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
    q: "Which style of trip is right for me?",
    a: "Our three styles of travel – Basix, Original and Comfort – cover a whole gamut of travel experiences. To find out which one has ‘You’ written all over it, visit our trip styles page.",
  },
  {
    q: " Are trips physically demanding?",
    a: "Want to lie in a hammock and not move until cocktail hour? We’ve got a trip for that. Want to power up the side of mountain at high altitude? We’ve also got a trip for that. To determine what type of trip suits you best, each of our trips comes with a Physical Rating to let you know how physically demanding it is… or isn’t. ",
  },
  {
    q: "Does Intrepid have family trips? ",
    a: "Intrepid offers a wide range of Family Adventures around the globe. The minimum age (for Family trips) varies depending on destination, and Intrepid has set minimum ages to ensure that the included activities suit each age range. Additionally, you’ll notice that some of the more adventurous destinations have a higher minimum age. Please view our family adventures for more information.",
  },
  {
    q: "Who are Intrepid travellers?",
    a: "Intrepid adventures are for travellers with a yearning to get off the beaten track. Whether you're travelling solo, with a group of friends, or are aged 18 or 70, there is an Intrepid adventure to suit your interests and comfort level. Each Intrepid adventure has a physical and cultural grading to help you decide if the trip is right for you. No special skills are required for most adventures, just a sense of adventure and a curiosity about the world. Even on our camping adventures no previous experience is required; our tents are easy to set up, even for first-time campers. ",
  },
  {
    q: "How many people will be on my trip? ",
    a: "Good things come in small packages, which is why we keep our group sizes down. This means we’re small enough to remain flexible as we thread our way through communities without intimidating the locals. On most of our trips you’ll be part of an intimate group of 12-16 people, though our group sizes are on average 10 people. Our Overland trips are in purpose-built vehicles that can carry up to 24 travellers. Group sizes are displayed on each trip’s overview page on our website.",
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
