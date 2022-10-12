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
  async createItem({ rootGetters }, { Slug, Name, Code }) {
    const data = {
      popupStyle: rootGetters["popup/getPopupStyle"],
      popupContent: rootGetters["popup/getPopupContent"],
      popupItems: rootGetters["popup/getPopupOrder"],
    };

    const paramObj = {
      Name,
      Slug,
      Style: this.popupStyle,
      Content: this.popupContent,
      Order: this.popupItems,
      Code,
    };
    paramObj.Code = `(function(){
      let e = ${JSON.stringify(data)}
      ${paramObj.Code.replace("function(){const", "function initFunc(){const")}
      initFunc()
    })();`;

    try {
      const { data } = await axios.post("/popups", {
        data: paramObj,
      });
      const { Code: snippet, Slug: fileTitle } =
        ((data || {}).data || {}).attributes || {};

      // const formData = new FormData();
      // for (let key in paramObj) {
      //   formData.append(key, paramObj[key]);
      // }

      const res = await axios.post(
        "/process-form.php",
        { snippet, fileTitle: `${fileTitle}.js`, popupName: this.popupName },
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          baseURL: "https://proj-021.azurewebsites.net",
        }
      );
      return { isSuccess: true, res };
    } catch (error) {
      return { isSuccess: false, error };
    }
  },
};
