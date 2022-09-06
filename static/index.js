/*MULTIPLE MATRIX SELECTORS*/
const ansBlockMm = document.getElementById("answer-block-mm")
const ansMm = document.getElementById('answer-table-mm');
const sum = document.getElementById('sum');
const subtracted = document.getElementById('subtracted');
const product = document.getElementById('product');
const switchAB = document.getElementById('switch');

//table1
const mmTable1 = document.getElementById('table-body-mm1')
const pwrMm1 = document.getElementById('power-mm1');
const multiMm1 = document.getElementById('multiple-mm1');
const indicesBtnMm1 = document.getElementById('indicesButton-mm1');
const multipleBtnMm1 = document.getElementById('multipleButton-mm1');
const mmSizeBtn1 = document.getElementById('mmSizeButton1')
const mmRows1 = document.getElementById('mmRows1');
const mmColumns1 = document.getElementById('mmColumns1');

//table2
const mmTable2 = document.getElementById('table-body-mm2')
const pwrMm2 = document.getElementById('power-mm2');
const multiMm2 = document.getElementById('multiple-mm2');
const indicesBtnMm2 = document.getElementById('indicesButton-mm2');
const multipleBtnMm2 = document.getElementById('multipleButton-mm2');
const mmSizeBtn2 = document.getElementById('mmSizeButton2')
const mmRows2 = document.getElementById('mmRows2');
const mmColumns2 = document.getElementById('mmColumns2');





/*DETERMINANT SELECTORS*/
const detTable = document.getElementById('table-body-det')
const ansBlockDet = document.getElementById("answer-block-det")
const ansDet = document.getElementById('det-answer');
const pwrDet = document.getElementById('power-det');
const multiDet = document.getElementById('multiple-det');
const detBtn = document.getElementById('detButton');
const indicesBtnDet = document.getElementById('indicesButton-det');
const multipleBtnDet = document.getElementById('multipleButton-det');
//Matrix size buttons
const oboBtnDet = document.getElementById('oboButtonDet');
const tbtBtnDet = document.getElementById('tbtButtonDet');
const thbthBtnDet = document.getElementById('thbthButtonDet');
const fbfBtnDet = document.getElementById('fbfButtonDet');
const fibfiBtnDet = document.getElementById('fibfiButtonDet');
const sbsBtnDet = document.getElementById('sbsButtonDet');
const sebseBtnDet = document.getElementById('sebseButtonDet');
const ebeBtnDet = document.getElementById('ebeButtonDet');









/*INVERSE SELECTORS*/
let invTable = document.getElementById("table-body-inv");
const ansBlockInv = document.getElementById("answer-block-inv")
const ansInv = document.getElementById('answer-table-inv');
const pwrInv = document.getElementById('power-inv');
const multiInv = document.getElementById('multiple-inv');
const invBtn = document.getElementById('invButton');
const indicesBtnInv = document.getElementById('indicesButton-inv');
const multipleBtnInv = document.getElementById('multipleButton-inv');
//Matrix size buttons
const oboBtnInv = document.getElementById('oboButtonInv');
const tbtBtnInv = document.getElementById('tbtButtonInv');
const thbthBtnInv = document.getElementById('thbthButtonInv');
const fbfBtnInv = document.getElementById('fbfButtonInv');
const fibfiBtnInv = document.getElementById('fibfiButtonInv');
const sbsBtnInv = document.getElementById('sbsButtonInv');
const sebseBtnInv = document.getElementById('sebseButtonInv');
const ebeBtnInv = document.getElementById('ebeButtonInv');







/*TRANSPOSE SELECTORS*/
const transBtn = document.getElementById('tButton');
const ansBlockTrans = document.getElementById("answer-block-t")
const ansTrans = document.getElementById('answer-table-t');
const transTable = document.getElementById('table-body-t')
const pwrTrans = document.getElementById('power-t');
const multiTrans = document.getElementById('multiple-t');
const indicesBtnTrans = document.getElementById('indicesButton-t');
const multipleBtnTrans = document.getElementById('multipleButton-t');
const SizeBtnTrans = document.getElementById('tSizeButton')
const transRows = document.getElementById('tRows');
const transColumns = document.getElementById('tColumns');





/*EIGANVALUES SELECTORS*/
const eigValTable = document.getElementById('table-body-eigVal')
const ansBlockEigVal = document.getElementById("answer-block-eigVal")
const ansEigVal = document.getElementById('eigVal-answer');
const ansBoxEigVal = document.getElementById('answer-boxes-eigVal')
const pwrEigVal = document.getElementById('power-eigVal');
const multiEigVal = document.getElementById('multiple-eigVal');
const eigValBtn = document.getElementById('eigValButton');
const indicesBtnEigVal = document.getElementById('indicesButton-eigVal');
const multipleBtnEigVal = document.getElementById('multipleButton-eigVal');
//Matrix size buttons
const oboBtnEigVal = document.getElementById('oboButtonEigVal');
const tbtBtnEigVal = document.getElementById('tbtButtonEigVal');
const thbthBtnEigVal = document.getElementById('thbthButtonEigVal');
const fbfBtnEigVal = document.getElementById('fbfButtonEigVal');
const fibfiBtnEigVal = document.getElementById('fibfiButtonEigVal');
const sbsBtnEigVal = document.getElementById('sbsButtonEigVal');
const sebseBtnEigVal = document.getElementById('sebseButtonEigVal');
const ebeBtnEigVal = document.getElementById('ebeButtonEigVal');






/*EIGANVECTORS SELECTORS*/
const eigVecTable = document.getElementById('table-body-eigVec')
const ansBlockEigVec = document.getElementById("answer-block-eigVec")
const ansEigVec = document.getElementById('eigVec-answer');
const ansBoxEigVec = document.getElementById('answer-boxes-eigVec')
const pwrEigVec = document.getElementById('power-eigVec');
const multiEigVec = document.getElementById('multiple-eigVec');
const eigVecBtn = document.getElementById('eigVecButton');
const indicesBtnEigVec = document.getElementById('indicesButton-eigVec');
const multipleBtnEigVec = document.getElementById('multipleButton-eigVec');
//Matrix size buttons
const oboBtnEigVec = document.getElementById('oboButtonEigVec');
const tbtBtnEigVec = document.getElementById('tbtButtonEigVec');
const thbthBtnEigVec = document.getElementById('thbthButtonEigVec');
const fbfBtnEigVec = document.getElementById('fbfButtonEigVec');
const fibfiBtnEigVec = document.getElementById('fibfiButtonEigVec');
const sbsBtnEigVec = document.getElementById('sbsButtonEigVec');
const sebseBtnEigVec = document.getElementById('sebseButtonEigVec');
const ebeBtnEigVec = document.getElementById('ebeButtonEigVec');







/*TABLE FUNCTIONS*/
//Row by Column matrix
function rbc(row, column, table, calc){
    
    for(var i=0; i<row; i++){
        var tr = document.createElement('tr');

        for(var j=0; j<column; j++){
            var td = document.createElement('td')
            var input = document.createElement('input')

            input.setAttribute('size','3');
            input.id = calc+'t'+i+j;

            td.appendChild(input);
            tr.appendChild(td);
        }

        table.appendChild(tr);
    }
}

//builds answer matrix row by column
function rbc2(row, column, table, calc){
    
    deleteAnsTable(table);

    for(var i=0; i<row; i++){
        var tr = document.createElement('tr');

        for(var j=0; j<column; j++){
            var td = document.createElement('td')
            var input = document.createElement('input')

            input.setAttribute('size','3');
            input.id = calc+'t2'+i+j;

            td.appendChild(input);
            tr.appendChild(td);
        }

        table.appendChild(tr);
    }
}

//Delete table contents
function deleteTable(table){
    while(table.firstChild){
        table.removeChild(table.lastChild);
    }
}

//Deletes answer table
function deleteAnsTable(table){
    while(table.firstChild){
        table.removeChild(table.lastChild);
    }
}



/*MATRIX SIZE FUNCTIONS*/
//one by one matrix
function obo(table, calc){
    deleteTable(table)
    rbc(1,1, table, calc);
}
function tbt(table, calc){
    deleteTable(table)
    rbc(2,2, table, calc);
}

function thbth(table, calc){
    deleteTable(table)
    rbc(3,3, table, calc);
}

function fbf(table, calc){
    deleteTable(table)
    
    rbc(4,4, table, calc);

    oboBtnInv.disabled = true;

    tbtBtnInv.disabled = false;
    thbthBtnInv.disabled = false;
    fbfBtnInv.disabled = false;
    fibfiBtnInv.disabled = false;
    sbsBtnInv.disabled = false;
    sebseBtnInv.disabled = false;
    ebeBtnInv.disabled = false;
}

function fibfi(table, calc){
    deleteTable(table)
    
    rbc(5,5, table, calc);

    
}

function sbs(table, calc){
    deleteTable(table)
    rbc(6,6, table, calc);
}

function sebse(table, calc){
    deleteTable(table)
    rbc(7,7, table, calc);
}

function ebe(table, calc){
    deleteTable(table)
    rbc(8,8, table, calc);
}



/*INDICES AND MULTIPLIER FUNCTION*/

//indices function
function indices(calc, power){

    //Table data for matrixe table cells
    let nameArray = [];
    for(var i=0; i<100; i++){
        if(i<10){
            nameArray[i] = document.querySelector('#'+calc+'t0'+i);
            
        }else{
            nameArray[i] = document.querySelector('#'+calc+'t'+i);
        }
    }

    //filter out null values from array
    let results = [];
    nameArray.forEach(element => {
    if (element !== null) {
        results.push(element.value);
    }
    
    });

    let ids = [];
    nameArray.forEach(element => {
    if (element !== null) {
        ids.push(element);
    }
    
    });

    for(let i=0; i<results.length; i++){
        ids[i].value = results[i]**power.value;
        
    }
}

//Multiplier function
function multiplier(calc, multi){
    //Table data for matrixe table cells
    let nameArray = [];
    for(var i=0; i<100; i++){
        if(i<10){
            nameArray[i] = document.querySelector('#'+calc+'t0'+i);
            
        }else{
            nameArray[i] = document.querySelector('#'+calc+'t'+i);
        }
        
    }

    //filter out null values from array

    let results = [];
    nameArray.forEach(element => {
    if (element !== null) {
        results.push(element.value);
    }

    });

    let ids = [];
    nameArray.forEach(element => {
    if (element !== null) {
        ids.push(element);
    }

    });

    for(let i=0; i<results.length; i++){
        ids[i].value = results[i]*multi.value;
        
    }
}







/*MULTIPLE MATRIX EVENTLISTENERS*/

//Table 1
mmSizeBtn1.addEventListener('click', function(){

    deleteTable(mmTable1);
    rbc(mmRows1.value, mmColumns1.value, mmTable1, 'mm1');
});

indicesBtnMm1.addEventListener('click', function(){
    indices('mm1', pwrMm1);
});

multipleBtnMm1.addEventListener('click', function(){
    multiplier('mm1', pwrMm1);
});


//Table 2
mmSizeBtn2.addEventListener('click', function(){

    deleteTable(mmTable2);
    rbc(mmRows2.value, mmColumns2.value, mmTable2, 'mm2');
});

indicesBtnMm2.addEventListener('click', function(){
    indices('mm2', pwrMm1);
});

multipleBtnMm2.addEventListener('click', function(){
    multiplier('mm2', pwrMm1);
});

//operations
sum.addEventListener('click', function(){
    //displays answer when button is pressed
    ansBlockMm.style.display="block";

    //Table data for matrixe table cells
    let nameArray = [];
    for(var i=0; i<100; i++){
        if(i<10){
            nameArray[i] = document.querySelector('#mm1t0'+i);
            
        }else{
            nameArray[i] = document.querySelector('#mm1t'+i);
        }
    }

    let nameArray2 = [];
    for(var i=0; i<100; i++){
        if(i<10){
            nameArray2[i] = document.querySelector('#mm2t0'+i);
            
        }else{
            nameArray2[i] = document.querySelector('#mm2t'+i);
        }
    }

    //filter out null values from array
    let results = [];
    nameArray.forEach(element => {
    if (element !== null) {
        results.push(element.value);
    }
    
    });

    let results2 = [];
    nameArray2.forEach(element => {
    if (element !== null) {
        results2.push(element.value);
    }
    
    });

    //put array into matrix form
    var count=0;
    var grid = [];
    for (let i = 0; i < mmRows1.value; i++) {
        grid[i] = [];
  
        for (let j = 0; j < mmColumns1.value; j++) {
          grid[i][j] = results[count];
          count++;
        }
    }

    var count2=0;
    var grid2 = [];
    for (let i = 0; i < mmRows2.value; i++) {
        grid2[i] = [];
  
        for (let j = 0; j < mmColumns1.value; j++) {
          grid2[i][j] = results2[count2];
          count2++;
        }
    }

    let a = math.add(grid, grid2);
    console.log(a)

    //put answer into matrix layout
    
    let newArray=[];
    for(let i=0; i<a.length; i++){
        newArray = newArray.concat(a[i]);
    }
    console.log(newArray)

    rbc2(mmRows1.value, mmColumns1.value, ansMm, "mm");

    let nameArrayAns = [];
    for(var i=0; i<100; i++){
        if(i<10){
            nameArrayAns[i] = document.querySelector('#mmt20'+i);
            
        }else{
            nameArrayAns[i] = document.querySelector('#mmt2'+i);
        }
        
    }

    let ids = [];
    nameArrayAns.forEach(element => {
    if (element !== null) {
        ids.push(element);
    }
    });

    for(let i=0; i<results.length; i++){

        newArray[i] = math.fraction(newArray[i]);
        if(newArray[i]['d']!='1'){
            newArray[i] = newArray[i]['n']+'/'+newArray[i]['d']
        }
        ids[i].value = newArray[i];
        
    }

});

subtracted.addEventListener('click', function(){
        //displays answer when button is pressed
        ansBlockMm.style.display="block";

        //Table data for matrixe table cells
        let nameArray = [];
        for(var i=0; i<100; i++){
            if(i<10){
                nameArray[i] = document.querySelector('#mm1t0'+i);
                
            }else{
                nameArray[i] = document.querySelector('#mm1t'+i);
            }
        }
    
        let nameArray2 = [];
        for(var i=0; i<100; i++){
            if(i<10){
                nameArray2[i] = document.querySelector('#mm2t0'+i);
                
            }else{
                nameArray2[i] = document.querySelector('#mm2t'+i);
            }
        }
    
        //filter out null values from array
        let results = [];
        nameArray.forEach(element => {
        if (element !== null) {
            results.push(element.value);
        }
        
        });
    
        let results2 = [];
        nameArray2.forEach(element => {
        if (element !== null) {
            results2.push(element.value);
        }
        
        });
    
        //put array into matrix form
        var count=0;
        var grid = [];
        for (let i = 0; i < mmRows1.value; i++) {
            grid[i] = [];
      
            for (let j = 0; j < mmColumns1.value; j++) {
              grid[i][j] = results[count];
              count++;
            }
        }
    
        var count2=0;
        var grid2 = [];
        for (let i = 0; i < mmRows2.value; i++) {
            grid2[i] = [];
      
            for (let j = 0; j < mmColumns1.value; j++) {
              grid2[i][j] = results2[count2];
              count2++;
            }
        }
    
        let a = math.subtract(grid, grid2);
        console.log(a)
    
        //put answer into matrix layout
        
        let newArray=[];
        for(let i=0; i<a.length; i++){
            newArray = newArray.concat(a[i]);
        }
        console.log(newArray)
    
        rbc2(mmRows1.value, mmColumns1.value, ansMm, "mm");
    
        let nameArrayAns = [];
        for(var i=0; i<100; i++){
            if(i<10){
                nameArrayAns[i] = document.querySelector('#mmt20'+i);
                
            }else{
                nameArrayAns[i] = document.querySelector('#mmt2'+i);
            }
            
        }
    
        let ids = [];
        nameArrayAns.forEach(element => {
        if (element !== null) {
            ids.push(element);
        }
        });
    
        for(let i=0; i<results.length; i++){
    
            newArray[i] = math.fraction(newArray[i]);
            if(newArray[i]['d']!='1'){
                newArray[i] = newArray[i]['n']+'/'+newArray[i]['d']
            }
            ids[i].value = newArray[i];
            
        }
    
});

product.addEventListener('click', function(){
    //displays answer when button is pressed
    ansBlockMm.style.display="block";

    //Table data for matrixe table cells
    let nameArray = [];
    for(var i=0; i<100; i++){
        if(i<10){
            nameArray[i] = document.querySelector('#mm1t0'+i);
            
        }else{
            nameArray[i] = document.querySelector('#mm1t'+i);
        }
    }

    let nameArray2 = [];
    for(var i=0; i<100; i++){
        if(i<10){
            nameArray2[i] = document.querySelector('#mm2t0'+i);
            
        }else{
            nameArray2[i] = document.querySelector('#mm2t'+i);
        }
    }

    //filter out null values from array
    let results = [];
    nameArray.forEach(element => {
    if (element !== null) {
        results.push(element.value);
    }
    
    });

    let results2 = [];
    nameArray2.forEach(element => {
    if (element !== null) {
        results2.push(element.value);
    }
    
    });

    //put array into matrix form
    var count=0;
    var grid = [];
    for (let i = 0; i < mmRows1.value; i++) {
        grid[i] = [];
  
        for (let j = 0; j < mmColumns1.value; j++) {
          grid[i][j] = results[count];
          count++;
        }
    }

    var count2=0;
    var grid2 = [];
    for (let i = 0; i < mmRows2.value; i++) {
        grid2[i] = [];
  
        for (let j = 0; j < mmColumns2.value; j++) {
          grid2[i][j] = results2[count2];
          count2++;
        }
    }

    let a = math.multiply(grid, grid2);
    console.log(a)
    console.log(grid)
    console.log(grid2)

    //put answer into matrix layout
    
    let newArray=[];
    for(let i=0; i<a.length; i++){
        newArray = newArray.concat(a[i]);
    }
    console.log(newArray)

    //matrix size after multiplication
    let matrixSize = math.size(a)
    let rowMm = matrixSize[0];
    let colMm = matrixSize[1];


    rbc2(rowMm, colMm, ansMm, "mm");

    let nameArrayAns = [];
    for(var i=0; i<100; i++){
        if(i<10){
            nameArrayAns[i] = document.querySelector('#mmt20'+i);
            
        }else{
            nameArrayAns[i] = document.querySelector('#mmt2'+i);
        }
        
    }

    let ids = [];
    nameArrayAns.forEach(element => {
    if (element !== null) {
        ids.push(element);
    }
    });

    for(let i=0; i<newArray.length; i++){

        newArray[i] = math.fraction(newArray[i]);
        if(newArray[i]['d']!='1'){
            newArray[i] = newArray[i]['n']+'/'+newArray[i]['d']
        }
        ids[i].value = newArray[i];
        
    }

});

switchAB.addEventListener('click', function(){

    //Table data for matrixe table cells
    let nameArray = [];
    for(var i=0; i<100; i++){
        if(i<10){
            nameArray[i] = document.querySelector('#mm1t0'+i);
            
        }else{
            nameArray[i] = document.querySelector('#mm1t'+i);
        }
    }

    let nameArray2 = [];
    for(var i=0; i<100; i++){
        if(i<10){
            nameArray2[i] = document.querySelector('#mm2t0'+i);
            
        }else{
            nameArray2[i] = document.querySelector('#mm2t'+i);
        }
    }

    //filter out null values from array
    let results = [];
    nameArray.forEach(element => {
    if (element !== null) {
        results.push(element.value);
    }
    
    });

    let results2 = [];
    nameArray2.forEach(element => {
    if (element !== null) {
        results2.push(element.value);
    }
    
    });

    let ids = [];
    nameArray.forEach(element => {
    if (element !== null) {
        ids.push(element);
    }
    });

    let ids2 = [];
    nameArray2.forEach(element => {
    if (element !== null) {
        ids2.push(element);
    }    
    });

    for(let i=0; i<results.length; i++){
        ids[i].value = results2[i];
    }

    for(let i=0; i<results.length; i++){
        ids2[i].value = results[i];
    }
});








/*DETERMINANT EVENTLISTENERS*/
oboBtnDet.addEventListener('click', function(){

    obo(detTable, "det");

    oboBtnDet.disabled = true;

    tbtBtnDet.disabled = false;
    thbthBtnDet.disabled = false;
    fbfBtnDet.disabled = false;
    fibfiBtnDet.disabled = false;
    sbsBtnDet.disabled = false;
    sebseBtnDet.disabled = false;
    ebeBtnDet.disabled = false;

});

tbtBtnDet.addEventListener('click', function(){

    tbt(detTable, "det");

    tbtBtnDet.disabled = true;

    oboBtnDet.disabled = false;
    thbthBtnDet.disabled = false;
    fbfBtnDet.disabled = false;
    fibfiBtnDet.disabled = false;
    sbsBtnDet.disabled = false;
    sebseBtnDet.disabled = false;
    ebeBtnDet.disabled = false;

});

thbthBtnDet.addEventListener('click', function(){

    thbth(detTable, "det");

    thbthBtnDet.disabled = true;

    oboBtnDet.disabled = false;
    tbtBtnDet.disabled = false;
    fbfBtnDet.disabled = false;
    fibfiBtnDet.disabled = false;
    sbsBtnDet.disabled = false;
    sebseBtnDet.disabled = false;
    ebeBtnDet.disabled = false;

});


fbfBtnDet.addEventListener('click', function(){

    fbf(detTable, "det");

    fbfBtnDet.disabled = true;

    oboBtnDet.disabled = false;
    tbtBtnDet.disabled = false;
    thbthBtnDet.disabled = false;
    fibfiBtnDet.disabled = false;
    sbsBtnDet.disabled = false;
    sebseBtnDet.disabled = false;
    ebeBtnDet.disabled = false;

});

fibfiBtnDet.addEventListener('click', function(){

    fibfi(detTable, "det");

});

sbsBtnDet.addEventListener('click', function(){

    sbs(detTable, "det");

    sbsBtnDet.disabled = true;

    oboBtnDet.disabled = false;
    tbtBtnDet.disabled = false;
    thbthBtnDet.disabled = false;
    fbfBtnDet.disabled = false;
    fibfiBtnDet.disabled = false;
    sebseBtnDet.disabled = false;
    ebeBtnDet.disabled = false;

});

sebseBtnDet.addEventListener('click', function(){

    sebse(detTable, "det");

    sebseBtnDet.disabled = true;

    oboBtnDet.disabled = false;
    tbtBtnDet.disabled = false;
    thbthBtnDet.disabled = false;
    fbfBtnDet.disabled = false;
    fibfiBtnDet.disabled = false;
    sbsBtnDet.disabled = false;
    ebeBtnDet.disabled = false;

});

ebeBtnDet.addEventListener('click', function(){

    ebe(detTable, "det");

    ebeBtnDet.disabled = true;

    oboBtnDet.disabled = false;
    tbtBtnDet.disabled = false;
    thbthBtnDet.disabled = false;
    fbfBtnDet.disabled = false;
    fibfiBtnDet.disabled = false;
    sbsBtnDet.disabled = false;
    sebseBtnDet.disabled = false;
});


//determinant calculator
detBtn.addEventListener('click', function(){

    //displays answer when button is pressed
    ansBlockDet.style.display="block";
   
    //Table data for matrixs table cells
    let nameArray = [];
    for(var i=0; i<100; i++){
        if(i<10){
            nameArray[i] = document.querySelector('#dett0'+i);
            
        }else{
            nameArray[i] = document.querySelector('#dett'+i);
        }
        
    }

    //filter out null values from array
    let results = [];
    nameArray.forEach(element => {
    if (element !== null) {
        results.push(element.value);
    }
    });
    
    //calculates matrix depending on its size
    let row = 0;
    let col = 0;

    if(oboBtnInv.disabled){
        row=1;
        col=1;
    }
    if(tbtBtnInv.disabled){
        row=2;
        col=2;
    }
    if(thbthBtnInv.disabled){
        row=3;
        col=3;
    }
    if(fbfBtnInv.disabled){
        row=4;
        col=4;
    }
    if(fibfiBtnInv.disabled){
        row=5;
        col=5;
    }
    if(sbsBtnInv.disabled){
        row=6;
        col=6;
    }
    if(sebseBtnInv.disabled){
        row=7;
        col=7;
    }
    if(ebeBtnInv.disabled){
        row=8;
        col=8;
    }

    //put in matrix form to allow calculation
    var count=0;
    var grid = [];
    for (let i = 0; i < row; i++) {
        grid[i] = [];
  
        for (let j = 0; j < col; j++) {
          grid[i][j] = results[count];
          count++;
        }
    }

    let a = math.det(math.matrix(grid));
    ansDet.value = a;

    detBtn.style.backgroundColor = 'green'
});
    
//indices button
indicesBtnDet.addEventListener('click', function(){
    indices('det', pwrDet);
});

//multiplier button
multipleBtnDet.addEventListener('click', function(){
    multiplier('det', multiDet);
});










/*INVERSE EVENTLISTENERS*/
oboBtnInv.addEventListener('click', function(){

    obo(invTable, "inv");

    oboBtnInv.disabled = true;

    tbtBtnInv.disabled = false;
    thbthBtnInv.disabled = false;
    fbfBtnInv.disabled = false;
    fibfiBtnInv.disabled = false;
    sbsBtnInv.disabled = false;
    sebseBtnInv.disabled = false;
    ebeBtnInv.disabled = false;

});

tbtBtnInv.addEventListener('click', function(){

    tbt(invTable, "inv");

    tbtBtnInv.disabled = true;

    oboBtnInv.disabled = false;
    thbthBtnInv.disabled = false;
    fbfBtnInv.disabled = false;
    fibfiBtnInv.disabled = false;
    sbsBtnInv.disabled = false;
    sebseBtnInv.disabled = false;
    ebeBtnInv.disabled = false;

});

thbthBtnInv.addEventListener('click', function(){

    thbth(invTable, "inv");

    thbthBtnInv.disabled = true;

    oboBtnInv.disabled = false;
    tbtBtnInv.disabled = false;
    fbfBtnInv.disabled = false;
    fibfiBtnInv.disabled = false;
    sbsBtnInv.disabled = false;
    sebseBtnInv.disabled = false;
    ebeBtnInv.disabled = false;

});


fbfBtnInv.addEventListener('click', function(){

    fbf(invTable, "inv");

    fbfBtnInv.disabled = true;

    oboBtnInv.disabled = false;
    tbtBtnInv.disabled = false;
    thbthBtnInv.disabled = false;
    fibfiBtnInv.disabled = false;
    sbsBtnInv.disabled = false;
    sebseBtnInv.disabled = false;
    ebeBtnInv.disabled = false;

});

fibfiBtnInv.addEventListener('click', function(){

    fibfi(invTable, "inv");

    fibfiBtnInv.disabled = true;

    oboBtnInv.disabled = false;
    tbtBtnInv.disabled = false;
    thbthBtnInv.disabled = false;
    fbfBtnInv.disabled = false;
    sbsBtnInv.disabled = false;
    sebseBtnInv.disabled = false;
    ebeBtnInv.disabled = false;
});

sbsBtnInv.addEventListener('click', function(){

    sbs(invTable, "inv");

    sbsBtnInv.disabled = true;

    oboBtnInv.disabled = false;
    tbtBtnInv.disabled = false;
    thbthBtnInv.disabled = false;
    fbfBtnInv.disabled = false;
    fibfiBtnInv.disabled = false;
    sebseBtnInv.disabled = false;
    ebeBtnInv.disabled = false;

});

sebseBtnInv.addEventListener('click', function(){

    sebse(invTable, "inv");

    sebseBtnInv.disabled = true;

    oboBtnInv.disabled = false;
    tbtBtnInv.disabled = false;
    thbthBtnInv.disabled = false;
    fbfBtnInv.disabled = false;
    fibfiBtnInv.disabled = false;
    sbsBtnInv.disabled = false;
    ebeBtnInv.disabled = false;

});

ebeBtnInv.addEventListener('click', function(){

    ebe(invTable, "inv");

    ebeBtnInv.disabled = true;

    oboBtnInv.disabled = false;
    tbtBtnInv.disabled = false;
    thbthBtnInv.disabled = false;
    fbfBtnInv.disabled = false;
    fibfiBtnInv.disabled = false;
    sbsBtnInv.disabled = false;
    sebseBtnInv.disabled = false;
});


invBtn.addEventListener('click', function(){

    //displays answer when button is pressed
    ansBlockInv.style.display="block";

    //calculates matrix depending on its size
    let row = 0;
    let col = 0;

    if(oboBtnInv.disabled){
        row=1;
        col=1;
    }
    if(tbtBtnInv.disabled){
        row=2;
        col=2;
    }
    if(thbthBtnInv.disabled){
        row=3;
        col=3;
    }
    if(fbfBtnInv.disabled){
        row=4;
        col=4;
    }
    if(fibfiBtnInv.disabled){
        row=5;
        col=5;
    }
    if(sbsBtnInv.disabled){
        row=6;
        col=6;
    }
    if(sebseBtnInv.disabled){
        row=7;
        col=7;
    }
    if(ebeBtnInv.disabled){
        row=8;
        col=8;
    }
   
    //Table data for matrixe table cells
    let nameArray = [];
    for(var i=0; i<100; i++){
        if(i<10){
            nameArray[i] = document.querySelector('#invt0'+i);
            
        }else{
            nameArray[i] = document.querySelector('#invt'+i);
        }
        
    }

    //filter out null values from array
    
    let results = [];
    nameArray.forEach(element => {
    if (element !== null) {
        results.push(element.value);
    }
    
    });

    //put array into matrix form
    var count=0;
    var grid = [];
    for (let i = 0; i < row; i++) {
        grid[i] = [];
  
        for (let j = 0; j < col; j++) {
          grid[i][j] = results[count];
          count++;
        }
      }

    let a = math.inv(grid);

    //put answer into matrix layout
    
    let newArray=[];

    for(let i=0; i<a.length; i++){
        newArray = newArray.concat(a[i]);
    }

    rbc2(row, col, ansInv, "inv");

    let nameArray2 = [];
    for(var i=0; i<100; i++){
        if(i<10){
            nameArray2[i] = document.querySelector('#invt20'+i);
            
        }else{
            nameArray2[i] = document.querySelector('#invt2'+i);
        }
        
    }

    let ids = [];
    nameArray2.forEach(element => {
    if (element !== null) {

        ids.push(element);
    }
    });

    for(let i=0; i<results.length; i++){

        newArray[i] = math.fraction(newArray[i]);
        if(newArray[i]['d']!='1'){
            newArray[i] = newArray[i]['n']+'/'+newArray[i]['d']
        }
        ids[i].value = newArray[i];
    }

    invBtn.style.backgroundColor = 'green'
    
});
    
//indices button
indicesBtnInv.addEventListener('click', function(){
    indices('inv', pwrInv);
});

//multiplier button
multipleBtnInv.addEventListener('click', function(){
    multiplier('inv', multiInv)
});






/*TRANSPOSE EVENTLISTENERS*/

transBtn.addEventListener('click', function(){
    //displays answer when button is pressed
    ansBlockTrans.style.display="block";

    //Table data for matrixe table cells
    let nameArray = [];
    for(var i=0; i<100; i++){
        if(i<10){
            nameArray[i] = document.querySelector('#tt0'+i);
            
        }else{
            nameArray[i] = document.querySelector('#tt'+i);
        }
    }

    //filter out null values from array
    let results = [];
    nameArray.forEach(element => {
    if (element !== null) {
        results.push(element.value);
    }
    
    });

    //put array into matrix form
    var count=0;
    var grid = [];
    for (let i = 0; i < transRows.value; i++) {
        grid[i] = [];
  
        for (let j = 0; j < transColumns.value; j++) {
          grid[i][j] = results[count];
          count++;
        }
    }

    let a = math.transpose(grid);
    console.log(grid)
    console.log(a)
    //put answer into matrix layout
    
    let newArray=[];
    for(let i=0; i<a.length; i++){
        newArray = newArray.concat(a[i]);
    }
    

    //matrix size after multiplication
    let matrixSize = math.size(a)
    let rowt = matrixSize[0];
    let colt = matrixSize[1];


    rbc2(rowt, colt, ansTrans, "t");

    let nameArrayAns = [];
    for(var i=0; i<100; i++){
        if(i<10){
            nameArrayAns[i] = document.querySelector('#tt20'+i);
            
        }else{
            nameArrayAns[i] = document.querySelector('#tt2'+i);
        }
        
    }

    let ids = [];
    nameArrayAns.forEach(element => {
    if (element !== null) {
        ids.push(element);
    }
    });

    

    for(let i=0; i<newArray.length; i++){

        newArray[i] = math.fraction(newArray[i]);
        if(newArray[i]['d']!='1'){
            newArray[i] = newArray[i]['n']+'/'+newArray[i]['d']
        }
        ids[i].value = newArray[i];
    }

    transBtn.style.backgroundColor = 'green'
});

SizeBtnTrans.addEventListener('click', function(){

    deleteTable(transTable);
    rbc(transRows.value, transColumns.value, transTable, 't');
});

indicesBtnTrans.addEventListener('click', function(){
    indices('t', pwrTrans);
});

multipleBtnTrans.addEventListener('click', function(){
    multiplier('t', pwrTrans);
});






/*EIGANVALUES EVENTLISTENERS*/

oboBtnEigVal.addEventListener('click', function(){

    obo(eigValTable, "eva");

    oboBtnEigVal.disabled = true;

    tbtBtnEigVal.disabled = false;
    thbthBtnEigVal.disabled = false;
    fbfBtnEigVal.disabled = false;
    fibfiBtnEigVal.disabled = false;
    sbsBtnEigVal.disabled = false;
    sebseBtnEigVal.disabled = false;
    ebeBtnEigVal.disabled = false;

});

tbtBtnEigVal.addEventListener('click', function(){

    tbt(eigValTable, "eva");

    tbtBtnEigVal.disabled = true;

    oboBtnEigVal.disabled = false;
    thbthBtnEigVal.disabled = false;
    fbfBtnEigVal.disabled = false;
    fibfiBtnEigVal.disabled = false;
    sbsBtnEigVal.disabled = false;
    sebseBtnEigVal.disabled = false;
    ebeBtnEigVal.disabled = false;

});

thbthBtnEigVal.addEventListener('click', function(){

    thbth(eigValTable, "eva");

    thbthBtnEigVal.disabled = true;

    oboBtnEigVal.disabled = false;
    tbtBtnEigVal.disabled = false;
    fbfBtnEigVal.disabled = false;
    fibfiBtnEigVal.disabled = false;
    sbsBtnEigVal.disabled = false;
    sebseBtnEigVal.disabled = false;
    ebeBtnEigVal.disabled = false;

});


fbfBtnEigVal.addEventListener('click', function(){

    fbf(eigValTable, "eva");

    fbfBtnEigVal.disabled = true;

    oboBtnEigVal.disabled = false;
    tbtBtnEigVal.disabled = false;
    thbthBtnEigVal.disabled = false;
    fibfiBtnEigVal.disabled = false;
    sbsBtnEigVal.disabled = false;
    sebseBtnEigVal.disabled = false;
    ebeBtnEigVal.disabled = false;

});

fibfiBtnEigVal.addEventListener('click', function(){

    fibfi(eigValTable, "eva");

    fibfiBtnEigVal.disabled = true;

    oboBtnEigVal.disabled = false;
    tbtBtnEigVal.disabled = false;
    thbthBtnEigVal.disabled = false;
    fbfBtnEigVal.disabled = false;
    sbsBtnEigVal.disabled = false;
    sebseBtnEigVal.disabled = false;
    ebeBtnEigVal.disabled = false;
});

sbsBtnEigVal.addEventListener('click', function(){

    sbs(eigValTable, "eva");

    sbsBtnEigVal.disabled = true;

    oboBtnEigVal.disabled = false;
    tbtBtnEigVal.disabled = false;
    thbthBtnEigVal.disabled = false;
    fbfBtnEigVal.disabled = false;
    fibfiBtnEigVal.disabled = false;
    sebseBtnEigVal.disabled = false;
    ebeBtnEigVal.disabled = false;

});

sebseBtnEigVal.addEventListener('click', function(){

    sebse(eigValTable, "eva");

    sebseBtnEigVal.disabled = true;

    oboBtnEigVal.disabled = false;
    tbtBtnEigVal.disabled = false;
    thbthBtnEigVal.disabled = false;
    fbfBtnEigVal.disabled = false;
    fibfiBtnEigVal.disabled = false;
    sbsBtnEigVal.disabled = false;
    ebeBtnEigVal.disabled = false;

});

ebeBtnEigVal.addEventListener('click', function(){

    ebe(eigValTable, "eva");

    ebeBtnEigVal.disabled = true;

    oboBtnEigVal.disabled = false;
    tbtBtnEigVal.disabled = false;
    thbthBtnEigVal.disabled = false;
    fbfBtnEigVal.disabled = false;
    fibfiBtnEigVal.disabled = false;
    sbsBtnEigVal.disabled = false;
    sebseBtnEigVal.disabled = false;
});

//determinant calculator
eigValBtn.addEventListener('click', function(){

    //displays answer when button is pressed
    ansBlockEigVal.style.display="block";
   
    //Table data for matrixs table cells
    let nameArray = [];
    for(var i=0; i<100; i++){
        if(i<10){
            nameArray[i] = document.querySelector('#evat0'+i);
            
        }else{
            nameArray[i] = document.querySelector('#evat'+i);
        }
        
    }

    //filter out null values from array
    let results = [];
    nameArray.forEach(element => {
    if (element !== null) {
        results.push(element.value);
    }
    });
    
    //calculates matrix depending on its size
    let row = 0;
    let col = 0;

    if(oboBtnEigVal.disabled){
        row=1;
        col=1;
    }
    if(tbtBtnEigVal.disabled){
        row=2;
        col=2;
    }
    if(thbthBtnEigVal.disabled){
        row=3;
        col=3;
    }
    if(fbfBtnEigVal.disabled){
        row=4;
        col=4;
    }
    if(fibfiBtnEigVal.disabled){
        row=5;
        col=5;
    }
    if(sbsBtnEigVal.disabled){
        row=6;
        col=6;
    }
    if(sebseBtnEigVal.disabled){
        row=7;
        col=7;
    }
    if(ebeBtnEigVal.disabled){
        row=8;
        col=8;
    }

    //put in matrix form to allow calculation
    var count=0;
    var grid = [];
    for (let i = 0; i < row; i++) {
        grid[i] = [];
  
        for (let j = 0; j < col; j++) {
          grid[i][j] = results[count];
          count++;
        }
    }

    let a = math.eigs(grid ).values;

    

    for(let i=0; i<a.length; i++){
        let div = document.createElement('div');
        let input = document.createElement('input');
        input.value = 'λ = '+a[i];

        div.appendChild(input);
        ansBoxEigVal.appendChild(div);
    }

    console.log(a)

    eigValBtn.style.backgroundColor = 'green'
});
    
//indices button
indicesBtnEigVal.addEventListener('click', function(){
    indices('eva', pwrEigVal);
});

//multiplier button
multipleBtnEigVal.addEventListener('click', function(){
    multiplier('eva', multiEigVal);
});







/*EIGANVECTORS EVENTLISTENERS*/

oboBtnEigVec.addEventListener('click', function(){

    obo(eigVecTable, "eve");

    oboBtnEigVec.disabled = true;

    tbtBtnEigVec.disabled = false;
    thbthBtnEigVec.disabled = false;
    fbfBtnEigVec.disabled = false;
    fibfiBtnEigVec.disabled = false;
    sbsBtnEigVec.disabled = false;
    sebseBtnEigVec.disabled = false;
    ebeBtnEigVec.disabled = false;

});

tbtBtnEigVec.addEventListener('click', function(){

    tbt(eigVecTable, "eve");

    tbtBtnEigVec.disabled = true;

    oboBtnEigVec.disabled = false;
    thbthBtnEigVec.disabled = false;
    fbfBtnEigVec.disabled = false;
    fibfiBtnEigVec.disabled = false;
    sbsBtnEigVec.disabled = false;
    sebseBtnEigVec.disabled = false;
    ebeBtnEigVec.disabled = false;

});

thbthBtnEigVec.addEventListener('click', function(){

    thbth(eigVecTable, "eve");

    thbthBtnEigVec.disabled = true;

    oboBtnEigVec.disabled = false;
    tbtBtnEigVec.disabled = false;
    fbfBtnEigVec.disabled = false;
    fibfiBtnEigVec.disabled = false;
    sbsBtnEigVec.disabled = false;
    sebseBtnEigVec.disabled = false;
    ebeBtnEigVec.disabled = false;

});


fbfBtnEigVec.addEventListener('click', function(){

    fbf(eigVecTable, "eve");

    fbfBtnEigVec.disabled = true;

    oboBtnEigVec.disabled = false;
    tbtBtnEigVec.disabled = false;
    thbthBtnEigVec.disabled = false;
    fibfiBtnEigVec.disabled = false;
    sbsBtnEigVec.disabled = false;
    sebseBtnEigVec.disabled = false;
    ebeBtnEigVec.disabled = false;

});

fibfiBtnEigVec.addEventListener('click', function(){

    fibfi(eigVecTable, "eve");

    fibfiBtnEigVec.disabled = true;

    oboBtnEigVec.disabled = false;
    tbtBtnEigVec.disabled = false;
    thbthBtnEigVec.disabled = false;
    fbfBtnEigVec.disabled = false;
    sbsBtnEigVec.disabled = false;
    sebseBtnEigVec.disabled = false;
    ebeBtnEigVec.disabled = false;
});

sbsBtnEigVec.addEventListener('click', function(){

    sbs(eigVecTable, "eve");

    sbsBtnEigVec.disabled = true;

    oboBtnEigVec.disabled = false;
    tbtBtnEigVec.disabled = false;
    thbthBtnEigVec.disabled = false;
    fbfBtnEigVec.disabled = false;
    fibfiBtnEigVec.disabled = false;
    sebseBtnEigVec.disabled = false;
    ebeBtnEigVec.disabled = false;

});

sebseBtnEigVec.addEventListener('click', function(){

    sebse(eigVecTable, "eve");

    sebseBtnEigVec.disabled = true;

    oboBtnEigVec.disabled = false;
    tbtBtnEigVec.disabled = false;
    thbthBtnEigVec.disabled = false;
    fbfBtnEigVec.disabled = false;
    fibfiBtnEigVec.disabled = false;
    sbsBtnEigVec.disabled = false;
    ebeBtnEigVec.disabled = false;

});

ebeBtnEigVec.addEventListener('click', function(){

    ebe(eigVecTable, "eve");

    ebeBtnEigVec.disabled = true;

    oboBtnEigVec.disabled = false;
    tbtBtnEigVec.disabled = false;
    thbthBtnEigVec.disabled = false;
    fbfBtnEigVec.disabled = false;
    fibfiBtnEigVec.disabled = false;
    sbsBtnEigVec.disabled = false;
    sebseBtnEigVec.disabled = false;
});

//determinant calculator
eigVecBtn.addEventListener('click', function(){

    //displays answer when button is pressed
    ansBlockEigVec.style.display="block";
   
    //Table data for matrixs table cells
    let nameArray = [];
    for(var i=0; i<100; i++){
        if(i<10){
            nameArray[i] = document.querySelector('#evet0'+i);
            
        }else{
            nameArray[i] = document.querySelector('#evet'+i);
        }
        
    }

    //filter out null values from array
    let results = [];
    nameArray.forEach(element => {
    if (element !== null) {
        results.push(element.value);
    }
    });
    
    //calculates matrix depending on its size
    let row = 0;
    let col = 0;

    if(oboBtnEigVec.disabled){
        row=1;
        col=1;
    }
    if(tbtBtnEigVec.disabled){
        row=2;
        col=2;
    }
    if(thbthBtnEigVec.disabled){
        row=3;
        col=3;
    }
    if(fbfBtnEigVec.disabled){
        row=4;
        col=4;
    }
    if(fibfiBtnEigVec.disabled){
        row=5;
        col=5;
    }
    if(sbsBtnEigVec.disabled){
        row=6;
        col=6;
    }
    if(sebseBtnEigVec.disabled){
        row=7;
        col=7;
    }
    if(ebeBtnEigVec.disabled){
        row=8;
        col=8;
    }

    //put in matrix form to allow calculation
    var count=0;
    var grid = [];
    for (let i = 0; i < row; i++) {
        grid[i] = [];
  
        for (let j = 0; j < col; j++) {
          grid[i][j] = results[count];
          count++;
        }
    }

    let a = math.eigs(grid ).vectors;

    

    for(let i=0; i<a.length; i++){
        let div = document.createElement('div');
        let input = document.createElement('input');
        input.value = a[i];

        div.appendChild(input);
        ansBoxEigVec.appendChild(div);
    }

    console.log(a)
    eigVecBtn.style.backgroundColor = 'green'
});
    
//indices button
indicesBtnEigVec.addEventListener('click', function(){
    indices('eve', pwrEigVec);
});

//multiplier button
multipleBtnEigVec.addEventListener('click', function(){
    multiplier('eve', multiEigVec);
});
