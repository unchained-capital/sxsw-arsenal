(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports={
  "contractName": "Adoption",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "adopters",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x43ae80d3"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "petId",
          "type": "uint256"
        }
      ],
      "name": "adopt",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x8588b2c5"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getAdopters",
      "outputs": [
        {
          "name": "",
          "type": "address[16]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x3de4eb17"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b506102f4806100206000396000f3fe608060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680633de4eb171461005c57806343ae80d3146100af5780638588b2c51461012a575b600080fd5b34801561006857600080fd5b50610071610179565b6040518082601060200280838360005b8381101561009c578082015181840152602081019050610081565b5050505090500191505060405180910390f35b3480156100bb57600080fd5b506100e8600480360360208110156100d257600080fd5b81019080803590602001909291905050506101fa565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561013657600080fd5b506101636004803603602081101561014d57600080fd5b810190808035906020019092919050505061022f565b6040518082815260200191505060405180910390f35b6101816102a4565b60006010806020026040519081016040528092919082601080156101f0576020028201915b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116101a6575b5050505050905090565b60008160108110151561020957fe5b016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008082101580156102425750600f8211155b151561024d57600080fd5b3360008360108110151561025d57fe5b0160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550819050919050565b6102006040519081016040528060109060208202803883398082019150509050509056fea165627a7a7230582073159d189b994ba5142eb4f02f2132cc338a8f4fccce7d7880e4a83c1aecaf8e0029",
  "deployedBytecode": "0x608060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680633de4eb171461005c57806343ae80d3146100af5780638588b2c51461012a575b600080fd5b34801561006857600080fd5b50610071610179565b6040518082601060200280838360005b8381101561009c578082015181840152602081019050610081565b5050505090500191505060405180910390f35b3480156100bb57600080fd5b506100e8600480360360208110156100d257600080fd5b81019080803590602001909291905050506101fa565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561013657600080fd5b506101636004803603602081101561014d57600080fd5b810190808035906020019092919050505061022f565b6040518082815260200191505060405180910390f35b6101816102a4565b60006010806020026040519081016040528092919082601080156101f0576020028201915b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116101a6575b5050505050905090565b60008160108110151561020957fe5b016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008082101580156102425750600f8211155b151561024d57600080fd5b3360008360108110151561025d57fe5b0160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550819050919050565b6102006040519081016040528060109060208202803883398082019150509050509056fea165627a7a7230582073159d189b994ba5142eb4f02f2132cc338a8f4fccce7d7880e4a83c1aecaf8e0029",
  "sourceMap": "25:384:0:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;25:384:0;;;;;;;",
  "deployedSourceMap": "25:384:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;309:96;;8:9:-1;5:2;;;30:1;27;20:12;5:2;309:96:0;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;309:96:0;;;;;;;;;;;;;;;;54:27;;8:9:-1;5:2;;;30:1;27;20:12;5:2;54:27:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;54:27:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;110:162;;8:9:-1;5:2;;;30:1;27;20:12;5:2;110:162:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;110:162:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;309:96;353:18;;:::i;:::-;390:8;383:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;309:96;:::o;54:27::-;;;;;;;;;;;;;;;;;;;;;;;;;:::o;110:162::-;153:4;186:1;177:5;:10;;:25;;;;;200:2;191:5;:11;;177:25;169:34;;;;;;;;232:10;214:8;223:5;214:15;;;;;;;;;;;:28;;;;;;;;;;;;;;;;;;260:5;253:12;;110:162;;;:::o;25:384::-;;;;;;;;;;;;29:2:-1;21:6;17:15;117:4;105:10;97:6;88:34;148:4;140:6;136:17;126:27;;0:157;25:384:0;;;;:::o",
  "source": "pragma solidity ^0.5.0;\n\ncontract Adoption {\n    \n    address[16] public adopters;\n\n    // Adopting a pet\n    function adopt(uint petId) public returns (uint) {\n        require(petId >= 0 && petId <= 15);\n\n        adopters[petId] = msg.sender;\n\n        return petId;\n    }\n\n    // Retrieving the adopters\n    function getAdopters() public view returns (address[16] memory) {\n        return adopters;\n    }\n \n}\n",
  "sourcePath": "/Users/destry/code/unchained-capital/sxsw-arsenal/ethereum/contracts/Adoption.sol",
  "ast": {
    "absolutePath": "/Users/destry/code/unchained-capital/sxsw-arsenal/ethereum/contracts/Adoption.sol",
    "exportedSymbols": {
      "Adoption": [
        43
      ]
    },
    "id": 44,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.5",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:0"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 43,
        "linearizedBaseContracts": [
          43
        ],
        "name": "Adoption",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 5,
            "name": "adopters",
            "nodeType": "VariableDeclaration",
            "scope": 43,
            "src": "54:27:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_address_$16_storage",
              "typeString": "address[16]"
            },
            "typeName": {
              "baseType": {
                "id": 2,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "54:7:0",
                "stateMutability": "nonpayable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "id": 4,
              "length": {
                "argumentTypes": null,
                "hexValue": "3136",
                "id": 3,
                "isConstant": false,
                "isLValue": false,
                "isPure": false,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "62:2:0",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": null,
                  "typeString": null
                },
                "value": "16"
              },
              "nodeType": "ArrayTypeName",
              "src": "54:11:0",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_address_$16_storage_ptr",
                "typeString": "address[16]"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 31,
              "nodeType": "Block",
              "src": "159:113:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 19,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 15,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 13,
                            "name": "petId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7,
                            "src": "177:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 14,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "186:1:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "177:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "&&",
                        "rightExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 18,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 16,
                            "name": "petId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7,
                            "src": "191:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "3135",
                            "id": 17,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "200:2:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_15_by_1",
                              "typeString": "int_const 15"
                            },
                            "value": "15"
                          },
                          "src": "191:11:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "177:25:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 12,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        118,
                        119
                      ],
                      "referencedDeclaration": 118,
                      "src": "169:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 20,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "169:34:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 21,
                  "nodeType": "ExpressionStatement",
                  "src": "169:34:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 27,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 22,
                        "name": "adopters",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5,
                        "src": "214:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$16_storage",
                          "typeString": "address[16] storage ref"
                        }
                      },
                      "id": 24,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 23,
                        "name": "petId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7,
                        "src": "223:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "214:15:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 25,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 115,
                        "src": "232:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 26,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "232:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "214:28:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 28,
                  "nodeType": "ExpressionStatement",
                  "src": "214:28:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 29,
                    "name": "petId",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 7,
                    "src": "260:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 11,
                  "id": 30,
                  "nodeType": "Return",
                  "src": "253:12:0"
                }
              ]
            },
            "documentation": null,
            "id": 32,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "adopt",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7,
                  "name": "petId",
                  "nodeType": "VariableDeclaration",
                  "scope": 32,
                  "src": "125:10:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "125:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "124:12:0"
            },
            "returnParameters": {
              "id": 11,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 32,
                  "src": "153:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "153:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "152:6:0"
            },
            "scope": 43,
            "src": "110:162:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 41,
              "nodeType": "Block",
              "src": "373:32:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 39,
                    "name": "adopters",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 5,
                    "src": "390:8:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$16_storage",
                      "typeString": "address[16] storage ref"
                    }
                  },
                  "functionReturnParameters": 38,
                  "id": 40,
                  "nodeType": "Return",
                  "src": "383:15:0"
                }
              ]
            },
            "documentation": null,
            "id": 42,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getAdopters",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 33,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "329:2:0"
            },
            "returnParameters": {
              "id": 38,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 37,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 42,
                  "src": "353:18:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$16_memory_ptr",
                    "typeString": "address[16]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 34,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "353:7:0",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 36,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "3136",
                      "id": 35,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "361:2:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": null,
                        "typeString": null
                      },
                      "value": "16"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "353:11:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$16_storage_ptr",
                      "typeString": "address[16]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "352:20:0"
            },
            "scope": 43,
            "src": "309:96:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 44,
        "src": "25:384:0"
      }
    ],
    "src": "0:410:0"
  },
  "legacyAST": {
    "absolutePath": "/Users/destry/code/unchained-capital/sxsw-arsenal/ethereum/contracts/Adoption.sol",
    "exportedSymbols": {
      "Adoption": [
        43
      ]
    },
    "id": 44,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.5",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:0"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 43,
        "linearizedBaseContracts": [
          43
        ],
        "name": "Adoption",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 5,
            "name": "adopters",
            "nodeType": "VariableDeclaration",
            "scope": 43,
            "src": "54:27:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_address_$16_storage",
              "typeString": "address[16]"
            },
            "typeName": {
              "baseType": {
                "id": 2,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "54:7:0",
                "stateMutability": "nonpayable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "id": 4,
              "length": {
                "argumentTypes": null,
                "hexValue": "3136",
                "id": 3,
                "isConstant": false,
                "isLValue": false,
                "isPure": false,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "62:2:0",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": null,
                  "typeString": null
                },
                "value": "16"
              },
              "nodeType": "ArrayTypeName",
              "src": "54:11:0",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_address_$16_storage_ptr",
                "typeString": "address[16]"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 31,
              "nodeType": "Block",
              "src": "159:113:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 19,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 15,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 13,
                            "name": "petId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7,
                            "src": "177:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 14,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "186:1:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "177:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "&&",
                        "rightExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 18,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 16,
                            "name": "petId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7,
                            "src": "191:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "3135",
                            "id": 17,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "200:2:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_15_by_1",
                              "typeString": "int_const 15"
                            },
                            "value": "15"
                          },
                          "src": "191:11:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "177:25:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 12,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        118,
                        119
                      ],
                      "referencedDeclaration": 118,
                      "src": "169:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 20,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "169:34:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 21,
                  "nodeType": "ExpressionStatement",
                  "src": "169:34:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 27,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 22,
                        "name": "adopters",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5,
                        "src": "214:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$16_storage",
                          "typeString": "address[16] storage ref"
                        }
                      },
                      "id": 24,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 23,
                        "name": "petId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7,
                        "src": "223:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "214:15:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 25,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 115,
                        "src": "232:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 26,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "232:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "214:28:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 28,
                  "nodeType": "ExpressionStatement",
                  "src": "214:28:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 29,
                    "name": "petId",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 7,
                    "src": "260:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 11,
                  "id": 30,
                  "nodeType": "Return",
                  "src": "253:12:0"
                }
              ]
            },
            "documentation": null,
            "id": 32,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "adopt",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7,
                  "name": "petId",
                  "nodeType": "VariableDeclaration",
                  "scope": 32,
                  "src": "125:10:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "125:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "124:12:0"
            },
            "returnParameters": {
              "id": 11,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 32,
                  "src": "153:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "153:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "152:6:0"
            },
            "scope": 43,
            "src": "110:162:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 41,
              "nodeType": "Block",
              "src": "373:32:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 39,
                    "name": "adopters",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 5,
                    "src": "390:8:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$16_storage",
                      "typeString": "address[16] storage ref"
                    }
                  },
                  "functionReturnParameters": 38,
                  "id": 40,
                  "nodeType": "Return",
                  "src": "383:15:0"
                }
              ]
            },
            "documentation": null,
            "id": 42,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getAdopters",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 33,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "329:2:0"
            },
            "returnParameters": {
              "id": 38,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 37,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 42,
                  "src": "353:18:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$16_memory_ptr",
                    "typeString": "address[16]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 34,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "353:7:0",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 36,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "3136",
                      "id": 35,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "361:2:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": null,
                        "typeString": null
                      },
                      "value": "16"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "353:11:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$16_storage_ptr",
                      "typeString": "address[16]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "352:20:0"
            },
            "scope": 43,
            "src": "309:96:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 44,
        "src": "25:384:0"
      }
    ],
    "src": "0:410:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.5.0+commit.1d4f565a.Emscripten.clang"
  },
  "networks": {
    "5777": {
      "events": {},
      "links": {},
      "address": "0xAaBAB93a85A5052abe9b9cE8b2Bac632fF51D85f",
      "transactionHash": "0xdca95f1db6bc3f9662e26f5bb50d1caeaa7120b8862d6fde2976db8c89df36f0"
    }
  },
  "schemaVersion": "3.0.2",
  "updatedAt": "2019-03-12T21:44:45.296Z",
  "devdoc": {
    "methods": {}
  },
  "userdoc": {
    "methods": {}
  }
}
},{}],2:[function(require,module,exports){
App = {
    web3Provider: null,
    contracts: {},

    init: async function() {
        // Load pets.
        var data = require('../pets.json');
        var petsRow = $('#petsRow');
        var petTemplate = $('#petTemplate');

        for (i = 0; i < data.length; i ++) {
            petTemplate.find('.panel-title').text(data[i].name);
            petTemplate.find('img').attr('src', data[i].picture);
            petTemplate.find('.pet-breed').text(data[i].breed);
            petTemplate.find('.pet-age').text(data[i].age);
            petTemplate.find('.pet-location').text(data[i].location);
            petTemplate.find('.btn-adopt').attr('data-id', data[i].id);

            petsRow.append(petTemplate.html());
        };

        return await App.initWeb3();
    },

    initWeb3: async function() {
        // Modern dapp browsers...
        if (window.ethereum) {
            App.web3Provider = window.ethereum;
            try {
                // Request account access
                await window.ethereum.enable();
            } catch (error) {
                // User denied account access...
                console.error("User denied account access")
            }
        }
        // Legacy dapp browsers...
        else if (window.web3) {
            App.web3Provider = window.web3.currentProvider;
        }
        // If no injected web3 instance is detected, fall back to Ganache
        else {
            App.web3Provider = new Web3.providers.HttpProvider('http://localhost:8545');
        }
        web3 = new Web3(App.web3Provider);

        return App.initContract();
    },

    initContract: function() {
        var AdoptionArtifact = require('../../build/contracts/Adoption.json');
        // Get the necessary contract artifact file and instantiate it with truffle-contract
        App.contracts.Adoption = TruffleContract(AdoptionArtifact);

        // Set the provider for our contract
        App.contracts.Adoption.setProvider(App.web3Provider);

        // Use our contract to retrieve and mark the adopted pets
        App.markAdopted();

        return App.bindEvents();
    },

    bindEvents: function() {
        $(document).on('click', '.btn-adopt', App.handleAdopt);
    },

    markAdopted: function(adopters, account) {
        var adoptionInstance;

        App.contracts.Adoption.deployed().then(function(instance) {
            adoptionInstance = instance;

            return adoptionInstance.getAdopters.call();
        }).then(function(adopters) {
            for (i = 0; i < adopters.length; i++) {
                if (adopters[i] !== '0x0000000000000000000000000000000000000000') {
                    $('.panel-pet').eq(i).find('button').text('Success').attr('disabled', true);
                }
            }
        }).catch(function(err) {
            console.log(err.message);
        });
    },

    handleAdopt: function(event) {
        event.preventDefault();

        var petId = parseInt($(event.target).data('id'));

        var adoptionInstance;

        web3.eth.getAccounts(function(error, accounts) {
            if (error) {
                console.log(error);
            }

            var account = accounts[0];

            App.contracts.Adoption.deployed().then(function(instance) {
                adoptionInstance = instance;

                // Execute adopt as a transaction by sending account
                return adoptionInstance.adopt(petId, {from: account});
            }).then(function(result) {
                return App.markAdopted();
            }).catch(function(err) {
                console.log(err.message);
            });
        });
    }

};

$(function() {
    $(window).load(function() {
        App.init();
    });
});

},{"../../build/contracts/Adoption.json":1,"../pets.json":3}],3:[function(require,module,exports){
module.exports=[
  {
    "id": 0,
    "name": "Frieda",
    "picture": "images/scottish-terrier.jpeg",
    "age": 3,
    "breed": "Scottish Terrier",
    "location": "Lisco, Alabama"
  },
  {
    "id": 1,
    "name": "Gina",
    "picture": "images/scottish-terrier.jpeg",
    "age": 3,
    "breed": "Scottish Terrier",
    "location": "Tooleville, West Virginia"
  },
  {
    "id": 2,
    "name": "Collins",
    "picture": "images/french-bulldog.jpeg",
    "age": 2,
    "breed": "French Bulldog",
    "location": "Freeburn, Idaho"
  },
  {
    "id": 3,
    "name": "Melissa",
    "picture": "images/boxer.jpeg",
    "age": 2,
    "breed": "Boxer",
    "location": "Camas, Pennsylvania"
  },
  {
    "id": 4,
    "name": "Jeanine",
    "picture": "images/french-bulldog.jpeg",
    "age": 2,
    "breed": "French Bulldog",
    "location": "Gerber, South Dakota"
  },
  {
    "id": 5,
    "name": "Elvia",
    "picture": "images/french-bulldog.jpeg",
    "age": 3,
    "breed": "French Bulldog",
    "location": "Innsbrook, Illinois"
  },
  {
    "id": 6,
    "name": "Latisha",
    "picture": "images/golden-retriever.jpeg",
    "age": 3,
    "breed": "Golden Retriever",
    "location": "Soudan, Louisiana"
  },
  {
    "id": 7,
    "name": "Coleman",
    "picture": "images/golden-retriever.jpeg",
    "age": 3,
    "breed": "Golden Retriever",
    "location": "Jacksonwald, Palau"
  },
  {
    "id": 8,
    "name": "Nichole",
    "picture": "images/french-bulldog.jpeg",
    "age": 2,
    "breed": "French Bulldog",
    "location": "Honolulu, Hawaii"
  },
  {
    "id": 9,
    "name": "Fran",
    "picture": "images/boxer.jpeg",
    "age": 3,
    "breed": "Boxer",
    "location": "Matheny, Utah"
  },
  {
    "id": 10,
    "name": "Leonor",
    "picture": "images/boxer.jpeg",
    "age": 2,
    "breed": "Boxer",
    "location": "Tyhee, Indiana"
  },
  {
    "id": 11,
    "name": "Dean",
    "picture": "images/scottish-terrier.jpeg",
    "age": 3,
    "breed": "Scottish Terrier",
    "location": "Windsor, Montana"
  },
  {
    "id": 12,
    "name": "Stevenson",
    "picture": "images/french-bulldog.jpeg",
    "age": 3,
    "breed": "French Bulldog",
    "location": "Kingstowne, Nevada"
  },
  {
    "id": 13,
    "name": "Kristina",
    "picture": "images/golden-retriever.jpeg",
    "age": 4,
    "breed": "Golden Retriever",
    "location": "Sultana, Massachusetts"
  },
  {
    "id": 14,
    "name": "Ethel",
    "picture": "images/golden-retriever.jpeg",
    "age": 2,
    "breed": "Golden Retriever",
    "location": "Broadlands, Oregon"
  },
  {
    "id": 15,
    "name": "Terry",
    "picture": "images/golden-retriever.jpeg",
    "age": 2,
    "breed": "Golden Retriever",
    "location": "Dawn, Wisconsin"
  }
]

},{}]},{},[2]);
