var JSONAPIDeserializer = require('jsonapi-serializer').Deserializer;

class Deserialize {
    relationships(payload) {
        return new JSONAPIDeserializer({
            keyForAttribute: 'camelCase'
        }

        ).deserialize(payload, function (err, data) {
            return data
        });
    }
}

export const DeserializeService = new Deserialize();
