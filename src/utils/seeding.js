// Seed values into the database

const { createPost, getPost } = require("../controllers/PostController");
const { createUser } = require("../controllers/UserController");
const { dbConnect, dbDisconnect } = require("./database");

async function seed() {
    await dbConnect();
    console.log("Connected to the Database. Seeding now...");

    let newUser = await createUser("admin", "admin@example.com", true);

    console.log(newUser.id);

    await createPost(
        "Important Post", 
        [
            {
                languageCode: "en",
                content: "This is really important"
            },
            {
                languageCode: "ge",
                content: "iouvnoionoaedn"
            }
        ],
        newUser.id
    );
    
    await createPost(
        "No so Important Post", 
        [
            {
                languageCode: "en",
                content: "This is NOT important"
            },
            {
                languageCode: "ge",
                content: "iouvnoion njjj jjj jjsh oaedn"
            }
        ], 
        newUser.id
    );

    let getPostResult = await getPost({
        "content.languageCode": "en"
     });
    console.log(getPostResult);

    console.log("Seeding complete. Disconnecting...");

    await dbDisconnect();

    console.log("Disconnected!");
}

seed();

// dbConnect().then(() => {
//     console.log("Connected to the Database. Seeding now...");
//     seed();
// })