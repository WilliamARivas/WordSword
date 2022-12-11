const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      email: "",
      firstName: "",
      textFile: null, //creating storage for the files we will work with and return
      textArray: null,
      displayText: null,
      message: null,
      verifiedUser: false,
      newUser: false,
      token: "",
      savedData: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
      checkVerifiedUser: () => {
        //can probably delete later use for something earlier on
        const store = getStore();
      },
      setFile: (fileName) => {
        //needs to call API to send it to backend
        setStore({ textFile: fileName });
      },
      handlePaste: (txt) => {
        setStore({ textArray: txt });
      },
      signOut: () => {
        //resetting store values
        setStore({
          token: "",
          verifiedUser: false,
          email: "",
          newUser: false,
          firstName: "",
        });
      },
      getSavedData: async () => {
        await fetch(process.env.BACKEND_URL + "/api/info", {
          method: "GET",
          headers: {},
          //redirect: "follow",
        })
          .then((response) => response.json())
          .then((result) => {
            console.log("this is the saved data: ", result);
            setStore( { savedData: result} );
          })
          .catch((err) => {
            //error checking
            console.log("this is the saved data error: ", err);
          });
      },
      createUser: async (fName, lName, mail, pass) => {
        await fetch(process.env.BACKEND_URL + "/api/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: fName,
            lastName: lName,
            email: mail,
            password: pass,
            is_active: true,
          }),
          // /* redirect: "follow", */
        })
          .then((response) => response.json())
          .then((result) => {
            //set store value newUser to conditionally welcome first timers
            setStore({ newUser: true });
            //console.log("this is the create user result", result);
          })
          .catch((err) => console.log("this is the create user error: ", err));
      },
      getToken: async (email, password) => {
        await fetch(process.env.BACKEND_URL + "/api/token", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
          redirect: "follow",
        })
          .then((response) => response.json())
          .then((result) => {
            //console.log("this is the token response: ", result);
            setStore({ token: result.access_token });
            //now that we have access token we call our
            //function to get JWT function and set user to verified
            getActions().getVerified();
          })
          .catch((err) => console.log("this is the token error: ", err));
      },
      getVerified: async () => {
        await fetch(process.env.BACKEND_URL + "/api/protected", {
          method: "GET",
          headers: {
            Authorization: "Bearer " + getStore().token,
          },
          redirect: "follow",
        })
          .then((response) => response.json())
          .then((result) => {
            const store = getStore();
            console.log("before verified: ", store);
            //checking reponse
            //console.log("this is the get verfied response: ", res);
            //setting verfifiedUser to true
            setStore({
              verifiedUser: true,
              firstName: result.firstName,
              email: result.email,
            });
            const store2 = getStore();
            console.log("after verified: ", store2);
            getActions().getSavedData();
            const store3 = getStore();
            console.log("after getting saved data: ", store3);
          })
          .catch((err) => {
            //error checking
            console.log("this is the get verified error: ", err);
          });
      },
      sliceText: () => {
        //placehold
        const resultText = [];
        const newArray = store.textArray.split(/\r?\n/); //splits text by new line to get paragraphs
        for (let i = 0; i < newArray.length; i++) {
          //for each paragraph
          const currentParagraph = newArray[i].split(/. /); //create an array containing each line in a paragraph
          for (let j = 0; j < currentParagraph.length; j++) {
            //for each line in the paragraph
            let newString = currentParagraph[j];
            if (j == 0) {
              if (newString < 50) {
                console.log("Entered short condition");
                resultText.push(newString + ".");
                resultText.push(currentParagraph[j + 1] + ".");
              } else {
                resultText.push(newString + ".");
              }
            } else if (j == currentParagraph.length - 1) {
              if (newString < 50) {
                console.log("Entered short condition");
                resultText.push(currentParagraph[j - 1] + ".");
                resultText.push(newString + ".");
              } else {
                resultText.push(newString + ".");
              }
            }
            console.log("End j loop");
          } //ends j loop
        } //ends i loop
        console.log(resultText);
        setStore({ displayText: resultText });
      }, //closes slice text
    },
  };
};
export default getState;
