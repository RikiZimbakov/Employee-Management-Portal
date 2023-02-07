const home = {
  template: `<h1>Description:</h1>
  <div style="display: flex; justify-content: space-around">
   <p>Working FullStack Application With:

    <br> Backend: <img width="100" height="100"
    :src="PhotoPath+PhotoFileName"/></p>
    <p><br> Frontend: <img width="100" height="100"
      :src="PhotoPath+VueFileName"/></p>
      <p> <br> Tested Apis: <img width="150" height="100"
        :src="PhotoPath+PostmanFileName"/> </p></div>
`,

  data() {
    return {
      PhotoFileName: "NET_CORE.png",
      VueFileName: "Vue.png",
      PostmanFileName: "Postman.png",
      PhotoPath: variables.PHOTO_URL,
    };
  },
};
