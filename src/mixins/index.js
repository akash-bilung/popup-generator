export default {
  methods: {
    slugify(string) {
      return string.toLowerCase().replace(/ /g, "-");
    },
  },
};
