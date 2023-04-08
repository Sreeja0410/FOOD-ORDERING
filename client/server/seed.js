const { faker } = require('@faker-js/faker');
const MongoClient = require("mongodb").MongoClient;
const _ = require("lodash");

async function main() {
    const uri = "mongodb://localhost://27017";
    const client = new MongoClient(uri);

    try {
        await client.connect();

        const productsCollection = client.db("food-ordering").collection("products");
        const categoriesCollection = client.db("food-ordering").collection("categories");
        let categories = ['Barista', 'Main Canteen', 'Ram Dhani', 'Amul Canteen'].map((category) => { return { name: category } });
        await categoriesCollection.insertMany(categories);

        let imageUrls = [
            'https://www.readersdigest.ca/wp-content/uploads/2019/11/cat-10-e1573844975155.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/a/a5/Red_Kitten_01.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/a/a5/Red_Kitten_01.jpg',
        ]
        let products = [];
        let items=['pizza','shake']
        let main_cats= ['Barista', 'Main Canteen', 'Ram Dhani', 'Amul Canteen']
        for(let cat in main_cats ){
          let prod1={
            name:`${main_cats[cat]}_pizza`,
            category:main_cats[cat],
            price:2,
            imageUrl:'https://www.sharmispassions.com/wp-content/uploads/2020/03/WhiteSaucePasta6-500x375.jpg'
          }
          let prod2={
            name:`${main_cats[cat]}_shake`,
            category:main_cats[cat],
            price:2,
            imageUrl:'https://static.toiimg.com/photo/84226147.cms'
          }
          products.push(prod1);
          products.push(prod2);
        }
        await productsCollection.deleteMany({})
        await productsCollection.insertMany(products);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main();
