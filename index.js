const mongoose = require('mongoose');

//to connect to the mongo database
main().then(() => {
    console.log("connection successful");
})
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');

}

//creating a schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

//creating a model
const User = mongoose.model("User", userSchema);

//inserting single data
const user1 = new User({ name: "Adam", email: "adam123@gmail.com", age: 18 });
const user2 = new User({ name: "Eve", email: "eve1408@gmail.com", age: 21 });
user1.save();
user2
    .save()
    .then((res) => {
        console.log(res)
    })
    .catch(err => console.log(err));

//inserting many values
User.insertMany([
    {name: "Bob", email: "bob123@gmail.com", age: 25},
    {name: "Donald", email: "donald123@gmail.com", age: 28},
    {name: "Casey", email: "casey123@gmail.com", age: 38}
]).then((data) => {console.log(data)});

//finding the data
User.find({}).then(res => {
    console.log(res);
});

User.find({age:{$gte:25}}).then((res) =>{
    console.log(res);
});

//updating the document
User.updateOne({_id: "6805c81cda83c79c24695d0d"}, {age: 24, name: "Harry", email: "harry123@gmail.com"}).then(res =>{
    console.log(res);
})
.catch(err => {
    console.log(err);
});
User.updateOne({_id: "6805c8c0d62e1efcc9395921"}, {age: 20, name: "Tom", email: "tom123@gmail.com"}).then(res =>{
    console.log(res);
})
.catch(err => {
    console.log(err);
});
User.updateOne({_id: "6805ca1ad157f6cbc493f1b3"}, {age: 47, name: "coco", email: "coco123@gmail.com"}).then(res =>{
    console.log(res);
})
.catch(err => {
    console.log(err);
});

//deleting the document
User.deleteOne({name:"Adam"}).then(res => {
    console.log(res);
});
User.deleteMany({age: {$gt: 18}}).then(res => {
    console.log(res);
});




