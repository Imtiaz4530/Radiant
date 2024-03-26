import { persist, action } from "easy-peasy";

const cartModel = persist({
  item: "",

  addText: action((state, payload) => {
    state.item = payload;
  }),

  remove: action((state, payload) => {
    state.item = "";
  }),
});

export default cartModel;
