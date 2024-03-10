import { Box } from "@mui/material";
import Image from "next/image";

import Slider from "@/component/Slider";
import discountImage from "../public/discountBanner.png";

const App = () => {
  return (
    <>
      <Slider />

      <Box>
        <Image alt="banner" src={discountImage} />
      </Box>
    </>
  );
};

export default App;
