import {
  AspectRatio,
  Box,
  Flex,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import Slider from "react-slick";

export const SlideHome = ({ banners }: any) => {
  const ratio = useBreakpointValue({
    base: 2 / 3,
    md: 1,
    lg: 4 / 3,
    xl: 5 / 2,
  });
  const padding = useBreakpointValue({
    base: "20px",
    sm: "40px",
    md: "60px",
    lg: "80px",
    xl: "100px",
  });
  const settings = {
    centerMode: true,
    className: "homeslider",
    centerPadding: padding,
    slidesToShow: 1,
    speed: 500,
    autoplaySpeed: 5000,
    autoplay: true,
    arrows: false,
  };
  return (
    <>
      <Slider {...settings}>
        {banners?.map((el: any, ind: number) => {
          return <Card url={el} key={ind} ratio={ratio} h="90vh" src={el} />;
        })}
      </Slider>
    </>
  );
};
export const Card = ({ ratio, url }: any) => {
  return (
    <Box>
      <AspectRatio ratio={ratio}>
        <Image
          fallbackSrc="https://via.placeholder.com/150"
          src={url.imageUrl}
          borderRadius={24}
          alt="sd"
          bg="blackAlpha.700"
        />
      </AspectRatio>
    </Box>
  );
};
