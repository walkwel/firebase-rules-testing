//const rules2 = targaryen.json.loadSync("database.rules.json");
    const assert = require("assert");
    //const targaryen = require("targaryen");
    const targaryen = require("targaryen/plugins/jest");
    //let rules = require("./database.rules.json");
    // This command allows you put newlines and comments in your rules.
    //const rules = targaryen.json.loadSync("./src/database.rules.json");
    //console.log(rules);
    expect.extend({
      toAllowRead: targaryen.toAllowRead,
      toAllowUpdate: targaryen.toAllowUpdate,
      toAllowWrite: targaryen.toAllowWrite
    });
    it("Test dummy", function () {
        expect(2+2).toEqual(4);
    })
    /*describe("my security rules", function() {
      it("should allow authenticated user to read all data", function() {
        const data = { foo: 1 };
        const user1 = { uid: "user1" };
    
        const database = targaryen.getDatabase(rules, data);
    
        expect(database.as(user1)).toAllowRead("/foo");
        expect(database.as(null)).not.toAllowRead("/");
    
        expect(database.as(user1)).toAllowWrite("/foo");
    
        // You can also check for mutations.
        const { allowed, newDatabase, info } = database.as(user1).write("/foo", 2);
        //console.log("allowed", allowed);
        //console.log("New database", newDatabase);
        expect(newDatabase.root.foo.$value()).toEqual(2);
        expect(newDatabase.rules).toEqual(database.rules);
        expect(newDatabase.auth).toEqual(user1);
    
        // Expect that users can only write to their own userKey nodes.
        // null users should not be able to write.
        // auth users should be able to write if node matches.
        // auth users that don't match should not be allowed to write.
      });
    });*/
    
    /*describe("User security rules", function() {
      let data;
      let database;
      let user1 = { uid: "user1" };
      let user2 = { uid: "user2" };
    
      beforeEach(() => {
        data = {
          users: {
            user1: "Chris",
            user2: "Tom"
          },
          messages: {
            first: { owner: "user2", message: "sweet" },
            second: { owner: "user1", message: "awesome" }
          }
        };
        database = targaryen.getDatabase(rules, data);
      });
    
      it("should allow authenticated users to read user data", function() {
        expect(database.as(user1)).toAllowRead("/users");
        expect(database.as(null)).not.toAllowRead("/users");
      });
    
      it("should allow authenticated users to write their user data", function() {
        expect(database.as(user1)).toAllowWrite("/users/user1");
        expect(database.as(user2)).not.toAllowWrite("/users/user1");
        expect(database.as(user2)).toAllowWrite("/users/user2");
      });
    
      it("messages should have an owner.", function() {
        let newMessage = { message: "what fun" };
        const { allowed, newDatabase, info } = database
          .as(user1)
          .write("/messages/one", newMessage);
        expect(allowed).toEqual(false);
        expect(newDatabase.root.messages.one.message.$value()).toEqual("what fun");
      });
    
      it("should allow authenticated users to write their own messages", function() {
        let newMessage = { owner: "user1", message: "what fun" };
        const { allowed, newDatabase, info } = database
          .as(user1)
          .write("/messages/messageOne", newMessage);
        expect(allowed).toEqual(true);
        console.log(info);
        expect(newDatabase.root.messages.messageOne.message.$value()).toEqual(
          "what fun"
        );
        expect(newDatabase.root.messages.messageOne.owner.$value()).toEqual(
          "user1"
        );
      });
    
      it("should not allow authenticated users to write others' messages", function() {
        let newMessage = { owner: "user1" };
        const { allowed, newDatabase, info } = database
          .as(user2)
          .write("/messages/temp", newMessage);
        expect(allowed).toEqual(false);
      });
    
      it("should not allow users to edit others' messages", function() {
        let result = database.as(user1).write("/messages/first/message", "fun");
        expect(result.allowed).toEqual(false);
    
        let newMessage = { owner: "user1", message: "what fun" };
        const { allowed, newDatabase, info } = database
          .as(user1)
          .write("/messages/first", newMessage); // first has user2 owner
        expect(allowed).toEqual(false);
        //console.log(result.info)
    
        result = database.as(user2).write("/messages/first/message", "fun");
        expect(result.allowed).toEqual(true);
      });
    });*/
    
