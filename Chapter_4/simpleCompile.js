const fs = require ('fs');
const solc = require ('solc');

const input = fs.readFileSync('Chapter_4/HelloWorldContract.sol');
const output = solc.compile(input.toString(), 1);
for (var contractName in output.contracts){
 console.log(contractName + ': ' + output.contracts[contractName].bytecode)
}


// :helloWorldContract: 6060604052341561000f57600080fd5b5b6101488061001f6000396000f300606060405263ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416630c49c36c811461003d575b600080fd5b341561004857600080fd5b6100506100c8565b60405160208082528190810183818151815260200191508051906020019080838360005b8381101561008d5780820151818401525b602001610074565b50505050905090810190601f1680156100ba5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6100d061010a565b60408051908101604052600b81527f48656c6c6f20576f726c64000000000000000000000000000000000000000000602082015290505b90565b602060405190810160405260008152905600a165627a7a72305820db2690e18e82d5fc2cb625d3b4d4a0a8d9abbdd5df5e343e091d6bf3ed3a2e5a0029
