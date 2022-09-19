// implement the [1,[2,3],[[4],[5,6]]] => [1,2,3,4,5,6]
// if the element is [1,[2]], flatten return [1,2]; it ensure the concated element is one-dimension array
function flatten(arr) {
    return arr.reduce((prev, item) => {
        return prev.concat(Array.isArray(item)? flatten(prev) : prev);
    }, []);
}

console.log(flatten([1,[2,3],[[4],[5,6]]]));