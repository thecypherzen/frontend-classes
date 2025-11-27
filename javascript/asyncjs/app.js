// Async JS

//console.log("first thing");

//// iffe - Immediately Executable Function Expression
//((subject) => {
//  console.log(subject, "is called");
//  setTimeout(() => {
//    console.log(`This is ${subject}`);
//  }, 10000);
//})("Second Thing");

//// iffe - Immediately Executable Function Expression
//((subject) => {
//  console.log("third thing is called");
//  setTimeout(() => {
//    console.log(`This is ${subject}`);
//  }, 2000);
//})("Third Thing");

// Promises
//const promise = new Promise((resolve, reject) => {
//  const num = Math.floor(Math.random() * 10) % 3;
//  console.log("Number:", num);
//  setTimeout(() => {
//    if (!!!num) {
//      reject("First promise failed woefully");
//    } else {
//      resolve("First promise resolved successfully");
//    }
//  }, 5000);
//});

//promise
//  .then((successResult) => {
//    console.log("\nPROMISE RESULT:", successResult);
//  })
//  .catch((error) => {
//    console.log("an error occured:", error);
//  });

// promises with functions
//function makeRequest() {
//  const promise = new Promise((resolve, reject) => {
//    const num = Math.floor(Math.random() * 10) % 3;
//    console.log("making request to external server....");
//    setTimeout(() => {
//      if (!!!num) {
//        reject("Success");
//      } else {
//        resolve("Request Failed");
//      }
//    }, 5000);
//  });
//  return promise;
//}

//function loadData() {
//  const data = makeRequest();
//  data
//    .then((res) => {
//      console.log(res);
//    })
//    .catch((err) => {
//      console.log(err);
//    });
//}

//async function loadData() {
//  try {
//    const data = await makeRequest();
//    console.log(data);
//  } catch (error) {
//    console.log("error:", error);
//  }
//}

//loadData();

//function fetchData(url) {
//  const data = fetch(url);
//  data
//    .then((res) => {
//      const json = res.json();
//      json
//        .then((res) => {
//          console.log("fetched Data", res);
//        })
//        .catch((err) => {
//          console.error("json conversion error:", err);
//        });
//    })
//    .catch((err) => {
//      console.error("error:", err);
//    });
//	return data;
//}

async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function loadData(url) {
  const data = await fetchData(url);
  console.log(data);
}

//loadData("./data.json");
//loadData("https://opentdb.com/api.php?amount=50&type=multiple");
//loadData("https://jsonplaceholder.typicode.com/posts");
//loadData("https://jsonplaceholder.typicode.com/users/1");
