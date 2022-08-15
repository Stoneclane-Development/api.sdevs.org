const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 2000;

app.use(bodyParser.json());
app.use(cors());


// <API INFO> //
app.get("/", (req, res) => {
    res.json({
        hello: "world!",
        version: 1,
        developers: ["JanjyTapYT#0001", "Trigg3r Happ8#0001"],
        });
});

app.get("/v1", (req, res) => {
    res.json({
        hello: "world!",
        version: 1,
        developers: ["JanjyTapYT#0001", "Trigg3r Happ8#0001"],
        });
});

app.get("/api", (req, res) => {
    res.json({
        hello: "world!",
        version: 1,
        developers: ["JanjyTapYT#0001", "Trigg3r Happ8#0001"],
        });
});

app.get("/api/v1", (req, res) => {
    res.json({
        hello: "world!",
        version: 1,
        developers: ["JanjyTapYT#0001", "Trigg3r Happ8#0001"],
        });
});
// </API INFO> //

// ----------------------------------------------------------------------------------------------------------------------- //
                                                // GiveAways Banners //

// GiveAways Banner 1 //
app.use('/v1/images/GiveAways-Bot/Banners/1', express.static(`${process.cwd()}/src/images/GiveAways-Bot/Banners` + "/1" + ".png"));
// GiveAways Banner 1 //

// GiveAways Banner 2 //
app.use('/v1/images/GiveAways-Bot/Banners/2', express.static(`${process.cwd()}/src/images/GiveAways-Bot/Banners` + "/2" + ".png"));
// GiveAways Banner 2 //

// ----------------------------------------------------------------------------------------------------------------------- //
                                                 // GiveAways Logos //

// GiveAways Logo 1 //
app.use('/v1/images/GiveAways-Bot/Logos/1', express.static(`${process.cwd()}/src/images/GiveAways-Bot/Logos` + "/1" + ".png"));
// GiveAways Logo 1 //

// GiveAways Logo 2 //
app.use('/v1/images/GiveAways-Bot/Logos/2', express.static(`${process.cwd()}/src/images/GiveAways-Bot/Logos` + "/2" + ".png"));
// GiveAways Logo 2 //

// GiveAways Logo 3 //
app.use('/v1/images/GiveAways-Bot/Logos/2', express.static(`${process.cwd()}/src/images/GiveAways-Bot/Logos` + "/3" + ".png"));
// GiveAways Logo 3 //

// ----------------------------------------------------------------------------------------------------------------------- //
                                                 // Bluefox Resources Banners //

// Bluefox Resources Banner 1 //
app.use('/v1/images/Bluefox-Resources/Banners/1', express.static(`${process.cwd()}/src/images/Bluefox-Resources/Banners` + "/1" + ".png"));
// Bluefox Resources Banner 1 //

// Bluefox Resources Banner 2 //
app.use('/v1/images/Bluefox-Resources/Banners/1', express.static(`${process.cwd()}/src/images/Bluefox-Resources/Banners` + "/2" + ".png"));
// Bluefox Resources Banner 2 //

// ----------------------------------------------------------------------------------------------------------------------- //
                                                 // Bluefox Resources Logos //

// Bluefox Resources Logo 1 //
app.use('/v1/images/Bluefox-Resources/Logos/1', express.static(`${process.cwd()}/src/images/Bluefox-Resources/Logos` + "/1" + ".png"));
// Bluefox Resources Logo 1 //

// Bluefox Resources Logo 2 //
app.use('/v1/images/Bluefox-Resources/Logos/2', express.static(`${process.cwd()}/src/images/Bluefox-Resources/Logos` + "/2" + ".png"));
// Bluefox Resources Logo 2 //

// Bluefox Resources Logo 3 //
app.use('/v1/images/Bluefox-Resources/Logos/3', express.static(`${process.cwd()}/src/images/Bluefox-Resources/Logos` + "/3" + ".png"));
// Bluefox Resources Logo 3 //

// ----------------------------------------------------------------------------------------------------------------------- //
                                                 // Stoneclane Studios Banners //

// Stoneclane Studios Banner 1 //
app.use('/v1/images/Stoneclane-Studios/Banners/1', express.static(`${process.cwd()}/src/images/Stoneclane-Studios/Banners` + "/1" + ".png"));
// Stoneclane Studios Banner 1 //

// ----------------------------------------------------------------------------------------------------------------------- //
                                                 // Stoneclane Studios Logos //

// Stoneclane Studios Logo 1 //
app.use('/v1/images/Stoneclane-Studios/Logos/1', express.static(`${process.cwd()}/src/images/Stoneclane-Studios/Logos` + "/1" + ".png"));
// Stoneclane Studios Logo 1 //

// Stoneclane Studios Logo 2 //
app.use('/v1/images/Stoneclane-Studios/Logos/2', express.static(`${process.cwd()}/src/images/Stoneclane-Studios/Logos` + "/2" + ".png"));
// Stoneclane Studios Logo 2 //

// Stoneclane Studios Logo 3 //
app.use('/v1/images/Stoneclane-Studios/Logos/3', express.static(`${process.cwd()}/src/images/Stoneclane-Studios/Logos` + "/3" + ".png"));
// Stoneclane Studios Logo 3 //

// Stoneclane Studios Logo 4 //
app.use('/v1/images/Stoneclane-Studios/Logos/4', express.static(`${process.cwd()}/src/images/Stoneclane-Studios/Logos` + "/4" + ".png"));
// Stoneclane Studios Logo 4 //

// Stoneclane Studios Logo 5 //
app.use('/v1/images/Stoneclane-Studios/Logos/5', express.static(`${process.cwd()}/src/images/Stoneclane-Studios/Logos` + "/5" + ".png"));
// Stoneclane Studios Logo 5 //

// ----------------------------------------------------------------------------------------------------------------------- //
                                                 // Stoneclane-xyz Banners //

// Stoneclane-xyz Banner 1 //
app.use('/v1/images/Stoneclane-xyz/Banners/1', express.static(`${process.cwd()}/src/images/Stoneclane-xyz/Banners` + "/1" + ".png"));
// Stoneclane-xyz Banner 1 //

// Stoneclane-xyz Banner 2 //
app.use('/v1/images/Stoneclane-xyz/Banners/2', express.static(`${process.cwd()}/src/images/Stoneclane-xyz/Banners` + "/2" + ".png"));
// Stoneclane-xyz Banner 2 //

// ----------------------------------------------------------------------------------------------------------------------- //
                                                 // Stoneclane-xyz Logos //

// Stoneclane-xyz Logo 1 //
app.use('/v1/images/Stoneclane-xyz/Logos/1', express.static(`${process.cwd()}/src/images/Stoneclane-xyz/Logos` + "/1" + ".png"));
// Stoneclane-xyz Logo 1 //

// Stoneclane-xyz Logo 2 //
app.use('/v1/images/Stoneclane-xyz/Logos/2', express.static(`${process.cwd()}/src/images/Stoneclane-xyz/Logos` + "/2" + ".png"));
// Stoneclane-xyz Logo 2 //

// ----------------------------------------------------------------------------------------------------------------------- //
                                                 // TrestHost Banners //

// TrestHost Banner 1 //
app.use('/v1/images/TrestHost/Banners/1', express.static(`${process.cwd()}/src/images/TrestHost/Banners` + "/1" + ".png"));
// TrestHost Banner 1 //

// TrestHost Banner 2 //
app.use('/v1/images/TrestHost/Banners/2', express.static(`${process.cwd()}/src/images/TrestHost/Banners` + "/2" + ".png"));
// TrestHost Banner 2 //

// TrestHost Banner 3 //
app.use('/v1/images/TrestHost/Banners/3', express.static(`${process.cwd()}/src/images/TrestHost/Banners` + "/3" + ".png"));
// TrestHost Banner 3 //

// ----------------------------------------------------------------------------------------------------------------------- //
                                                 // TrestHost Logos //

// TrestHost Logo 1 //
app.use('/v1/images/TrestHost/Logos/1', express.static(`${process.cwd()}/src/images/TrestHost/Logos` + "/1" + ".png"));
// TrestHost Logo 1 //

// TrestHost Logo 2 //
app.use('/v1/images/TrestHost/Logos/2', express.static(`${process.cwd()}/src/images/TrestHost/Logos` + "/2" + ".png"));
// TrestHost Logo 2 //

// TrestHost Logo 3 //
app.use('/v1/images/TrestHost/Logos/3', express.static(`${process.cwd()}/src/images/TrestHost/Logos` + "/3" + ".png"));
// TrestHost Logo 3 //

// TrestHost Logo 4 //
app.use('/v1/images/TrestHost/Logos/4', express.static(`${process.cwd()}/src/images/TrestHost/Logos` + "/4" + ".png"));
// TrestHost Logo 4 //



app.listen(port, () => {
    console.log(`(!) Started Port: ${port}`);
}).on("error", (err) => {
    console.log(err);
})