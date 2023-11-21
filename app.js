
//-================================= let and var decalartion concepts

//===================================== Example using var
//================= 1st


// function exampleVar() {
//     var x = 10
//     if (true) {
//       var x = 15;
//   console.log("Inside of block - x:", x);
//     }
  
//     console.log("Outside of block - x:", x);
//   }
//   exampleVar()

//=====================2nd

// if(true){
//     console.log(x ,"outside")

// function abcd(){
//     var x = 5;

// console.log(x)
// }
// }
// abcd()

//======================= 3rd 


               //Example with Function Scope:

// function exampleFunctionScope() {
//     if (true) {
//       var functionScopedVar = 'I am function-scoped';
//     }
  
//     console.log("Outside if block - functionScopedVar:", functionScopedVar);
//   }
  
//   exampleFunctionScope();


 //=================4th

//==================Example with Redeclaration

// var variableToRedeclare = 'Original Value';

// if (true) {
//   var variableToRedeclare = 'Inside Block';
//   console.log("Inside if block - variableToRedeclare:", variableToRedeclare);
// }

// console.log("Outside if block - variableToRedeclare:", variableToRedeclare);            


//+++++++++++++++++++++++++++++=============================Now For Let
// ============================Example with Block Scope:


// function exampleBlockScope() {
//     if (true) {
//       let blockScopedVar = 'I am block-scoped';
//       console.log("Inside if block - blockScopedVar:", blockScopedVar);
//     }
  
    
//     // console.log("Outside if block - blockScopedVar:", blockScopedVar);
//   }
  
//   exampleBlockScope();

//============================ 2nd
//========================= Example with Redeclaration in Block Scope:

// let redeclareVar = 'Original Value';

// if (true) {
//   let redeclareVar = 'Inside Block';
//   console.log("Inside if block - redeclareVar:", redeclareVar);
// }

// console.log("Outside if block - redeclareVar:", redeclareVar);


//============================ 3rd
//========================= Example with Closure:

// function createClosure() {
//     let closureVar = 'I am closed over';
  
//     function closureFunction() {
//       console.log("Inside closureFunction - closureVar:", closureLet);
//     }
  
//     return closureFunction;
//   }
  
//   let myClosure = createClosure();
//   myClosure();




//============================ 4th
//========================Example with Block Scope in if-else:



//   function exampleBlockScopeIfElse(condition) {
//     if (condition) {
//       let blockScopedVar = 'I am true block';
//       console.log("Inside if block - blockScopedVar:", blockScopedVar);
//     }
//      else {
//      let blockScopedVar = 'I am false block';
//       console.log("Inside else block - blockScopedVar:", blockScopedVar);
//     }
  
//     // console.log("Outside if-else - blockScopedVar:", blockScopedVar);
//   }
  
//   exampleBlockScopeIfElse(true);