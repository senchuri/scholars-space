import { motion, useAnimation, easeInOut } from "framer-motion";
import { Button, Text } from "@chakra-ui/react";
import { SVGAttributes, useEffect, useState } from "react";

interface BigBProps extends SVGAttributes<SVGSVGElement> {
  haveText?: boolean;
  text?: string;
}

const MotionButton = motion(Button);

const BigBWithAnimation = ({ haveText = false, ...props }: BigBProps) => {
  const [isIconVisible, setIsIconVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (isIconVisible) {
      controls.start({
        backgroundImage: [
          "linear-gradient(53deg, #1F4DE5 0%, #6821A8 64%)",
          "linear-gradient(53deg, #6821A8 0%, #1F4DE5 64%)",
        ],
        transition: { duration: 1, repeat: Infinity, repeatType: "mirror" },
      });
    }
  }, [isIconVisible, controls]);

  const pathVariants = {
    hidden: {
      pathLength: 0,
      fill: "transparent",
    },
    visible: {
      pathLength: 1,
      transition: {
        duration: 2,
        ease: easeInOut,
      },
    },
  };

  return (
    <MotionButton
      variant="ghost"
      px={2}
      py={1}
      bgGradient="linear(53deg, #DCE7FD 0%, #F4E8FF 64%)"
      borderRadius={8}
      _hover={{ textDecoration: "none" }}
      initial={{ backgroundPosition: "0% 0%" }}
      animate={{ backgroundPosition: "100% 100%" }}
      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
    >
      <motion.div
        style={{ width: 21, height: 20, position: "relative" }}
        initial={{ background: "none" }}
        animate={controls}
        // bg="transparent"
      >
        {/* @ts-ignore */}
        <motion.svg
          width={21}
          height={20}
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <defs>
            <linearGradient
              id="paint0_linear_22_12884"
              x1="4.43457"
              y1="18.3341"
              x2="20.7811"
              y2="9.29274"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1F4DE5" />
              <stop offset="0.64" stopColor="#6821A8" />
            </linearGradient>
          </defs>
          <motion.path
            d="M5.57492 11.0667H8.14992V17.0667C8.14992 18.4667 8.90826 18.7501 9.83326 17.7001L16.1416 10.5334C16.9166 9.65841 16.5916 8.93341 15.4166 8.93341H12.8416V2.93341C12.8416 1.53341 12.0833 1.25008 11.1583 2.30008L4.84992 9.46674C4.08326 10.3501 4.40826 11.0667 5.57492 11.0667Z"
            stroke="url(#paint0_linear_22_12884)"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            onAnimationComplete={() => setIsIconVisible(true)}
          />
        </motion.svg>
      </motion.div>
      {haveText && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0 }}
          style={{ paddingBottom: "2px" }}
        >
          <Text
            fontWeight={400}
            fontSize="1rem"
            css={{
              background:
                "var(--Gradient-solid, linear-gradient(53deg, #1F4DE5 0%, #6821A8 64%))",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundSize: "200% 200%",
              animation: "gradientAnimation 2s ease infinite",
            }}
          >
            {props?.text ?? "BigB"}
          </Text>
        </motion.div>
      )}
    </MotionButton>
  );
};

export default BigBWithAnimation;
