export default () => ({
  design: {
    /** Styling */
    canvas: {
      bgColor: "#333333",
    },

    body: {
      bgColor: "#df795e",
    },

    content: {
      heading: "#ffffff",
      text: "#ffffff",
      stars: "#c75943",
    },

    form: {
      input: "#ffffff",
      inputText: "#333333",
      btn: "#000000",
    },
  },
  content: {
    heading: `All the text and elements in this popup should be editable and dragable`,
    stars: 3,
    footerText: "No credit card required. No Surprises",
    emailPlaceholder: "Email",
    btnText: "Signup Now",
  },
  order: [
    {
      order: 1,
      id: "pt-icons",
    },
    {
      order: 2,
      id: "pt-heading",
    },
    {
      order: 3,
      id: "pt-input",
    },
    {
      order: 4,
      id: "pt-button",
    },
    {
      order: 5,
      id: "pt-footer",
    },
  ],
});
