  /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
const{ MongoClient } = require('mongodb');
async function main(){
    const uri = "mongodb+srv://jun-wang:Northeastern2022@cluster0.ucdoc.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    try{
        await client.connect();

        //create a single document
        // await createListing(client, {
        //     name: "The White House",
        //     summary: "The White House is the official residence and principal workplace of the President of the United States. It is located in the middle of the country's capital, Washington, D.C., and is often called the \"House of Representatives.\"",
        //     bedrooms: 1,
        //     bathrooms: 1,
        //     location: "Washington, D.C.",
        // });

        //create multiple documents
        // await creatMultiple(client, [{
        //     name: "The White House",
        //     summary: "The White House is the official residence and principal workplace of the President of the United States. It is located in the middle of the country's capital, Washington, D.C., and is often called the \"House of Representatives.\"",
        //     bedrooms: 1,
        //     bathrooms: 1,
        //     beds:2,
        //     location: "Washington, D.C.",
        // }, {
        //     name: "The Pentagon",
        //     summary: "The Pentagon is the United States' space-defence and national security agency. It is located in the middle of the country's capital, Washington, D.C., and is often called the \"House of Representatives.\"",
        //     bedrooms: 1,
        //     bathrooms: 1,
        //     location: "Washington, D.C.",
        // }]);

        //read a single document
       // await findOne(client, "The White House");


       //read multiple documents 
        // await findListingWithMinimumBedrooms(client, {
        //     minimumBedrooms: 2,
        //     minimumBathrooms: 1,
        //     maximumNumberOfResults: 4
        // });

        //update a single document
        //await updateListingByName(client, "The White House", {bedRooms: 6, bed: 5});


        //update by upsert()
        await upsertListingByName(client, "Cozy Cottage", {name: "Cozy Cottage", bedRooms: 2, bed: 3});


        console.log("Connected to MongoDB");
    } catch(e){
        console.log(e);
    } finally{
        client.close();
    }
}
main().catch(console.error);
//CRUD 
//Create a single document
async function createListing(client, newListing){
    const result = await client.db("sample_airbnb").collection("listingsAndReviews")
    .insertOne(newListing);
    console.log(`New listing created with the following id: ${result.insertedId}`);
}


//Create a multiple document
async function creatMultiple(client, newListings){
    const result = await client.db("sample_airbnb").collection("listingsAndReviews")
    .insertMany(newListings);
    console.log(`${result.insertedCount} new listings created with the following id(s):`);
    console.log(result.insertedIds);
}

//Read a single document 

async function findOne(client, nameOfListing){
    const result = await client.db("sample_airbnb").collection("listingsAndReviews")
    .findOne({name: nameOfListing});
    if (result){
        console.log(`Found listing with the following id: ${result._id}`);
        console.log(result);
    } else{
        console.log(`No listing found with the name: ${nameOfListing}`);
    }
    
}
//Read multiple documents find()
async function findListingWithMinimumBedrooms
(client, {
    minimumBedrooms = 0,
    minimumBathrooms = 0,
    maximumNumberOfResults = Number.MAX_SAFE_INTEGER
} ={}){
    const cursor = await client.db("sample_airbnb").collection("listingsAndReviews")
    .find({
        bedrooms: {$gte: minimumBedrooms},
        bathrooms: {$gte: minimumBathrooms}
    }).sort({last_review: -1})
    .limit(maximumNumberOfResults);

    const results = await cursor.toArray();
    if (results.length > 0){
        console.log(`Found ${results.length} listings with at least ${minimumBedrooms} bedrooms and at least ${minimumBathrooms} bathrooms`);
        console.log(results);
    } else{
        console.log(`No listings found with at least ${minimumBedrooms} bedrooms and at least ${minimumBathrooms} bathrooms`);
    }
}
// Update a single document updateOne()
async function updateListingByName(client, nameOfListing, newListing){
    const result = await client.db("sample_airbnb").collection("listingsAndReviews")
    .updateOne({name: nameOfListing}, {$set: newListing});
    console.log(`${result.matchedCount} document(s) matched the filter`);
    console.log(`${result.modifiedCount} document(s) was/were updated`);
}

//update by upsert()
//check if the document exists, if not, insert the document
async function upsertListingByName(client, nameOfListing, newListing){
    const result = await client.db("sample_airbnb").collection("listingsAndReviews")
    .updateOne({name: nameOfListing}, {$set: newListing}, {upsert: true});
    console.log(`${result.matchedCount} document(s) matched the filter`);
    if (result.upsertedCount > 0) {
        console.log( `one document was upserted with the id ${result.upsertedId}`);
    } else {
        console.log(`${result.modifiedCount} document(s) was/were updated`);
    }
}


async function listDatabaseNames(client){
    const databasesList = await client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}
