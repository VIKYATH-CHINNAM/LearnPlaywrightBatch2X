const config = {};
config.baseURL = "https://www.google.com";
config.timeout = 5000;
config.headless = false;                        //another way to create objects

console.log(config);

delete config.timeout;
console.log(config);

if (config.baseURL === "https://www.google.com") {
    console.log("execute the code");
};


const config2 = {                           //normal creation of objects
    baseURL: "htps://www.facebook.com",
    timeout: 2000,
    headless: false
};                                  