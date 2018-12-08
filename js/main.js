
(()=>{

  const vm = new Vue({
      el: '#app',

      data: {
          mainmessage : "ROKU",
          kidsdata: []
          
      },

      created : function() {
        console.log("app");
          this.fetchData();
  },

      methods : {
          fetchData() {
              let targetURL = './includes/index.php';  // this will be a number (id)

       
              fetch(targetURL) // pass in the one or many query
              .then(res => res.json())
              .then(data => {
                console.log(data);
                      //this.textData(data[0]);
                      this.kidsdata =  data;
                  })
                      .catch(function(error) {
                      console.error(error);
                    
              });
            }
        
            }
  });

})();


