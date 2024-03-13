import { Box, Button } from "@mui/material";
import Image from "next/image";

import Slider from "@/component/Slider";
import discountImage from "../public/discountBanner.png";
import styles from "./page.module.css";
import CardContainer from "@/component/CardContainer";
import Category from "@/component/categories/Category";
import SimpleButton from "@/component/reusable/Button";

const App = () => {
  return (
    <>
      <Slider />

      <Category />

      <Box className="container_tm bm discountContainer">
        <Image alt="banner" src={discountImage} className={styles.img} />
        <Box className={styles.cards}>
          <CardContainer dc={true} />
        </Box>
        <SimpleButton
          sx={{
            width: { xl: "800px", lg: "600px", md: "400px", xs: "90%" },
            marginTop: "30px",
            color: "black",
          }}
          value={"Show More"}
          variant={"outlined"}
        />
      </Box>
    </>
  );
};

export default App;
