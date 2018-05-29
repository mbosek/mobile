import { deserialize } from 'jsonapi-deserializer';

class Deserialize {
    simple(payload) {
        let obj = deserialize(payload);
        return obj;
    }
}

export const DeserializeService = new Deserialize();
