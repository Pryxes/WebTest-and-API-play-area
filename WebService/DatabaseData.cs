using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

// this part basically saiys to ignore anything
// that is not keys or values properties
[BsonIgnoreExtraElements] //twash extra elements basically

// class holds the data expected from the database
// [BsonElement("<string>")] means expect this kind of name
// as the property is overwritten under different name
// I simply did both the same just for contingency sake
public class DatabaseData {

    /*[BsonId]
    public ObjectId id { get; set; }*/
    
    [BsonElement("key")]
    public string key { get; set; }

    [BsonElement("value")]
    public string value { get; set; }
}