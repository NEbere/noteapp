export class schemaParser{
    static parse(path, obj) {
        return path.split('.').reduce(function(prev, curr) {
            return prev ? prev[curr] : undefined
        }, obj || self)
    }
    static flattenObject (ob) {
        let toReturn = {};

        for (const i in ob) {
          if (!ob.hasOwnProperty(i)) { continue; }

          if ((typeof ob[i]) === 'object') {
            let flatObject = this.flattenObject(ob[i]);
            for (let x in flatObject) {
              if (!flatObject.hasOwnProperty(x)) { continue; }

              toReturn[i + '.' + x] = flatObject[x];
            }
          } else {
            toReturn[i] = ob[i];
          }
        }
        return toReturn;
      }
      static getNestedPropertyValue(path, obj) {
        return path.split('.').reduce(function(prev, curr) {
            
            return prev ? prev[curr] : undefined;
        }, obj || self);
    }
}
