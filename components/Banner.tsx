import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Button } from "@chakra-ui/react";

type BannerProps = {
  purpose: string,
  imageUrl: string,
  title1: string,
  title2: string,
  desc1: string,
  desc2: string,
  linkName: string,
  buttonText: string,
};

const Banner: FC<BannerProps> = ({ purpose, imageUrl, title1, title2, desc1, desc2, linkName, buttonText }) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} width={500} height={300} alt="banner" />
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">
        {purpose}
      </Text>
      <Text fontSize="3x1" fontWeight="bold">
        {title1}
        <br />
        {title2}
      </Text>
      <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">
        {desc1}<br/>{desc2}
      </Text>
      <Button fontSize="xl">
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
);

export default Banner;
