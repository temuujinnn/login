import { Box, Flex, Image } from "@chakra-ui/react";
import Slider from "react-slick";
const Img = [
  "https://cdn.discordapp.com/attachments/967177210706411523/967177251097546772/3.jpg",
  "https://cdn.discordapp.com/attachments/967177210706411523/967177268776538132/2.jpg",
  "https://cdn.discordapp.com/attachments/967177210706411523/967177286124179486/1.jpg",
];
export const SlideHome = () => {
  const NextArr = () => {
    return <Flex display="none">sda</Flex>;
  };
  const PrevArr = () => {
    return <Flex display="none">sda</Flex>;
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    duration: 2,
    nextArrow: <NextArr />,
    prevArrow: <PrevArr />,
  };
  return (
    <>
      <Slider {...settings}>
        {Img.map((el: any, ind: number) => {
          return <Image key={ind} w="100%" h="90vh" src={el} />;
        })}
      </Slider>
    </>
  );
};
