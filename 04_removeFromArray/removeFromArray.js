const removeFromArray = function () {
    let allArguments = [...arguments];
    let output = allArguments[0];
    let argumentsToRemove = allArguments.splice(1, allArguments.length - 1);

    for (itemIndex = 0; itemIndex < output.length; itemIndex++) {
        for (removeIndex = 0; removeIndex < argumentsToRemove.length; removeIndex++) {
            if (output[itemIndex] === argumentsToRemove[removeIndex]) {
                output.splice(itemIndex, 1);
                itemIndex--;
            }
        }
    }
    return output;
};

// Do not edit below this line
module.exports = removeFromArray;
