import { Box } from "@mui/material";
import Image from "next/image";

import Slider from "@/component/Slider";
import discountImage from "../public/discountBanner.png";
import styles from "./page.module.css";
import Category from "@/component/categories/Category";

const App = () => {
  return (
    <>
      <Slider />

      <Category />

      <Box className="container_tm">
        <Image alt="banner" src={discountImage} className={styles.img} />
      </Box>
    </>
  );
};

export default App;
