import axios from "axios";

export default {
  async fetchItems({ commit }) {
    try {
      const { data } = await axios.get("/popups");
      const items = (data || {}).data || {};
      console.log(items);
      commit("setItems", items);
    } catch (error) {
      return error;
    }
  },
};
