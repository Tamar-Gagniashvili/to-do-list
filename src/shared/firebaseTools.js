// objectList - id-ებისა და მასზე მინიჭებული ობიექტების სია
// innerObject - id-ზე მდებარე ობიექტი
// arrayItem მასივისთვის გამზადებული ობიექტი

export const convertFirebaseListToArray = (objectList) => {
    
    const objectsArray = Object.keys(objectList).map(
        (id) => {
            const innerObject = objectList[id];
            let arrayItem = { id: id }
            Object.keys(innerObject).forEach(
                propName => { arrayItem[propName] = innerObject[propName] })
            return arrayItem;
        });

    return objectsArray;
}