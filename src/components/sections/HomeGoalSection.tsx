"use client";
import {
  AcademicCap,
  Book,
  BookInsideBox,
  EWallet,
  Forum,
  HomeIcon,
  UserInsideHex,
  UsersGroup,
} from "@/assets/icons/icon";
import NavButton from "@/components/common/NavButton";
import {
  Box,
  Stack,
  HStack,
  Text,
  Button,
  Flex,
  SimpleGrid,
  IconButton,
} from "@chakra-ui/react";
import { Link } from "nextjs13-progress";
import React from "react";

enum EGrade {
  GRADE_11_12 = "Grade 11 & 12",
  GRADE_10 = "Grade 10",
}
const HomeGoalSection = ({ desc }: { desc: string }) => {
  const [activeGrade, setActiveGrade] = React.useState<EGrade>(
    EGrade.GRADE_11_12
  );
  return (
    <Box
      mx={[null, null, "auto"]}
      my={{
        base: "3rem",
        md: "3rem",
        lg: "4.25rem",
        xl: "6.25rem",
      }}
    >
      <Stack spacing={[5, 5, 10]}>
        <Stack
          flexDirection={{
            base: "column",
            md: "column",
            lg: "column",
            xl: "row",
          }}
          spacing={[2, 2, 5]}
          justifyContent={["space-between"]}
        >
          <Stack gap="4px">
            <HStack
              fontSize={{
                base: "36px",
                md: "2rem",
                lg: "2.5rem",
                xl: "3.375rem",
              }}
              fontWeight={400}
              alignSelf={{ sm: "center", xl: "flex-start" }}
            >
              <Text color="orange.500">Braimy</Text>
              <Text color="gray.600">is for</Text>
              <Text color="orange.500">.</Text>
            </HStack>
            <Text
              fontSize="16px"
              // fontSize={{
              //   base: "16px",
              //   md: "0.875rem",
              //   lg: "1rem",
              //   xl: "1.5rem",
              // }}
              color="#565F64"
              maxW="40rem"
              alignSelf={{ sm: "center", xl: "flex-start" }}
              textAlign={{ base: "center", xl: "start" }}
            >
              {desc}
            </Text>
          </Stack>
          <Box
            w={["full", "full", "max-content"]}
            mt={2}
            alignSelf={{
              base: "center",
              xl: "flex-end",
            }}
          >
            <Button
              as={Link}
              href="/sign-up"
              prefetch
              borderRadius="full"
              fontSize="14px"
              fontWeight="400"
              bg="blue.50"
              color="blue.600"
              px="12px"
              py="24px"
              w={["full", "full", "min-content"]}
              _hover={{
                bg: "blue.600",
                color: "white.50",
              }}
            >
              <Text>Join Braimy Today </Text>
            </Button>
          </Box>
        </Stack>

        <Stack spacing={5}>
          <HStack
            mx="auto"
            borderRadius="full"
            border="1px solid #ECEFF2"
            p={1}
            w={["full", "full", "max-content"]}
          >
            {Object.values(EGrade).map((grade) => (
              <NavButton
                key={grade}
                text={grade}
                icon={<HomeIcon />}
                active={activeGrade === grade}
                padding="12px"
                w={["full", "full", "max-content"]}
                onClick={() => setActiveGrade(grade)}
              />
            ))}
          </HStack>

          <SimpleGrid
            rounded={24}
            maxW="82.5rem"
            border="1px solid #ECEFF2"
            bg="gray.50"
            p={[5, 5, 10]}
            gap={[2.5, 2.5, 5]}
            columns={{
              base: 1,
              md: 2,
              lg: 3,
              xl: 4,
            }}
          >
            {Features.map((feat, i) => (
              <Flex
                key={i}
                rounded={12}
                border="1px solid #ECEFF2"
                p={5}
                direction="column"
                justifyContent="space-between"
                // _hover={{
                //   transform:
                //     i % 2 === 0 ? "translateY(-5px)" : "translateY(5px)",
                //   boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                // }}
                h="13.75em"
                // minW="18.125rem"
                maxW={["full", "full", "18.125rem"]}
                layerStyle="base"
                // shadow="sm"
              >
                <Box>
                  <IconButton
                    bg="#F6F7F9"
                    aria-label="Feature Icon"
                    icon={<feat.icon color="#516278" />}
                    rounded="full"
                    w="3.75rem"
                    h="3.75rem"
                    pointerEvents="none"
                  />
                </Box>

                <Stack gap="4px">
                  <Text fontSize="16px" fontWeight={500} color="gray.800">
                    {feat.title}
                  </Text>
                  <Text fontSize="0.875rem" fontWeight={400} color="gray.400">
                    {feat.desc}
                  </Text>
                </Stack>
              </Flex>
            ))}
          </SimpleGrid>
        </Stack>
      </Stack>
    </Box>
  );
};

export default HomeGoalSection;

const Features = [
  {
    icon: UserInsideHex,
    title: "Snap & Get Answer",
    desc: "Snap & get Answer with our exclusive database curated for Nepalese Students.",
  },
  {
    icon: Book,
    title: "Chat with AI Mentor; BigB",
    desc: "Chat with your personal AI Learning Assistant BigB; trained over 5 Lakhs+ Questions & Answers.",
  },
  {
    icon: Forum,
    title: "Questions & Answers",
    desc: "Get Access to 30K+ Question & Answers from Past Papers, Model Sets & every books that exists.",
  },
  {
    icon: BookInsideBox,
    title: "Forum & Instant Doubt Solving",
    desc: "Get instant Answers to Forum Question with BigB, get Verified Answer from Braimy Experts.",
  },
  {
    icon: UsersGroup,
    title: "Learning Points & Streaks",
    desc: "Gain Learning Points and Streak with activities and get Exclusive offers & perks from Braimy.",
  },
  {
    icon: EWallet,
    title: "Student & Teacher Profile",
    desc: "Get your very own Braimy profile with Badges and personalization features to stand out in the Crowd.",
  },
  {
    icon: AcademicCap,
    title: "Personalized Learning",
    desc: "Manage your Preferences & engage in personalized recommendations according to your interest.",
  },
  // {
  //   icon: AndIcon,
  //   title: "& Many More",
  //   desc: "Your Seniors & Parents will say :  हाम्रो पालामा Braimy हुन्थ्यो भने हामीले A+ त हाँसी हाँसी ल्याउथेउ !",
  // },
];
